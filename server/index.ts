import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import mongoose, { ConnectOptions } from "mongoose";
import cookieParser from "cookie-parser";

import Exp from "./models/expModel";

import MercuryExp from "./models/mercuryExp";
import axios from "axios";

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

app.get("/finnumR", async (req, res) => {
  const re = await MercuryExp.find();

  res.json({ r: re });
});

app.get("/refresh", async (_, res) => {
  try {
    const accountId = (
      await axios.get("https://api.mercury.com/api/v1/accounts", {
        headers: {
          Authorization: "Bearer o31n/gdCYjUvTK8NJl6Zfr/Y7Mp+wz77ERH7fhzdkEGf",
        },
      })
    ).data.accounts[0].id;

    const transns = await axios.get(
      "https://api.mercury.com/api/v1/account/" +
        accountId +
        "/transactions?start=2021-01-01",
      {
        headers: {
          Authorization: "Bearer o31n/gdCYjUvTK8NJl6Zfr/Y7Mp+wz77ERH7fhzdkEGf",
        },
      }
    );

    await transns.data.transactions.forEach(
      async (element: typeof MercuryExp) => {
        const newTrans = new MercuryExp(element);
        await newTrans.save();
      }
    );
  } catch (e) {
    console.log(e);
    return res.json({ err: e });
  }
  return res.json({ Message: "Refresh done good!" });
});
