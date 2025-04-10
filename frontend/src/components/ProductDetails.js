// import React, { useState, useEffect } from "react";
// import { useParams, useNavigate } from "react-router-dom";

// const ProductDetails = () => {
//     const { id } = useParams(); // Get the product ID from the route
//     const navigate = useNavigate();
//     const [product, setProduct] = useState(null);
//     const [selectedSize, setSelectedSize] = useState("");

//     useEffect(() => {
//         const fetchProduct = async () => {
//             try {
//                 const response = await fetch(`/api/products/${id}`);
//                 const data = await response.json();
//                 setProduct(data);
//             } catch (error) {
//                 console.error("Error fetching product:", error);
//             }
//         };

//         fetchProduct();
//     }, [id]);

//     const addToCart = async () => {
//         if (!selectedSize) {
//             alert("Please select a size before adding to cart.");
//             return;
//         }

//         try {
//             const response = await fetch("/api/cart", {
//                 method: "POST",
//                 headers: { "Content-Type": "application/json" },
//                 body: JSON.stringify({
//                     productId: product._id,
//                     name: product.name,
//                     image: product.image,
//                     price: product.price,
//                     size: selectedSize,
//                     quantity: 1,
//                 }),
//             });

//             if (response.ok) {
//                 navigate("/cart"); // Redirect to the cart page after adding
//             } else {
//                 console.error("Failed to add product to cart");
//             }
//         } catch (error) {
//             console.error("Error adding to cart:", error);
//         }
//     };

//     if (!product) {
//         return <h2>Loading...</h2>;
//     }

//     return (
//         <div style={{ padding: "20px" }}>
//             <div style={{ display: "flex", gap: "20px" }}>
//                 {/* Product Images */}
//                 <div>
//                     <img
//                         src={product.image}
//                         alt={product.name}
//                         style={{ width: "300px", height: "400px", objectFit: "cover" }}
//                     />
//                 </div>

//                 {/* Product Details */}
//                 <div>
//                     <h1>{product.name}</h1>
//                     <p style={{ fontSize: "20px", color: "#555" }}>${product.price}</p>
//                     <p>{product.description}</p>
//                     <h3>Select Size</h3>
//                     <div style={{ display: "flex", gap: "10px", margin: "10px 0" }}>
//                         {["S", "M", "L", "XL", "XXL"].map((size) => (
//                             <button
//                                 key={size}
//                                 onClick={() => setSelectedSize(size)}
//                                 style={{
//                                     padding: "10px",
//                                     border: selectedSize === size ? "2px solid black" : "1px solid #ccc",
//                                     backgroundColor: selectedSize === size ? "#eee" : "white",
//                                 }}
//                             >
//                                 {size}
//                             </button>
//                         ))}
//                     </div>
//                     <button
//                         onClick={addToCart}
//                         style={{
//                             padding: "10px 20px",
//                             backgroundColor: "black",
//                             color: "white",
//                             border: "none",
//                             cursor: "pointer",
//                         }}
//                     >
//                         Add to Cart
//                     </button>
//                 </div>
//             </div>
//         </div>
//     );
// };

// export default ProductDetails;


// import React, { useState, useEffect } from "react";
// import { useParams, useNavigate } from "react-router-dom";

// const ProductDetails = () => {
//     const { id } = useParams(); // Get the product ID from the route
//     const navigate = useNavigate();
//     const [product, setProduct] = useState(null);
//     const [selectedSize, setSelectedSize] = useState("");

//     useEffect(() => {
//         const fetchProduct = async () => {
//             try {
//                 const response = await fetch(`/api/products/${id}`);
//                 const data = await response.json();
//                 setProduct(data);
//             } catch (error) {
//                 console.error("Error fetching product:", error);
//             }
//         };

//         fetchProduct();
//     }, [id]);

//     const addToCart = async () => {
//         if (!selectedSize) {
//             alert("Please select a size before adding to cart.");
//             return;
//         }

//         try {
//             const response = await fetch("/api/cart", {
//                 method: "POST",
//                 headers: { "Content-Type": "application/json" },
//                 body: JSON.stringify({
//                     productId: product._id,
//                     name: product.name,
//                     image: product.image,
//                     price: product.price,
//                     size: selectedSize,
//                     quantity: 1,
//                 }),
//             });

//             if (response.ok) {
//                 navigate("/cart"); // Redirect to the cart page after adding
//             } else {
//                 console.error("Failed to add product to cart");
//             }
//         } catch (error) {
//             console.error("Error adding to cart:", error);
//         }
//     };

//     if (!product) {
//         return <h2>Loading...</h2>;
//     }

//     return (
//         <div className="product-details-container">
//             <div className="product-details-content">
//                 <img
//                     src={product.image}
//                     alt={product.name}
//                     className="product-details-image"
//                 />
//                 <div className="product-details-info">
//                     <h1>{product.name}</h1>
//                     <p>${product.price}</p>
//                     <p>{product.description}</p>
//                     <h3>Select Size</h3>
//                     <div className="size-selection">
//                         {["S", "M", "L", "XL", "XXL"].map((size) => (
//                             <button
//                                 key={size}
//                                 onClick={() => setSelectedSize(size)}
//                                 className={`size-button ${
//                                     selectedSize === size ? "active" : ""
//                                 }`}
//                             >
//                                 {size}
//                             </button>
//                         ))}
//                     </div>
//                     <button className="add-to-cart-button" onClick={addToCart}>
//                         Add to Cart
//                     </button>
//                 </div>
//             </div>
//         </div>
//     );
// };

// export default ProductDetails;

import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";

const ProductDetails = () => {
    const { id } = useParams(); // Get the product ID from the route
    const navigate = useNavigate();
    const [product, setProduct] = useState(null);
    const [selectedSize, setSelectedSize] = useState("");

    useEffect(() => {
        const fetchProduct = async () => {
            try {
                const response = await fetch(`/api/products/${id}`);
                const data = await response.json();
                setProduct(data);
            } catch (error) {
                console.error("Error fetching product:", error);
            }
        };

        fetchProduct();
    }, [id]);

    const addToCart = async () => {
        if (!selectedSize) {
            alert("Please select a size before adding to cart.");
            return;
        }

        try {
            const response = await fetch("/api/cart", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({
                    productId: product._id,
                    name: product.name,
                    image: product.image,
                    price: product.price,
                    size: selectedSize,
                    quantity: 1,
                }),
            });

            if (response.ok) {
                navigate("/cart"); // Redirect to the cart page after adding
            } else {
                console.error("Failed to add product to cart");
            }
        } catch (error) {
            console.error("Error adding to cart:", error);
        }
    };

    if (!product) {
        return <h2>Loading...</h2>;
    }

    return (
        <div style={{ padding: "20px" }}>
            <div
                style={{
                    display: "flex",
                    gap: "20px",
                    alignItems: "flex-start", // Align items at the start
                }}
            >
                {/* Product Images */}
                <div>
                    <img
                        src={product.image}
                        alt={product.name}
                        style={{
                            width: "300px",
                            height: "400px",
                            objectFit: "cover",
                            border: "2px solid #f1c40f",
                        }}
                    />
                </div>

                {/* Product Details */}
                <div>
                    <h1 style={{ color: "#f1c40f", fontSize: "32px", marginBottom: "10px" }}>
                        {product.name}
                    </h1>
                    <p style={{ fontSize: "20px", color: "#ccc", marginBottom: "10px" }}>
                        ${product.price}
                    </p>
                    <p style={{ color: "#aaa", marginBottom: "20px" }}>{product.description}</p>
                    <h3 style={{ color: "#f1c40f", marginBottom: "10px" }}>Select Size</h3>
                    <div
                        style={{
                            display: "flex",
                            gap: "10px",
                            margin: "10px 0",
                            flexWrap: "wrap",
                        }}
                    >
                        {["S", "M", "L", "XL", "XXL"].map((size) => (
                            <button
                                key={size}
                                onClick={() => setSelectedSize(size)}
                                style={{
                                    padding: "10px",
                                    border: selectedSize === size ? "2px solid #f1c40f" : "1px solid #ccc",
                                    backgroundColor: selectedSize === size ? "#111" : "#222",
                                    color: "#fff",
                                    cursor: "pointer",
                                    borderRadius: "5px",
                                }}
                            >
                                {size}
                            </button>
                        ))}
                    </div>
                    <button
                        onClick={addToCart}
                        style={{
                            marginTop: "20px",
                            padding: "10px 20px",
                            backgroundColor: "#f1c40f",
                            color: "#000",
                            border: "none",
                            cursor: "pointer",
                            borderRadius: "5px",
                        }}
                    >
                        Add to Cart
                    </button>
                </div>
            </div>
        </div>
    );
};

export default ProductDetails;
