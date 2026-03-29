const express = require("express");
const mysql = require("mysql2");
const cors = require("cors");

const app = express();

app.use(cors({ origin: "http://localhost:5173" }));
app.use(express.json());

const db = mysql.createConnection({
  host: "127.0.0.1",
  user: "root",
  password: "sql1234u!",
  database: "exploretrip",
});

db.connect((err) => {
  if (err) {
    console.error("DB CONNECT ERROR:", err);
    return;
  }
  console.log("Connected to MySQL");
});

app.get("/test", (req, res) => {
  res.json({ ok: true, message: "Backend works" });
});

app.post("/api/contact", (req, res) => {
  console.log("BODY RECEIVED:", req.body);

  const { name, email, subject, message } = req.body;

  if (!name || !email || !subject || !message) {
    return res.status(400).json({ error: "All fields are required." });
  }

  const sql =
    "INSERT INTO contact_messages (name, email, subject, message) VALUES (?, ?, ?, ?)";

  db.query(sql, [name, email, subject, message], (err, result) => {
    if (err) {
      console.error("INSERT ERROR:", err);
      return res.status(500).json({ error: err.message });
    }

    console.log("INSERT SUCCESS:", result.insertId);
    res.json({ success: true, id: result.insertId });
  });
});

app.listen(5001, () => {
  console.log("Server running on port 5001");
});