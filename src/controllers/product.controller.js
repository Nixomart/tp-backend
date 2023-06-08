import ProductModel from "../models/Product.model.js";
import multer from "multer";

/* const storage = multer.diskStorage({
  destination: function (req, file, cb){
    cb(null, 'uploads')
  },
  filename: function (req, file, cb){
    cb(null, file.filename + "-" + Date.now())
  }
})

export const upload = multer({ storage: storage }).single("img") */
export const getAllProducts = async (req, res) => {
  try {
    const products = await ProductModel.find();
    const responseProducts = products ? products : "NOT_CARS_FOUND";
    res.status(200).json(responseProducts);
  } catch (error) {
    console.log("ERROR EN GETALLPRODUCTS: ", error);
  }
};

export const saveProduct = async (req, res) => {
  try {
    const { name, price, salient, description, stock, img } = req.body;
    await ProductModel.create({
      name,
      price,
      salient,
      description,
      stock,
      img
    });
    res.status(200).json({ message: "product created!" });
  } catch (error) {
    console.log(error);
    res.status(400).json({ message: "Err in saveProduct" });
  }
};


export const editProduct = async (req, res) => {
  try {
    const { name, price } = req.body;
    const { id } = req.params;
    await ProductModel.findByIdAndUpdate(id, {
      name: name,
      price: price,
    });
    res.status(200).json({ message: "product updated!" });
  } catch (error) {
    res.status(200).json({ message: "err to edit product!" });
  }
};

export const deleteProduct = async (req, res) => {
  try {
    const { id } = req.params;
    await ProductModel.findByIdAndRemove(id);
    res.status(200).json({ message: "product deleted!" });
  } catch (error) {
    res.status(200).json({ message: "err to deleted product!" });
  }
};

export const getSalientProduct = async (req, res) => {
  try {
    const products = await ProductModel.find({salient: true})
    res.status(200).json(products);
  } catch (error) {
    res.status(200).json({ message: "err get salient product!" });
  }
};
export const getProduct = async (req, res) => {
  try {
    const {id} = req.params
    const product = await ProductModel.findById(id)
    res.status(200).json(product);
  } catch (error) {
    res.status(200).json({ message: "err get product!" });
  }
};
