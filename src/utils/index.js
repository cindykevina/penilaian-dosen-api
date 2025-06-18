const { z } = require("zod");
const { PrismaClient, Role, Jabatan } = require("../generated/prisma");
const { group } = require("console");

const prisma = new PrismaClient();
const calculateSAW = async (periodeId) => {
  const dosens = await prisma.dosen.findMany({
    where: {
      Report: {
        some: {},
      },
    },
    include: {
      Report: {
        where: { periodeId: periodeId },
      },
      homebase: true,
    },
  });
  var dosen = dosens;
  if (dosen.length == 0 || !dosen[0].Report[0]) {
    return [];
  }
  await Promise.all(
    dosen.map(async (e) => {
      const sum =
        await prisma.$queryRaw`SELECT tt.id, tt.nama, tt.bobot, ta.total_point, tt.jumlah
      FROM (SELECT kriteria.id as id, kriteria.nama, kriteria.bobot, SUM(penilaian.nilai) as jumlah FROM penilaian
      JOIN report ON report.id = penilaian.report_id
      JOIN dosen ON dosen.id = report.dosen_id
      JOIN sub_kriteria ON sub_kriteria.id = penilaian.sub_kriteria_id
      JOIN kriteria ON kriteria.id = sub_kriteria.kriteria_id
      WHERE dosen.id = ${e.id} AND report.periode_id = ${periodeId}
			GROUP BY kriteria.id) as tt,
			(SELECT kriteria.id as id, SUM(sub_kriteria.nilai_maksimal) as total_point  FROM sub_kriteria
			JOIN kriteria ON  kriteria.id = sub_kriteria.kriteria_id
			GROUP BY kriteria.id ) as ta
			WHERE tt.id = ta.id`;
      e.sum = sum;
      return e;
    })
  );
  dosen.map((e) => {
    e.sum.map((i) => {
      i.normalisasi =
        ((i.jumlah / parseFloat(i.total_point)) * parseFloat(i.bobot)) / 100;
    });
    const total = e.sum.reduce((acc, curr) => acc + curr.normalisasi, 0);
    e.hasil_akhir = total;
  });

  var  sortedDosens = dosens.sort((a, b) => b.hasil_akhir - a.hasil_akhir);
  sortedDosens.map((e, index) => {
    e.rank = index + 1
  })

  return sortedDosens;
};

module.exports = {
  prisma,
  z,
  Role,
  Jabatan,
  calculateSAW,
};
