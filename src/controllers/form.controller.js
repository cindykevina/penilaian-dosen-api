const { z, prisma, calculateSAW } = require("../utils");
const response = require("../utils/response");

const kriteriaSchema = z.object({
  nama: z.string().min(1),
  bobot: z.number().min(1),
  deskripsi: z.string(),
  jenis: z.string().min(1),
});

const getForm = async (req, res) => {
  const form = await prisma.kriteria.findMany({
    include: {
      SubKriteria: true,
    },
  });
  return response.success(res, { form });
};

const store = async (req, res) => {
  try {
    const { dosenId, periodeId, formValue } = req.body;
    const report = await prisma.report.create({
      data: {
        status: "PENDING",
        dosenId: dosenId,
        periodeId: periodeId,
        deskripsi: "",
      },
    });

    formValue.map(async (e) => {
      await prisma.penilaian.create({
        data: {
          nilai: e.nilai,
          subKriteriaId: e.id,
          reportId: report.id,
          evaluatorId: req.user.id,
        },
      });
    });
    return response.success(res, {});
  } catch (err) {
    return response.error(res, err.message);
  }
};

const getPenilaian = async (req, res) => {
  try {
    const { dosenId, periodeId } = req.params;
    const report = await prisma.report.findFirst({
      include: {
        Penilaian: true,
      },
      where: {
        dosenId: parseInt(dosenId),
        periodeId: parseInt(periodeId),
      },
    });
    response.success(res, {report})
  } catch (error) {
    response.error(res, error.message);
  }
};

const show = async (req, res) => {
  const dosens = await calculateSAW(parseInt(req.body.periodeId));
  console.log(dosens);
  if (dosens.length == 0) {
    response.success(res, { dosens: [] });
    return;
  }
  await Promise.all(
    dosens.map(async (e) => {
      await prisma.report.update({
        where: { id: parseInt(e.Report[0].id), dosenId: e.id },
        data: { nilaiAkhir: e.hasil_akhir },
      });
    })
  );
  response.success(res, { dosens });
};

module.exports = {
  getForm,
  getPenilaian,
  store,
  show,
};
