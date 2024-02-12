const { PrismaClient } = require("@prisma/client");

const prisma = new PrismaClient();

const users = [
  { username: "alice", password: "123" },
  { username: "bob", password: "123" },
  { username: "carol", password: "123" },
];

async function main() {
  const alice = await prisma.user.create({
    data: {
      username: "alice",
      password: "123",
      email: "alice@gmail.com",
    },
  });

  const bob = await prisma.user.create({
    data: {
      username: "bob",
      password: "123",
      email: "bob@gmail.com",
    },
  });

  const carol = await prisma.user.create({
    data: {
      username: "carol",
      password: "123",
      email: "carol@gmail.com",
    },
  });

  const trades = await prisma.trades.createMany({
    data: [
      {
        ticker: "ES",
        quantity: 2,
        entryPrice: 4020,
        exitPrice: 4030,
        callOrPut: "call",
        date: new Date(),
        user_id: alice.id,
      },
      {
        ticker: "NQ",
        quantity: 5,
        entryPrice: 13000,
        exitPrice: 13010,
        callOrPut: "put",
        date: new Date(),
        user_id: alice.id,
      },
      {
        ticker: "ES",
        quantity: 1,
        entryPrice: 4020,
        exitPrice: 4030,
        callOrPut: "call",
        date: new Date(),
        user_id: bob.id,
      },
      {
        ticker: "NQ",
        quantity: 2,
        entryPrice: 13000,
        exitPrice: 13010,
        callOrPut: "put",
        date: new Date(),
        user_id: bob.id,
      },
      {
        ticker: "ES",
        quantity: 3,
        entryPrice: 4020,
        exitPrice: 4030,
        callOrPut: "call",
        date: new Date(),
        user_id: carol.id,
      },
      {
        ticker: "NQ",
        quantity: 4,
        entryPrice: 13000,
        exitPrice: 13010,
        callOrPut: "put",
        date: new Date(),
        user_id: carol.id,
      },
    ],
  });

  const journalEntries = await prisma.journalEnties.createMany({
    data: [
      {
        entry: "I made a great trade today",
        userId: alice.id,
        tradeId: trades[0].id,
      },
      {
        entry: "I made a great trade today",
        userId: alice.id,
        tradeId: trades[1].id,
      },
      {
        entry: "I made a great trade today",
        userId: bob.id,
        tradeId: trades[2].id,
      },
      {
        entry: "I made a great trade today",
        userId: bob.id,
        tradeId: trades[3].id,
      },
      {
        entry: "I made a great trade today",
        userId: carol.id,
        tradeId: trades[4].id,
      },
      {
        entry: "I made a great trade today",
        userId: carol.id,
        tradeId: trades[5].id,
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
