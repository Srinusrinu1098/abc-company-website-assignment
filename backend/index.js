const express = require("express");
const cors = require("cors");
require("dotenv").config();

const app = express();

app.use(express.json());
app.use(cors());

const routesFetched = require("./controllers/routers");
app.use("/api/operation", routesFetched);

const PORT = process.env.DB_PORT || 5000;
app.listen(PORT, () => {
  console.log(`🚀 Server running at http://localhost:${PORT}`);
});
