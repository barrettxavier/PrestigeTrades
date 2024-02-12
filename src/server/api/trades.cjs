const express = require("express");
const router = express.Router();
const prisma = require("../client.cjs");

router.get("/", async (req, res, next) => {
  try {
    const trades = await prisma.trade.findMany();
    res.status(200).send(trades);
  } catch (error) {
    console.error(error);
  }
});

router.get("/:id", async (req, res, next) => {
  const { id } = req.params;
  try {
    const trade = await prisma.trade.findUnique({
      where: {
        id: +id,
      },
    });

    res.status(200).send(trade);
  } catch (error) {
    console.error(error);
  }
});

router.post("/", async (req, res, next) => {
  const { ticker, quantity, entryPrice, exitPrice, callOrPut, userId, date } =
    req.body;
  try {
    const trade = await prisma.trade.create({
      data: {
        ticker,
        quantity,
        entryPrice,
        exitPrice,
        callOrPut,
        userId,
        date,
      },
    });
    res.status(201).send(trade);
  } catch (error) {
    console.error(error);
  }
});

router.put("/:id", async (req, res, next) => {
  const { id } = req.params;
  const { ticker, quantity, entryPrice, exitPrice, callOrPut, userId, date } =
    req.body;
  try {
    const trade = await prisma.trade.update({
      where: {
        id: +id,
      },
      data: {
        ticker,
        quantity,
        entryPrice,
        exitPrice,
        callOrPut,
        userId,
        date,
      },
    });
    res.status(200).send(trade);
  } catch (error) {
    console.error(error);
  }
});

router.delete("/:id", async (req, res, next) => {
  const { id } = req.params;
  try {
    const trade = await prisma.trade.delete({
      where: {
        id: +id,
      },
    });
    res.status(200).send(trade);
  } catch (error) {
    console.error(error);
  }
});

module.exports = router;
