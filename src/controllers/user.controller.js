const { z, prisma, Role } = require("../utils");
const response = require("../utils/response");
const bcrypt = require("bcrypt");

const userSchema = z.object({
  username: z.string().min(1),
  password: z.string().min(1),
  role: z.enum(Object.values(Role)),
});

const index = async (req, res) => {
  const users = await prisma.user.findMany();
  return response.success(res, { users });
};

const show = async (req, res) => {
  return response.success(res, { user: req.user });
};

const store = async (req, res) => {
  try {
    var validatedData = userSchema.safeParse(req.body).data;
    validatedData.password = await bcrypt.hash(validatedData.password, 10);
    const user = await prisma.user.create({ data: validatedData });
    return response.success(res, { user });
  } catch (err) {
    console.log(err);
    return response.error(res, err);
  }
};

const update = async (req, res) => {
  try {
    var validatedData = userSchema.safeParse(req.body).data;
    var { password } = validatedData;
    if(password != "") {
      validatedData.password = await bcrypt.hash(password, 10);
    }
    const user = await prisma.user.update({
      where: { id: req.user.id },
      data: validatedData,
    });
    response.success(res, { user });
  } catch (err) {
    response.error(res, err.message);
  }
};

const destroy = (req, res) => {
  res.json({});
};

const findData = async (req, res, next) => {
  try {
    const user = await prisma.user.findFirst({
      where: {
        id: parseInt(req.params.id),
      },
      omit: {
        password: true,
      },
    });
    if (!user) {
      return response.error(res, "User not Found", 404);
    }
    req.user = user;
    next();
  } catch (error) {
    return response.error(res, error.message);
  }
};

module.exports = {
  index,
  show,
  destroy,
  update,
  store,
  findData,
};
