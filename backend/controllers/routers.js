const express = require("express");
const router = express.Router();
const db = require("./db");

router.put("/", (req, res) => {
  const { sentence } = req.body;
  db.query(
    "UPDATE Headings SET sentence = ? where id = ?",
    [sentence, 1],
    (err, result) => {
      if (err) return res.status(500).json(err);
      res.status(201).json({ message: "Item Updated", id: result.insertId });
    }
  );
});

// ✅ Backend

router.get("/", (req, res) => {
  db.query("SELECT sentence FROM Headings", (err, result) => {
    if (err) return res.status(500).json(err);
    res.status(200).json({ message: "Items fetched", result });
  });
});

module.exports = router;
