import express from "express";
import cors from "cors";
import { getRandomQuote } from "./quotes.js"; // ✅ imported

const app = express();
const PORT = 3000;

// ✅ Enable CORS
app.use(cors());

// ✅ Define routes
app.get("/", (req, res) => {
  res.send("Welcome to the Quotes API!");
});

app.get("/api/quote", (req, res) => {
  const quote = getRandomQuote();
  res.json({ quote });
});

// ✅ Create and start server
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
