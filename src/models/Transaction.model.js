import { Schema, model } from "mongoose";

const Transaction = new Schema(
  {
    sourceCurrency: {
      type: string,
      required: true,
    },
    sourceQuantity: {
      type: Number,
      required: true,
    },
    currencyToConvert: {
      type: string,
      required: true,
    },
    amountToConvert: {
      type: Number,
      required: true,
    },
  },
  { timestamps: true, versionKey: false }
);
export default model("Transaction", Transaction);