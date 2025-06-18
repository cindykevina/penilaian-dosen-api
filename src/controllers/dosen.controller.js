const { z, prisma, Jabatan } = require("../utils");
const response = require("../utils/response");

const dosenSchema = z.object({
  nama: z.string().min(1),
  nip: z.string().min(1),
  jabatan: z.enum(Object.values(Jabatan)),
  homebaseId: z.number().min(1),
});

const index = async (req, res) => {
  const dosens = await prisma.dosen.findMany();
  return response.success(res, { dosens });
};

const show = async (req, res) => {
  return response.success(res, { dosen: req.dosen });
};

const store = async (req, res) => {
  try {
    const validatedData = dosenSchema.parse(req.body);
    const { nama, nip, jabatan, homebaseId } = validatedData;
    const homebase = await prisma.homebase.findFirst({
      where: { id: parseInt(homebaseId) },
    });

    if (!homebase) {
      response.error(res, "Fakultas Not Found", 404);
    }
    validatedData.homebase = homebase;
    const dosen = await prisma.dosen.create({
      data: { nama, nip, jabatan, homebaseId: homebaseId },
    });
    return response.success(res, { dosen });
  } catch (err) {
    console.log(err);
    return response.error(res, err);
  }
};

const update = async (req, res) => {
  try {
    const validatedData = dosenSchema.parse(req.body);
    const dosen = await prisma.dosen.update({
      where: { id: req.dosen.id },
      data: validatedData,
    });
    response.success(res, { dosen });
  } catch (err) {
    response.error(res, err.message);
  }
};

const getDosenByPeriode = async (req, res) => {
  try {
    var periode = await prisma.periode.findFirst({
      where: { id: parseInt(req.params.periodeId) },
    });
    var dosens = await prisma.dosen.findMany({
      include: {
        Report: { where: { periodeId: periode.id } },
      },
    });
    response.success(res, { dosens });
  } catch (err) {
    response.error(res, err.message);
  }
};

const destroy = (req, res) => {
  res.json({});
};

const findData = async (req, res, next) => {
  try {
    const dosen = await prisma.dosen.findFirst({
      where: { id: parseInt(req.params.id) },
    });
    if (!dosen) {
      return response.error(res, "Dosen not Found", 404);
    }
    req.dosen = dosen;
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
  getDosenByPeriode,
};
