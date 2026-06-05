import { eventNames, listeners } from "process";
import Bookshelf from "./day-4/bookData.js";
import { EventEmitter } from "events";

const myEmitter = new EventEmitter();

const bookAddedListener = (bookName) => {
  console.log(`Notifikasi Industri: Buku ${bookName} berhasil di simpan di Bookshelf`);
};

on(eventNames, listeners)

.emit(eventNames, data);