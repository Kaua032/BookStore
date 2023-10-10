import express from "express";
import { PORT, mongoDBURL } from "./config.js";
import mongoose from "mongoose";
import booksRoute from './routes/booksRoute.js'

const app = express();

app.use(express.json());

app.get("/", (req, res) => {
  return res.status(234).send("Welcome to MERN Stack Tutorial");
});

app.use("/books",booksRoute);



mongoose
  .connect(mongoDBURL)
  .then(() => {
    console.log("App connected to database");
    app.listen(PORT, () => {
      console.log(`Server ON 🟢 ${PORT}`);
    });
  })
  .catch((error) => {
    console.log(error);
  });
