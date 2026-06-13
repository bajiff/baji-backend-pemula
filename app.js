import express from "express";
import process from "process";
import dotenv from "dotenv";

dotenv.config();

const app = express();
const port = process.env.PORT;
const host = process.env.HOST;

app.get("/", (req,res) =>{
  res.send("Mas Baji Ganteng");
});

app.listen(port, () => {
  console.log(`Berjalan di ${host}${port}`)
});