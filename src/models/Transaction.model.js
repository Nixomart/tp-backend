import { Schema, model } from "mongoose";

const Transaction = new Schema(
  {
    sourceCurrency: {
      type: String,
      required: true,
    },
    sourceQuantity: {
      type: Number,
      required: true,
    },
    currencyToConvert: {
      type: String,
      required: true,
    },
    customerEmail: {
      type: String,
      required: true,
    },
    result:{
      type: Number
    }
  },
  { timestamps: true, versionKey: false }
);
export default model("Transaction", Transaction);