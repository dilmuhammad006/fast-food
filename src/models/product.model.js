import mongoose from "mongoose";

const ProductShema = new mongoose.Schema(
  {
    name: {
      type: mongoose.SchemaTypes.String,
      required: [true, "Mahsulot nomi berilsihi shart"],
      unique: true,
    },
    price: {
      type: mongoose.SchemaTypes.Number,
      required: [true, "Mahsulot narxi berilsihi shart"],
      min: 0,
    },
    desciption: {
      type: mongoose.SchemaTypes.String,
      required: false,
    },
    imageUrl: {
      type: mongoose.SchemaTypes.String,
      required: false,
    },
    category: {
      type: mongoose.SchemaTypes.ObjectId,
      ref: "Category",
    },
  },
  {
    collection: "products",
    timestamps: true,
    versionKey: false,
  }
);

export default mongoose.model("Product", ProductShema);
