import express from "express";
import pool from "../config/index.js";

const formData = express.Router();

formData.post("/postData", (req, res) => {
  // console.log(req.body);
  const { first, last, age, gender, status, details } = req.body;
  pool.query(
    "insert into user (first_name, last_name, age, gender, status, details) values (?, ?, ?, ?, ?, ?)",
    [first, last, age, gender, status, details],
    (err, data) => {
      if (err) {
        console.log("Failed to insert data");
      } else {
        console.log("Data inserted successfully!!");
      }
    },
  );
});

formData.get("/getData", (req, res) => {
  pool.query("select * from user", (err, data) => {
    if (err) {
      console.log("Error in fetching data from the database");
    } else {
      res.json(data);
    }
  });
});

export default formData;
