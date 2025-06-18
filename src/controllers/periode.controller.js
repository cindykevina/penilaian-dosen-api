const { z, prisma } = require("../utils");
const response = require("../utils/response");

const periodeSchema = z.object({
  periode: z.string(),
});

const index = async (req, res) => {
  const periodes = await prisma.periode.findMany();
  return response.success(res, { periodes });
};

const show = async (req, res) => {
  return response.success(res, { periode: req.periode });
};

const store = async (req, res) => {
  try {
    const validatedData = periodeSchema.parse(req.body);
    const periode = await prisma.periode.create({ data: validatedData });
    return response.success(res, { periode });
  } catch (err) {
    return response.error(res, err);
  }
};

const update = async (req, res) => {
  try {
    const validatedData = periodeSchema.parse(req.body);
    const periode = await prisma.periode.update({
      where: { id: req.periode.id },
      data: validatedData,
    });
    response.success(res, { periode });
  } catch (err) {
    response.error(res, err.message);
  }
};

const destroy = (req, res) => {
  res.json({});
};

const findData = async (req, res, next) => {
  try {
    const periode = await prisma.periode.findFirst({
      where: { id: parseInt(req.params.id) },
    });
    if (!periode) {
      return response.error(res, "Periode not Found", 404);
    }
    req.periode = periode;
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
