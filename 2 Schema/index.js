import express from "express";
import "dotenv/config";
import connectDB from "./connectDb.js";
import { deleteById } from "./models/Movies.js";

const app = express();
const port = process.env.PORT || 8000;
const dbUrl = process.env.DATABASE_URL || "mongodb://127.0.0.1/movies";

connectDB(dbUrl);

deleteById();

app.listen(port, () => {
  console.log("Serveur démarré");
});
