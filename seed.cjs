const { PrismaClient } = require("@prisma/client");
const bcrypt = require("bcrypt");

const prisma = new PrismaClient();

const users = [
  { username: "Xavier", password: "123" },
  { username: "bob", password: "123" },
  { username: "carol", password: "123" },
];

async function main() {
  const xavier = await prisma.user.create({
    data: {
      username: "Xavier",
      password: await bcrypt.hash("123", 5),
      email: "xbarr001@gmail.com",
    },
  });

  const bob = await prisma.user.create({
    data: {
      username: "bob",
      password: await bcrypt.hash("123", 5),
      email: "bob@gmail.com",
    },
  });

  const carol = await prisma.user.create({
    data: {
      username: "carol",
      password: await bcrypt.hash("123", 5),
      email: "carol@gmail.com",
    },
  });

  const trades = await prisma.trades.createMany({
    data: [
      {
        ticker: "ES",
        quantity: 1,
        entryPrice: 4020.25,
        exitPrice: 4023.5,
        callOrPut: "CALL",
        date: new Date(),
        userId: xavier.id,
      },
      {
        ticker: "ES",
        quantity: 1,
        entryPrice: 4031.25,
        exitPrice: 4025.5,
        callOrPut: "PUT",
        date: new Date(),
        userId: xavier.id,
      },
      {
        ticker: "ES",
        quantity: 1,
        entryPrice: 4020.25,
        exitPrice: 4033.75,
        callOrPut: "CALL",
        date: new Date(),
        userId: xavier.id,
      },
      {
        ticker: "ES",
        quantity: 1,
        entryPrice: 4065,
        exitPrice: 4059.25,
        callOrPut: "PUT",
        date: new Date(),
        userId: xavier.id,
      },
      {
        ticker: "ES",
        quantity: 1,
        entryPrice: 4020,
        exitPrice: 4018.25,
        callOrPut: "CALL",
        date: new Date(),
        userId: xavier.id,
      },
      {
        ticker: "ES",
        quantity: 1,
        entryPrice: 4053,
        exitPrice: 4053.75,
        callOrPut: "PUT",
        date: new Date(),
        userId: xavier.id,
      },
    ],
  });

  const journalEntries = await prisma.journalEntries.createMany({
    data: [
      {
        entry: "I made a great trade today",
        userId: xavier.id,
        tradeId: 1,
      },
      {
        entry: "I made a great trade today",
        userId: xavier.id,
        tradeId: 2,
      },
      {
        entry: "I made a great trade today",
        userId: bob.id,
        tradeId: 3,
      },
      {
        entry: "I made a great trade today",
        userId: bob.id,
        tradeId: 4,
      },
      {
        entry: "I made a great trade today",
        userId: carol.id,
        tradeId: 5,
      },
      {
        entry: "I made a great trade today",
        userId: carol.id,
        tradeId: 6,
      },
    ],
  });
}

main()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
  });
