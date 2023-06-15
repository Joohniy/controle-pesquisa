const express = require("express");
const app = express();
const mysql = require("mysql2");

const db = mysql.createPool({
  host: "localhost",
  user: "root",
  password: "joao25081997",
  database: "cad",
});

app.get("/", (req, res) => {
  db.query(
    "INSERT INTO cadastrados (tipo_requer, secretaria, date, numprocesso, name) VALUES ('Oficios', 'PGM', '01-01-1979', '29183/2009' ,'joão pedro')",
    (err, result) => {
      console.log(err);
      console.log(result);
    }
  );
});

app.listen(3030, () => {
  console.log("Running on port http://localhost:3030");
});
