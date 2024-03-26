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
        quantity: 2,
        entryPrice: 4010.25,
        exitPrice: 4033.5,
        callOrPut: "CALL",
        date: new Date("03/02/2024"),
        userId: demo.id,
      },
      {
        ticker: "ES",
        quantity: 2,
        entryPrice: 4041.25,
        exitPrice: 4015.5,
        callOrPut: "PUT",
        date: new Date("03/05/2024"),
        userId: demo.id,
      },
      {
        ticker: "ES",
        quantity: 2,
        entryPrice: 4010.25,
        exitPrice: 4043.75,
        callOrPut: "CALL",
        date: new Date("03/05/2024"),
        userId: demo.id,
      },
      {
        ticker: "ES",
        quantity: 2,
        entryPrice: 4065,
        exitPrice: 4049.25,
        callOrPut: "PUT",
        date: new Date("03/06/2024"),
        userId: demo.id,
      },
      {
        ticker: "ES",
        quantity: 3,
        entryPrice: 4020,
        exitPrice: 4008.25,
        callOrPut: "CALL",
        date: new Date("03/7/2024"),
        userId: demo.id,
      },
      {
        ticker: "ES",
        quantity: 2,
        entryPrice: 4053,
        exitPrice: 4056.75,
        callOrPut: "PUT",
        date: new Date("03/9/2024"),
        userId: demo.id,
      },
      {
        ticker: "ES",
        quantity: 3,
        entryPrice: 4010.25,
        exitPrice: 4033.5,
        callOrPut: "CALL",
        date: new Date("03/9/2024"),
        userId: demo.id,
      },
      {
        ticker: "ES",
        quantity: 2,
        entryPrice: 4026.25,
        exitPrice: 4020.5,
        callOrPut: "CALL",
        date: new Date("03/12/2024"),
        userId: demo.id,
      },
      {
        ticker: "ES",
        quantity: 4,
        entryPrice: 4023.25,
        exitPrice: 4029.25,
        callOrPut: "PUT",
        date: new Date("03/13/2024"),
        userId: demo.id,
      },
      {
        ticker: "ES",
        quantity: 4,
        entryPrice: 4033.25,
        exitPrice: 4007.75,
        callOrPut: "PUT",
        date: new Date("03/15/2024"),
        userId: demo.id,
      },

      {
        ticker: "ES",
        quantity: 2,
        entryPrice: 4023.25,
        exitPrice: 4029.25,
        callOrPut: "PUT",
        date: new Date("03/16/2024"),
        userId: demo.id,
      },

      {
        ticker: "ES",
        quantity: 1,
        entryPrice: 4033.25,
        exitPrice: 4007.75,
        callOrPut: "PUT",
        date: new Date("03/19/2024"),
        userId: demo.id,
      },

      {
        ticker: "ES",
        quantity: 2,
        entryPrice: 4023.25,
        exitPrice: 4026.25,
        callOrPut: "PUT",
        date: new Date("03/20/2024"),
        userId: demo.id,
      },

      {
        ticker: "ES",
        quantity: 2,
        entryPrice: 4022.25,
        exitPrice: 4009.75,
        callOrPut: "PUT",
        date: new Date("03/21/2024"),
        userId: demo.id,
      },

      {
        ticker: "ES",
        quantity: 2,
        entryPrice: 4025.25,
        exitPrice: 4028.25,
        callOrPut: "PUT",
        date: new Date("03/23/2024"),
        userId: demo.id,
      },

      {
        ticker: "ES",
        quantity: 2,
        entryPrice: 4023.25,
        exitPrice: 4005.75,
        callOrPut: "PUT",
        date: new Date("03/26/2024"),
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
