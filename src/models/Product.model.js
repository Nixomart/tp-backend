import { Schema, model } from "mongoose";

const ProductSchema = new Schema(
  {
    name: {
      required: true,
      type: String,
    },
    description: {
      type: String,
      required:true
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
ProductSchema.methods.setImgUrl = function(filename) {
  this.img = `http://localhost:4000/public/${filename}`;
}
export default model("Product", ProductSchema);