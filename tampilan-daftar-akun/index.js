import express from "express";
import bodyParser from "body-parser";
import pg from "pg";

const db = new pg.Client({
    user: "postgres",
    host: "localhost",
    database: "local_of",
    password: "1234",
    port: 5432
});

const app = express();
const port = 3000;

db.connect();

let dataKurir = {};

db.query("select * from data_kurir", (err, res) => {
    if (err) {
        console.log("Error executing query", err.stack);
    } else {
        dataKurir = res.rows;
    }

    db.end();
});

// Middleware
app.use(express.static("public"));

// GET home page
app.get("/", (req, res) => {
    res.render("index.ejs", {dataKurir});
});

app.listen(port, () => {
    console.log(`Server is running at http://localhost:${port}`)
});