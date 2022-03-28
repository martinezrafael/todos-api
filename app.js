require("dotenv").config();

const express = require("express");
const app = express();

const connectDb = require("./config/db.config");
connectDb();

const cors = require("cors");

app.use(express.json());

app.use(
  cors({
    credentials: true,
    origin: ["http://localhost:3000"],
  })
);

app.use("/todos", require("./routes/todos.routes"));

app.listen(process.env.PORT, () =>
  console.log(`Server Running on port ${process.env.PORT}`)
);
