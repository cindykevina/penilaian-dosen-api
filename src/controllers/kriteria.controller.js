const { z, prisma } = require("../utils");
const response = require("../utils/response");

const kriteriaSchema = z.object({
  nama: z.string().min(1),
  bobot: z.number().min(1),
  deskripsi: z.string(),
  jenis: z.string().min(1),
});

const index = async (req, res) => {
  const kriterias = await prisma.kriteria.findMany();
  return response.success(res, { kriterias });
};

const show = async (req, res) => {
  return response.success(res, { kriteria: req.kriteria });
};

const store = async (req, res) => {
  try {
    const validatedData = kriteriaSchema.parse(req.body);
    const kriteria = await prisma.kriteria.create({ data: validatedData });
    return response.success(res, { kriteria });
  } catch (err) {
    return response.error(res, err);
  }
};

const update = async (req, res) => {
  try {
    console.log(req.body);
    const validatedData = kriteriaSchema.parse(req.body);
    const kriteria = await prisma.kriteria.update({
      where: { id: req.kriteria.id },
      data: validatedData,
    });
    response.success(res, { kriteria });
  } catch (err) {
    response.error(res, err.message);
  }
};

const destroy = (req, res) => {
  res.json({});
};

const findData = async (req, res, next) => {
  try {
    const kriteria = await prisma.kriteria.findFirst({
      where: { id: parseInt(req.params.id) },
    });
    if (!kriteria) {
      return response.error(res, "Periode not Found", 404);
    }
    req.kriteria = kriteria;
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
