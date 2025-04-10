import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

const ProductDetails = () => {
    const { id } = useParams();
    const [product, setProduct] = useState(null);

    useEffect(() => {
        const fetchProduct = async () => {
            

            const response = await fetch(`/api/products/${id}`);
            const data = await response.json();
            setProduct(data);
        };

        fetchProduct();
    }, [id]);

    if (!product) {
        return <p>Loading...</p>;
    }

    return (
        <div>
            <h1>{product.name}</h1>
            <img src={product.image} alt={product.name} />
            <p>{product.description}</p>
            <p>Price: ${product.price}</p>
            <p>Category: {product.category}</p>
            <p>Stock: {product.stock}</p>
        </div>
    );
};

export default ProductDetails;
