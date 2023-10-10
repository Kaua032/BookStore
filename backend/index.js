import express from "express";
import { PORT, mongoDBURL } from "./config.js";
import mongoose from "mongoose";

const app = express();

app.get("/", (req, res) => {
  return res.status(234).send("Welcome to MERN Stack Tutorial");
});

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
