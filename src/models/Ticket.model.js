import { Schema, model, Types } from "mongoose";

const Ticket = new Schema(
  {
    price: {
      type: Number,
      required: true,
    },
    category: {
      type: String,
      enum: ['extranjero', 'local'],
      required: true,
    },
    dateSold: {
      type: String,
      required: true,
    },
    viewer: {
      type: Types.ObjectId,
      ref: "Viewer",
      required: true
    },
  },
  { timestamps: true, versionKey: false }
);
export default model('Ticket', Ticket)