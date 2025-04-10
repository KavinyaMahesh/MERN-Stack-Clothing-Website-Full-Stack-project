import express from "express";
import Product from "../models/Product.js";

const router = express.Router();

// Fetch all products or filter by category
router.get("/", async (req, res) => {
    const { category, limit } = req.query;
    const query = category ? { category } : {};
    try {
        const products = await Product.find(query).limit(Number(limit) || 0);
        res.json(products);
    } catch (error) {
        res.status(500).json({ message: "Error fetching products" });
    }
});

// Fetch latest products by category


router.get("/latest", async (req, res) => {
    try {
        // Fetch 1-2 products per category from the existing 'products' collection
        const men = await Product.find({ category: "Men" }).limit(10);
        const women = await Product.find({ category: "Women" }).limit(10);
        const kids = await Product.find({ category: "Kid" }).limit(10);

        // Return them grouped by category
        res.json({ men, women, kids });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: "Error fetching latest products" });
    }
});

router.get("/:id", async (req, res) => {
    try {
        const product = await Product.findById(req.params.id); // Fetch the product by ID
        if (product) {
            res.json(product);
        } else {
            res.status(404).json({ message: "Product not found" });
        }
    } catch (error) {
        res.status(500).json({ message: "Error fetching product" });
    }
});

router.get("/latest", async (req, res) => {
    try {
        const products = await Product.find(); // Fetch all products
        const men = products.filter((product) => product.category === "Men").slice(0, 2); // Limit to 2 items
        const women = products.filter((product) => product.category === "Women").slice(0, 2);
        const kids = products.filter((product) => product.category === "Kid").slice(0, 2);

        res.json({ men, women, kids });
    } catch (error) {
        res.status(500).json({ message: "Error fetching latest collections" });
    }
});




export default router;
