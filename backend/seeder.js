// import mongoose from "mongoose";
// import dotenv from "dotenv";
// import Product from "./models/Product.js";
// import connectDB from "./config/db.js";

// dotenv.config();
// connectDB();

// const products = [
//     [
//         {
//             "name": "Men's T-Shirt",
//             "image": "https://example.com/mens-tshirt.jpg",
//             "description": "A comfortable cotton T-shirt",
//             "category": "Men",
//             "price": 25.99,
//             "stock": 50
//         },
//         {
//             "name": "Men's Casual Jacket",
//             "image": "https://example.com/mens-jacket.jpg",
//             "description": "A stylish jacket for casual outings",
//             "category": "Men",
//             "price": 75.99,
//             "stock": 30
//         },
//         {
//             "name": "Men's Sneakers",
//             "image": "https://example.com/mens-sneakers.jpg",
//             "description": "Lightweight sneakers for everyday use",
//             "category": "Men",
//             "price": 55.99,
//             "stock": 20
//         },
//         {
//             "name": "Men's Formal Shirt",
//             "image": "https://example.com/mens-shirt.jpg",
//             "description": "Perfect for office or formal occasions",
//             "category": "Men",
//             "price": 40.00,
//             "stock": 25
//         },
//         {
//             "name": "Men's Sweatpants",
//             "image": "https://example.com/mens-sweatpants.jpg",
//             "description": "Relaxed-fit sweatpants for workouts",
//             "category": "Men",
//             "price": 30.00,
//             "stock": 15
//         },
//         {
//             "name": "Women's Dress",
//             "image": "https://example.com/womens-dress.jpg",
//             "description": "Elegant dress for evening wear",
//             "category": "Women",
//             "price": 80.00,
//             "stock": 20
//         },
//         {
//             "name": "Women's Blouse",
//             "image": "https://example.com/womens-blouse.jpg",
//             "description": "Chic blouse for casual or formal wear",
//             "category": "Women",
//             "price": 45.99,
//             "stock": 30
//         },
//         {
//             "name": "Women's High Heels",
//             "image": "https://example.com/womens-heels.jpg",
//             "description": "Stylish high heels for parties",
//             "category": "Women",
//             "price": 70.00,
//             "stock": 10
//         },
//         {
//             "name": "Women's Winter Coat",
//             "image": "https://example.com/womens-coat.jpg",
//             "description": "Warm coat for winter",
//             "category": "Women",
//             "price": 120.00,
//             "stock": 15
//         },
//         {
//             "name": "Women's Yoga Pants",
//             "image": "https://example.com/womens-yoga-pants.jpg",
//             "description": "Comfortable yoga pants for fitness",
//             "category": "Women",
//             "price": 35.99,
//             "stock": 40
//         },
//         {
//             "name": "Kid's Hoodie",
//             "image": "https://example.com/kids-hoodie.jpg",
//             "description": "A warm hoodie for kids",
//             "category": "Kid",
//             "price": 40.99,
//             "stock": 20
//         },
//         {
//             "name": "Kid's Sneakers",
//             "image": "https://example.com/kids-sneakers.jpg",
//             "description": "Comfortable sneakers for kids",
//             "category": "Kid",
//             "price": 30.99,
//             "stock": 25
//         },
//         {
//             "name": "Kid's T-Shirt",
//             "image": "https://example.com/kids-tshirt.jpg",
//             "description": "Colorful T-shirt for daily wear",
//             "category": "Kid",
//             "price": 20.99,
//             "stock": 50
//         },
//         {
//             "name": "Kid's Jacket",
//             "image": "https://example.com/kids-jacket.jpg",
//             "description": "Lightweight jacket for chilly days",
//             "category": "Kid",
//             "price": 50.00,
//             "stock": 15
//         },
//         {
//             "name": "Kid's Pajamas",
//             "image": "https://example.com/kids-pajamas.jpg",
//             "description": "Soft pajamas for a good night's sleep",
//             "category": "Kid",
//             "price": 25.99,
//             "stock": 35
//         }
//     ]
    
//     // Add the remaining products here...
// ];

// const importData = async () => {
//     try {
//         await Product.deleteMany(); // Clear the collection
//         await Product.insertMany(products); // Insert sample data
//         console.log("Data Imported!");
//         process.exit();
//     } catch (error) {
//         console.error(error);
//         process.exit(1);
//     }
// };

// importData();



const mongoose = require("mongoose");
const dotenv = require("dotenv");
const Product = require("./models/Product");
const connectDB = require("./config/db");

dotenv.config();
connectDB();

const products = [
    
    {
        "name": "Men's T-Shirt",
        "image": "https://example.com/mens-tshirt.jpg",
        "description": "A comfortable cotton T-shirt",
        "category": "Men",
        "price": 25.99,
        "stock": 50
    },
    {
        "name": "Men's Casual Jacket",
        "image": "https://example.com/mens-jacket.jpg",
        "description": "A stylish jacket for casual outings",
        "category": "Men",
        "price": 75.99,
        "stock": 30
    },
    {
        "name": "Men's Sneakers",
        "image": "https://example.com/mens-sneakers.jpg",
        "description": "Lightweight sneakers for everyday use",
        "category": "Men",
        "price": 55.99,
        "stock": 20
    },
    {
        "name": "Men's Formal Shirt",
        "image": "https://example.com/mens-shirt.jpg",
        "description": "Perfect for office or formal occasions",
        "category": "Men",
        "price": 40.00,
        "stock": 25
    },
    {
        "name": "Men's Sweatpants",
        "image": "https://example.com/mens-sweatpants.jpg",
        "description": "Relaxed-fit sweatpants for workouts",
        "category": "Men",
        "price": 30.00,
        "stock": 15
    },
    {
        "name": "Women's Dress",
        "image": "https://example.com/womens-dress.jpg",
        "description": "Elegant dress for evening wear",
        "category": "Women",
        "price": 80.00,
        "stock": 20
    },
    {
        "name": "Women's Blouse",
        "image": "https://example.com/womens-blouse.jpg",
        "description": "Chic blouse for casual or formal wear",
        "category": "Women",
        "price": 45.99,
        "stock": 30
    },
    {
        "name": "Women's High Heels",
        "image": "https://example.com/womens-heels.jpg",
        "description": "Stylish high heels for parties",
        "category": "Women",
        "price": 70.00,
        "stock": 10
    },
    {
        "name": "Women's Winter Coat",
        "image": "https://example.com/womens-coat.jpg",
        "description": "Warm coat for winter",
        "category": "Women",
        "price": 120.00,
        "stock": 15
    },
    {
        "name": "Women's Yoga Pants",
        "image": "https://example.com/womens-yoga-pants.jpg",
        "description": "Comfortable yoga pants for fitness",
        "category": "Women",
        "price": 35.99,
        "stock": 40
    },
    {
        "name": "Kid's Hoodie",
        "image": "https://example.com/kids-hoodie.jpg",
        "description": "A warm hoodie for kids",
        "category": "Kid",
        "price": 40.99,
        "stock": 20
    },
    {
        "name": "Kid's Sneakers",
        "image": "https://example.com/kids-sneakers.jpg",
        "description": "Comfortable sneakers for kids",
        "category": "Kid",
        "price": 30.99,
        "stock": 25
    },
    {
        "name": "Kid's T-Shirt",
        "image": "https://example.com/kids-tshirt.jpg",
        "description": "Colorful T-shirt for daily wear",
        "category": "Kid",
        "price": 20.99,
        "stock": 50
    },
    {
        "name": "Kid's Jacket",
        "image": "https://example.com/kids-jacket.jpg",
        "description": "Lightweight jacket for chilly days",
        "category": "Kid",
        "price": 50.00,
        "stock": 15
    },
    {
        "name": "Kid's Pajamas",
        "image": "https://example.com/kids-pajamas.jpg",
        "description": "Soft pajamas for a good night's sleep",
        "category": "Kid",
        "price": 25.99,
        "stock": 35
    }
];

const importData = async () => {
    try {
        await Product.deleteMany(); // Clear the collection
        await Product.insertMany(products); // Insert sample data
        console.log("Data Imported!");
        process.exit();
    } catch (error) {
        console.error(error);
        process.exit(1);
    }
};

importData();

