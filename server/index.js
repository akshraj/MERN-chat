const express = require('express');
const helmet = require("helmet");
const CORS = require('cors');
const mongoose = require('mongoose');

const app = express();
const routes = require('./routes');
require('dotenv').config();

app.use(express.json());
app.use(CORS());
app.use(helmet());
app.use("/api", routes);

mongoose.connect(process.env.MONGO_URI,
  {
    useNewUrlParser: true,
    useUnifiedTopology: true
  }
);

const db = mongoose.connection;
db.on("error", () => console.error("connection error: "));
db.once("open", function () {
  console.log("Connected successfully to db");
});

const PORT = 4000 || process.env.PORT
app.listen(PORT, () => console.log(`server is running on ${PORT}`));