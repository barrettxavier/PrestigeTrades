const express = require("express");
const morgan = require("morgan");
const ViteExpress = require("vite-express");
require("dotenv").config();
// const path = require("path");

const app = express();
const port = 3000;

// Middleware
app.use(morgan("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// app.use("/dist/", express.static(path.join(__dirname, "../../dist/")));
// app.get("/", (req, res) =>
//   res.sendFile(path.join(__dirname, "../../dist/index.html"))
// );

// Routes
app.use("/api", require("./api/index.cjs"));
app.use("/auth", require("./api/auth.cjs"));

ViteExpress.listen(app || process.env.PORT, port, () =>
  console.log(`Server is listening on port ${port}`)
);
