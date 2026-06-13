import { EventEmitter } from "events";

const emitter = new EventEmitter();

const addBookListener = (bookName) => {
  console.log(`Buku telah ditambahkan: ${bookName}`)
};

const updateStatistic = (bookName) => {
  console.log(`Buku terupdate di statistik ${bookName}`)
};

const writeLog = (bookName) => {
  console.log(`Buku tercatat di statistik ${bookName}`)
};

emitter.on("addBook", addBookListener);
emitter.on("addBook", updateStatistic);
emitter.on("addBook", writeLog);

emitter.emit("addBook","Buku Sakral")