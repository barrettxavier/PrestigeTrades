const express = require("express");
const router = express.Router();
const prisma = require("../client.cjs");

// GET /api/journalEntries
router.get("/", async (req, res, next) => {
  try {
    const journalEntries = await prisma.journalEntries.findMany();
    res.status(200).send(journalEntries);
  } catch (error) {
    console.error(error);
  }
});

router.get("/:id", async (req, res, next) => {
  const { id } = req.params;
  try {
    const journalEntry = await prisma.journalEntries.findUnique({
      where: {
        id: +id,
      },
    });

    res.status(200).send(journalEntry);
  } catch (error) {
    console.error(error);
  }
});

router.post("/", async (req, res, next) => {
  const { entry, userId, tradeId } = req.body;
  try {
    const journalEntry = await prisma.journalEntries.create({
      data: {
        entry,
        userId,
        tradeId,
      },
    });
    res.status(201).send(journalEntry);
  } catch (error) {
    console.error(error);
  }
});

router.put("/:id", async (req, res, next) => {
  const { id } = req.params;
  const { entry, userId, tradeId } = req.body;
  try {
    const journalEntry = await prisma.journalEntries.update({
      where: {
        id: +id,
      },
      data: {
        entry,
        userId,
        tradeId,
      },
    });
    res.status(200).send(journalEntry);
  } catch (error) {
    console.error(error);
  }
});

router.delete("/:id", async (req, res, next) => {
  const { id } = req.params;
  try {
    const journalEntry = await prisma.journalEntries.delete({
      where: {
        id: +id,
      },
    });
    res.status(200).send(journalEntry);
  } catch (error) {
    console.error(error);
  }
});

module.exports = router;
