const mongoose = require("mongoose");

const expSchema = new mongoose.Schema(
  {
    amount: Number,
    isOneTime: { Boolean, required: false },
    oneTimeDate: Date,
    monthly: { Boolean, required: false },
    reqTimeDay: Number,
    reqTimeMonth: Number,
    department: String,
    more: String,
    invoice: { type: String, required: false },
  },
  {
    timestamps: true,
  }
);

const exp = mongoose.model("exp", expSchema);

export default exp;
