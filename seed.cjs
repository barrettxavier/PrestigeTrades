const { PrismaClient } = require("@prisma/client");
const bcrypt = require("bcrypt");

const prisma = new PrismaClient();

const users = [
  { username: "demo", password: "123" },
  { username: "bob", password: "123" },
  { username: "carol", password: "123" },
];

async function main() {
  const demo = await prisma.user.create({
    data: {
      username: "Demo",
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
        date: new Date("03/01/2024"),
        userId: demo.id,
      },
      {
        ticker: "ES",
        quantity: 1,
        entryPrice: 4031.25,
        exitPrice: 4025.5,
        callOrPut: "PUT",
        date: new Date("03/04/2024"),
        userId: demo.id,
      },
      {
        ticker: "ES",
        quantity: 1,
        entryPrice: 4020.25,
        exitPrice: 4033.75,
        callOrPut: "CALL",
        date: new Date("03/04/2024"),
        userId: demo.id,
      },
      {
        ticker: "ES",
        quantity: 1,
        entryPrice: 4065,
        exitPrice: 4059.25,
        callOrPut: "PUT",
        date: new Date("03/05/2024"),
        userId: demo.id,
      },
      {
        ticker: "ES",
        quantity: 3,
        entryPrice: 4020,
        exitPrice: 4018.25,
        callOrPut: "CALL",
        date: new Date("03/6/2024"),
        userId: demo.id,
      },
      {
        ticker: "ES",
        quantity: 1,
        entryPrice: 4053,
        exitPrice: 4053.75,
        callOrPut: "PUT",
        date: new Date("03/7/2024"),
        userId: demo.id,
      },

      {
        ticker: "ES",
        quantity: 3,
        entryPrice: 4020.25,
        exitPrice: 4023.5,
        callOrPut: "CALL",
        date: new Date("03/7/2024"),
        userId: demo.id,
      },

      {
        ticker: "ES",
        quantity: 1,
        entryPrice: 4026.25,
        exitPrice: 4023.5,
        callOrPut: "CALL",
        date: new Date("03/11/2024"),
        userId: demo.id,
      },
      {
        ticker: "ES",
        quantity: 4,
        entryPrice: 4023.25,
        exitPrice: 4027.25,
        callOrPut: "PUT",
        date: new Date("03/12/2024"),
        userId: demo.id,
      },
      {
        ticker: "ES",
        quantity: 2,
        entryPrice: 4023.25,
        exitPrice: 4017.75,
        callOrPut: "PUT",
        date: new Date("03/14/2024"),
        userId: demo.id,
      },

      {
        ticker: "ES",
        quantity: 1,
        entryPrice: 4023.25,
        exitPrice: 4026.25,
        callOrPut: "PUT",
        date: new Date("03/15/2024"),
        userId: demo.id,
      },

      {
        ticker: "ES",
        quantity: 1,
        entryPrice: 4023.25,
        exitPrice: 4017.75,
        callOrPut: "PUT",
        date: new Date("03/18/2024"),
        userId: demo.id,
      },

      {
        ticker: "ES",
        quantity: 1,
        entryPrice: 4023.25,
        exitPrice: 4026.25,
        callOrPut: "PUT",
        date: new Date("03/19/2024"),
        userId: demo.id,
      },

      {
        ticker: "ES",
        quantity: 1,
        entryPrice: 4022.25,
        exitPrice: 4019.75,
        callOrPut: "PUT",
        date: new Date("03/20/2024"),
        userId: demo.id,
      },

      {
        ticker: "ES",
        quantity: 1,
        entryPrice: 4025.25,
        exitPrice: 4026.25,
        callOrPut: "PUT",
        date: new Date("03/22/2024"),
        userId: demo.id,
      },

      {
        ticker: "ES",
        quantity: 1,
        entryPrice: 4023.25,
        exitPrice: 4015.75,
        callOrPut: "PUT",
        date: new Date("03/25/2024"),
        userId: demo.id,
      },
    ],
  });

  const journalEntries = await prisma.journalEntries.createMany({
    data: [
      {
        entry: "I made a great trade today",
        userId: demo.id,
        tradeId: 10,
      },
      {
        entry: "Patience paid off today",
        userId: demo.id,
        tradeId: 12,
      },
      {
        entry: "Overall had good execution on this trade",
        userId: demo.id,
        tradeId: 14,
      },
      {
        entry: "Entered a bit early, resulted in more drawdown than expected",
        userId: demo.id,
        tradeId: 11,
      },
      {
        entry: "Waited for setup, very nice trade",
        userId: demo.id,
        tradeId: 16,
      },
      {
        entry: "Took a small loss today, but it was a good trade",
        userId: demo.id,
        tradeId: 15,
      },
      {
        entry: "Choppy in the morning, should have waited for better setup",
        userId: demo.id,
        tradeId: 13,
      },
      {
        entry: "Entered a bit early, resulted in more drawdown than expected",
        userId: demo.id,
        tradeId: 1,
      },
      {
        entry: "Waited for setup, very nice trade",
        userId: demo.id,
        tradeId: 2,
      },
      {
        entry: "Took a small loss today, but it was a good trade",
        userId: demo.id,
        tradeId: 3,
      },
      {
        entry: "Choppy in the morning, should have waited for better setup",
        userId: demo.id,
        tradeId: 4,
      },
      {
        entry: "Entered a bit early, resulted in more drawdown than expected",
        userId: demo.id,
        tradeId: 5,
      },
      {
        entry: "Waited for setup, very nice trade",
        userId: demo.id,
        tradeId: 6,
      },
      {
        entry: "Took a small loss today, but it was a good trade",
        userId: demo.id,
        tradeId: 7,
      },
      {
        entry: "Choppy in the morning, should have waited for better setup",
        userId: demo.id,
        tradeId: 8,
      },
      {
        entry: "Entered a bit early, resulted in more drawdown than expected",
        userId: demo.id,
        tradeId: 9,
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
