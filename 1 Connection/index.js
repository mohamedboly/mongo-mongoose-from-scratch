import express from "express";
import "dotenv/config";

import connectDB from "./connectDb.js";

const app = express();
const port = process.env.PORT || 8000;
const dbUrl = process.env.DATABASE_URL || "mongodb://127.0.0.1/testmongoose";

connectDB(dbUrl);

app.listen(port, () => {
  console.log("Serveur démarré");
});
