const { z, prisma, Jabatan } = require("../utils");
const response = require("../utils/response");

const homebaseSchema = z.object({
  nama: z.string().min(1),
});

const index = async (req, res) => {
  const homebases = await prisma.homebase.findMany();
  return response.success(res, { homebases });
};

const show = async (req, res) => {
  return response.success(res, { homebase: req.homebase });
};

const store = async (req, res) => {
  try {
    const validatedData = homebaseSchema.parse(req.body);
    const homebase = await prisma.homebase.create({ data: validatedData });
    return response.success(res, { homebase });
  } catch (err) {
    return response.error(res, err);
  }
};

const update = async (req, res) => {
  try {
    const validatedData = homebaseSchema.parse(req.body);
    const homebase = await prisma.homebase.update({
      where: { id: req.homebase.id },
      data: validatedData,
    });
    response.success(res, { homebase });
  } catch (err) {
    response.error(res, err.message);
  }
};

const destroy = (req, res) => {
  res.json({});
};

const findData = async (req, res, next) => {
  try {
    const homebase = await prisma.homebase.findFirst({
      where: { id: parseInt(req.params.id) },
    });
    if (!homebase) {
      return response.error(res, "Fakultas not Found", 404);
    }
    req.homebase = homebase;
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
