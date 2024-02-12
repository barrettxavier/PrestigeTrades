const express = require("express");
const router = express.Router();

router.use("/users", require("./users.cjs"));
router.use("/journalEntries", require("./journalEntries.cjs"));

module.exports = router;
