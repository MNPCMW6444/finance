import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import mongoose, { ConnectOptions } from "mongoose";
import cookieParser from "cookie-parser";

import Exp from "./models/expModel";

const app = express();
const port = process.env.PORT || 3001;

dotenv.config();

let mainDbStatus = false;

const connectToDBs = () => {
  mongoose.connect(
    "" + process.env.MONGO,
    {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    } as ConnectOptions,
    (err) => {
      if (err) return console.error(err);
      console.log("Connected to Main MongoDB");
      mainDbStatus = true;
    }
  );

  if (!mainDbStatus) setTimeout(connectToDBs, 180000);
};

connectToDBs();

app.use(express.json());

app.use(
  cors({
    origin:
      process.env.NODE_ENV === "development"
        ? ["http://localhost:3000"]
        : ["https://finance.flexboxtorchy.com"],
    credentials: true,
  })
);

app.use(cookieParser());

app.listen(port, () => console.log(`Server started on port: ${port}`));

app.use((_, res, next) => {
  if (mainDbStatus) next();
  else
    res
      .status(500)
      .json({ serverError: "Server is down now. Please try again later." });
});

app.get("/areyoualive", (_, res) => res.json({ answer: "yes" }));

app.post("/createExpense", async (req, res) => {
  const {
    amount,
    isOneTime,
    oneTimeDate,
    monthly,
    reqTimeDay,
    reqTimeMonth,
    department,
  } = req.body.newItem;

  const reqtosave = new Exp({
    amount,
    isOneTime,
    oneTimeDate,
    monthly,
    reqTimeDay,
    reqTimeMonth,
    department,
  });

  const saved = await reqtosave.save();

  res.json(saved);
});

app.get("/finnum", async (req, res) => {
  const re = await Exp.find();

  res.json({ r: re });
});
