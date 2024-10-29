import express from "express";
import "dotenv/config";
import connectDB from "./connectDb.js";
import deleteById from "./usecase/movieDelete.js";
import getAllDoc from "./usecase/movieAll.js";
import updateById from "./usecase/movieUdate.js";
import creatDoc from "./usecase/movieCreate.js";

const app = express();
const port = process.env.PORT || 8000;
const dbUrl = process.env.DATABASE_URL || "mongodb://127.0.0.1/movies";

connectDB(dbUrl);
creatDoc();
getAllDoc();
updateById();
deleteById();

app.listen(port, () => {
  console.log("Serveur démarré");
});
