const express = require("express");
const app = express();
const cors = require("cors");
const fs = require('fs');

app.use(cors());
app.use(express.json());

const requerTypeRaw = fs.readFileSync('./type-requer.json', 'utf-8');
const requerTypeAll = JSON.parse(requerTypeRaw);

app.get("/main", (req, res) => {
  res.json({
    dataValues: requerTypeAll,
  });
});

app.listen(3030, () => {
  console.log("Running on port http://localhost:3030");
});
