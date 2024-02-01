require('dotenv').config();
const express = require('express');
const logger = require('morgan');
const cors = require('cors');

const router = require("./routes/Router");

const PORT = process.env.PORT_NO || 4001;

const app = express();

app.use(logger('dev'));
app.use(express.json());

app.use(cors());

app.get("/", (req, res) => {
  res.send("server started");
})

app.use("/api", router);

app.listen(PORT, () => {
  console.log(`Application is running in ${PORT}`);
});