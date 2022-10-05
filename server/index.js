"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const dotenv_1 = __importDefault(require("dotenv"));
const mongoose_1 = __importDefault(require("mongoose"));
const cookie_parser_1 = __importDefault(require("cookie-parser"));
const expModel_1 = __importDefault(require("./models/expModel"));
const app = (0, express_1.default)();
const port = process.env.PORT || 3001;
dotenv_1.default.config();
let mainDbStatus = false;
const connectToDBs = () => {
    mongoose_1.default.connect("" + process.env.MONGO, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    }, (err) => {
        if (err)
            return console.error(err);
        console.log("Connected to Main MongoDB");
        mainDbStatus = true;
    });
    if (!mainDbStatus)
        setTimeout(connectToDBs, 180000);
};
connectToDBs();
app.use(express_1.default.json());
app.use((0, cors_1.default)({
    origin: process.env.NODE_ENV === "development"
        ? ["http://localhost:3000"]
        : ["https://finance.flexboxtorchy.com"],
    credentials: true,
}));
app.use((0, cookie_parser_1.default)());
app.listen(port, () => console.log(`Server started on port: ${port}`));
app.use((_, res, next) => {
    if (mainDbStatus)
        next();
    else
        res
            .status(500)
            .json({ serverError: "Server is down now. Please try again later." });
});
app.get("/areyoualive", (_, res) => res.json({ answer: "yes" }));
app.post("/createExpense", async (req, res) => {
    const { amount, isOneTime, oneTimeDate, monthly, reqTimeDay, reqTimeMonth, department, } = req.body;
    const reqtosave = new expModel_1.default({
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
    const re = await expModel_1.default.find();
    res.json({ r: re.length });
});
