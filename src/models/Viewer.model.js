import { Schema, model } from "mongoose";

const Viewer = new Schema(
  {
    name: {
      type: String,
      required: true,
    },
    surname: {
      type: String,
      required: true,
    },
    dni: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
    },
  },
  { timestamps: true, versionKey: false }
);
export default model("Viewer", Viewer);
