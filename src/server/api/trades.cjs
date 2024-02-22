const express = require("express");
const router = express.Router();
const prisma = require("../client.cjs");

// GET /api/trades
router.get("/", async (req, res, next) => {
  try {
    const trades = await prisma.trades.findMany();
    res.status(200).send(trades);
  } catch (error) {
    console.error(error);
  }
});

router.get("/:id", async (req, res, next) => {
  const { id } = req.params;
  try {
    const trade = await prisma.trades.findUnique({
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
  const { ticker, callOrPut, date, userId } = req.body;
  const quantity = parseInt(req.body.quantity);
  const entryPrice = parseFloat(req.body.entryPrice);
  const exitPrice = parseFloat(req.body.exitPrice);

  try {
    const trades = await prisma.trades.create({
      data: {
        ticker,
        quantity,
        entryPrice,
        exitPrice,
        callOrPut,
        userId,
        date: new Date(date),
      },
    });
    res.status(201).send(trades);
  } catch (error) {
    console.error(error);
    res.status(500).send("Internal Server Error");
  }
});

router.put("/:id", async (req, res, next) => {
  const { id } = req.params;
  const { ticker, quantity, entryPrice, exitPrice, callOrPut, userId, date } =
    req.body;
  try {
    const trade = await prisma.trades.update({
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
    const trade = await prisma.trades.delete({
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
