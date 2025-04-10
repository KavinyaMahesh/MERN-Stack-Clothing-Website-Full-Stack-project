import mongoose from "mongoose";

const cartItemSchema = mongoose.Schema(
    {
        productId: { type: mongoose.Schema.Types.ObjectId, ref: "Product", required: true },
        name: { type: String, required: true },
        image: { type: String, required: true },
        price: { type: Number, required: true },
        size: { type: String, required: true },
        quantity: { type: Number, required: true },
    },
    { timestamps: true }
);

const CartItem = mongoose.model("CartItem", cartItemSchema);

export default CartItem;
