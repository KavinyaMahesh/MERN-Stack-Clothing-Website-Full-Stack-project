import express from "express";
import Cart from "../models/CartItem.js"; // Use CartItem model

const router = express.Router();

// Fetch all cart items
router.get("/", async (req, res) => {
    try {
        const cartItems = await Cart.find();
        res.json(cartItems);
    } catch (error) {
        res.status(500).json({ message: "Error fetching cart items" });
    }
});

// Add an item to the cart
router.post("/", async (req, res) => {
    const { productId, name, image, price, size, quantity } = req.body;

    try {
        // Check if the item already exists in the cart with the same size
        const existingItem = await Cart.findOne({ productId, size });
        if (existingItem) {
            existingItem.quantity += quantity;
            await existingItem.save();
            res.status(200).json(existingItem);
        } else {
            const cartItem = new Cart({ productId, name, image, price, size, quantity });
            await cartItem.save();
            res.status(201).json(cartItem);
        }
    } catch (error) {
        res.status(500).json({ message: "Error adding item to cart" });
    }
});

// Update cart item quantity
router.patch("/:id", async (req, res) => {
    const { delta } = req.body;

    try {
        const cartItem = await Cart.findById(req.params.id);
        if (cartItem) {
            cartItem.quantity += delta;
            cartItem.quantity = Math.max(cartItem.quantity, 1); // Ensure minimum quantity is 1
            await cartItem.save();
            res.json(cartItem);
        } else {
            res.status(404).json({ message: "Cart item not found" });
        }
    } catch (error) {
        res.status(500).json({ message: "Error updating cart item" });
    }
});

// Remove an item from the cart
router.delete("/:id", async (req, res) => {
    try {
        const cartItem = await Cart.findById(req.params.id);
        if (cartItem) {
            await Cart.deleteOne({ _id: req.params.id });
            res.json({ message: "Item removed from cart" });
        } else {
            res.status(404).json({ message: "Cart item not found" });
        }
    } catch (error) {
        res.status(500).json({ message: "Error deleting cart item" });
    }
});

export default router;
