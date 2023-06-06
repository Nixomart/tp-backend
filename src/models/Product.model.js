import { Schema, model } from "mongoose";

const ProductSchema = new Schema(
  {
    name: {
      required: true,
      type: String,
    },
    description: {
      type: String,
    },
    img: {
      type: String,
    },
    price: {
      type: Number,
      required: true,
    },
    stock: {
      type: Number,
    },
    salient: {
      type: Boolean,
      default: false,
    },
  },
  { timestamps: true, versionKey: false }
);

export default model("Product", ProductSchema);