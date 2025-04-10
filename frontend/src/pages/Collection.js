import React, { useState, useEffect } from "react";

const Collection = () => {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        const fetchProducts = async () => {
            try {
                // Fetch products from the backend
                const response = await fetch("/api/products");
                const data = await response.json();
                console.log(data); // Check if data is being fetched correctly
                setProducts(data);
            } catch (error) {
                console.error("Error fetching products:", error);
            }
        };

        fetchProducts();
    }, []);

    return (
        <div>
            <h1>Our Collection</h1>
            <div className="product-grid">
                {products.map((product) => (
                    <div key={product._id} className="product-card">
                        <img src={product.image} alt={product.name} />
                        <h2>{product.name}</h2>
                        <p>${product.price}</p>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Collection;
