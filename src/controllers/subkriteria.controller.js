const { z, prisma, Jabatan } = require("../utils");
const response = require("../utils/response");

const subKriteriaSchema = z.object({
  nama: z.string().min(1),
  bobot: z.number().min(1),
  kriteriaId: z.number().min(1),
});

const index = async (req, res) => {
  const subKriterias = await prisma.subKriteria.findMany({include: {kriteria: true}});
  return response.success(res, { subKriterias });
};

const show = async (req, res) => {
  return response.success(res, { subKriteria: req.subKriteria });
};

const store = async (req, res) => {
  try {
    const validatedData = subKriteriaSchema.parse(req.body);
    const { nama, bobot, kriteriaId } = validatedData;
    const kriteria = await prisma.kriteria.findFirst({
      where: { id: parseInt(kriteriaId) },
    });

    if (!kriteria) {
      response.error(res, "Kriteria Not Found", 404);
    }
    validatedData.kriteria = kriteria;
    const subKriteria = await prisma.subKriteria.create({
      data: { nama, bobot, kriteriaId: kriteriaId },
    });
    return response.success(res, { subKriteria });
  } catch (err) {
    console.log(err);
    return response.error(res, err);
  }
};

const update = async (req, res) => {
  try {
    const validatedData = subKriteriaSchema.parse(req.body);
    const subKriteria = await prisma.subKriteria.update({
      where: { id: req.subKriteria.id },
      data: validatedData,
    });
    response.success(res, { subKriteria });
  } catch (err) {
    response.error(res, err.message);
  }
};

const destroy = (req, res) => {
  res.json({});
};

const findData = async (req, res, next) => {
  try {
    const subKriteria = await prisma.subKriteria.findFirst({
      where: { id: parseInt(req.params.id) },
    });
    if (!subKriteria) {
      return response.error(res, "Dosen not Found", 404);
    }
    req.subKriteria = subKriteria;
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
