const { PrismaClient, Role } = require("../src/generated/prisma");
const prisma = new PrismaClient();
const bcrypt = require("bcrypt");
const { dataDosen, dataHomebase, dataKriteria, dataPeriode, dataSubKriteria } = require("./dataSeed");

async function main() {
  const bob = await prisma.user.upsert({
    where: { username: "admin" },
    update: {},
    create: {
      username: "admin",
      role: Role.ADMIN,
      password: await bcrypt.hash("password", 10),
    },
  });

  const periodes  = await prisma.periode.createMany({
    data: dataPeriode
  })

  const homebase  = await prisma.homebase.createMany({
    data: dataHomebase
  })

  const dosen  = await prisma.dosen.createMany({
    data: dataDosen
  })

  const kriteria  = await prisma.kriteria.createMany({
    data: dataKriteria
  })

  const subkriteria  = await prisma.subKriteria.createMany({
    data: dataSubKriteria
  })
}

main();
