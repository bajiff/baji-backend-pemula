import fs from "fs";
import path from "path";


const inputPath = path.resolve("input.txt");
const outputPath = path.resolve("output.txt");

const readableStream = fs.createReadStream(inputPath,{highWaterMark:15})

const writableStream = fs.createWriteStream(outputPath)

readableStream.on("data", (chunk) => {
  writableStream.write(chunk);
  console.log(chunk.toString());
});

writableStream.on("end", () => {
  writableStream.end();

  console.log("Selesai! File berhasil digandakan tanpa membuat RAM jebol.");
});