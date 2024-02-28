
// get() is method ดึง
// post() สร้าง insert data
// push() uppdate
// delete() ลบ

require("dotenv").config();

const express = require("express");
const cors = require("cors");
const app = express();
const mysql = require("mysql2");

app.use(cors());

const connection = mysql.createConnection(process.env.DATABASE_URL);

app.all("/", (req, res) => {
  console.log("Just got a request!");
  res.send("Yo!");
});

app.get("/food", (req, res) => {
  connection.query("select * from tbl_food", function (err, results, fields) {
    res.send(results);
  });
});
app.get("/menu", (req, res) => {
  connection.query("select * from tbl_menu", function (err, results, fields) {
    res.send(results);
  });
});
app.get("/foodname", (req, res) => {
  connection.query("select foodID, foodName, foodDescription, foodPrice, tbl_menu.menuName from tbl_food, tbl_menu WHERE tbl_food.MenuID = tbl_menu.menuID", function (err, results, fields) {
    res.send(results);
  });
});

app.listen(process.env.PORT || 5000);
