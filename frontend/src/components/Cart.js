// import React, { useState, useEffect } from "react";

// const Cart = () => {
//     const [cartItems, setCartItems] = useState([]);

//     // Fetch cart items when the component loads
//     useEffect(() => {
//         const fetchCartItems = async () => {
//             try {
//                 const response = await fetch("/api/cart");
//                 const data = await response.json();
//                 setCartItems(data);
//             } catch (error) {
//                 console.error("Error fetching cart items:", error);
//             }
//         };

//         fetchCartItems();
//     }, []);

//     // Handle quantity change
//     const handleQuantityChange = async (id, quantity) => {
//         try {
//             if (quantity <= 0) return; // Prevent quantity from going below 1

//             const response = await fetch(`/api/cart/${id}`, {
//                 method: "PATCH",
//                 headers: { "Content-Type": "application/json" },
//                 body: JSON.stringify({ delta: quantity - cartItems.find((item) => item._id === id).quantity }),
//             });

//             if (response.ok) {
//                 setCartItems((prevItems) =>
//                     prevItems.map((item) =>
//                         item._id === id ? { ...item, quantity: quantity } : item
//                     )
//                 );
//             }
//         } catch (error) {
//             console.error("Error updating quantity:", error);
//         }
//     };

//     // Handle product deletion
//     const handleDelete = async (id) => {
//         try {
//             const response = await fetch(`/api/cart/${id}`, {
//                 method: "DELETE",
//             });

//             if (response.ok) {
//                 setCartItems((prevItems) => prevItems.filter((item) => item._id !== id));
//             }
//         } catch (error) {
//             console.error("Error deleting cart item:", error);
//         }
//     };

//     // Calculate total price
//     const totalPrice = cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0);

//     if (cartItems.length === 0) {
//         return <h2 style={{ textAlign: "center", marginTop: "20px" }}>Your Cart is Empty</h2>;
//     }

//     return (
//         <div>
//             <h2 style={{ textAlign: "center", marginTop: "20px" }}>Your Cart</h2>
//             <div style={{ maxWidth: "800px", margin: "20px auto", border: "1px solid #ccc", padding: "10px" }}>
//                 {cartItems.map((item) => (
//                     <div
//                         key={item._id}
//                         style={{
//                             display: "flex",
//                             justifyContent: "space-between",
//                             alignItems: "center",
//                             marginBottom: "20px",
//                             borderBottom: "1px solid #eee",
//                             paddingBottom: "10px",
//                         }}
//                     >
//                         {/* Product Image */}
//                         <img
//                             src={item.image}
//                             alt={item.name}
//                             style={{ width: "100px", height: "100px", objectFit: "cover" }}
//                         />
//                         {/* Product Details */}
//                         <div style={{ flex: "1", marginLeft: "20px" }}>
//                             <h4>{item.name}</h4>
//                             <p>${item.price.toFixed(2)}</p>
//                             <p>Size: {item.size}</p>
//                         </div>
//                         {/* Quantity Input */}
//                         <div>
//                             <input
//                                 type="number"
//                                 min="1"
//                                 value={item.quantity}
//                                 onChange={(e) => handleQuantityChange(item._id, parseInt(e.target.value))}
//                                 style={{
//                                     width: "50px",
//                                     textAlign: "center",
//                                     border: "1px solid #ccc",
//                                     borderRadius: "5px",
//                                     padding: "5px",
//                                 }}
//                             />
//                         </div>
//                         {/* Delete Button */}
//                         <button
//                             onClick={() => handleDelete(item._id)}
//                             style={{
//                                 border: "none",
//                                 backgroundColor: "transparent",
//                                 cursor: "pointer",
//                                 color: "#f00",
//                                 fontSize: "20px",
//                             }}
//                         >
//                             🗑️
//                         </button>
//                     </div>
//                 ))}
//                 {/* Total Price */}
//                 <h3 style={{ textAlign: "right", marginTop: "20px" }}>Total: ${totalPrice.toFixed(2)}</h3>
//             </div>
//         </div>
//     );
// };

// export default Cart;

// import React, { useState, useEffect } from "react";
// import { useNavigate } from "react-router-dom";

// const Cart = () => {
//     const [cartItems, setCartItems] = useState([]);
//     const shippingFee = 10; // Fixed shipping fee
//     const navigate = useNavigate();

//     // Fetch cart items when the component loads
//     useEffect(() => {
//         const fetchCartItems = async () => {
//             try {
//                 const response = await fetch("/api/cart");
//                 const data = await response.json();
//                 setCartItems(data);
//             } catch (error) {
//                 console.error("Error fetching cart items:", error);
//             }
//         };

//         fetchCartItems();
//     }, []);

//     // Handle quantity change
//     const handleQuantityChange = async (id, quantity) => {
//         try {
//             if (quantity <= 0) return; // Prevent quantity from going below 1

//             const response = await fetch(`/api/cart/${id}`, {
//                 method: "PATCH",
//                 headers: { "Content-Type": "application/json" },
//                 body: JSON.stringify({ delta: quantity - cartItems.find((item) => item._id === id).quantity }),
//             });

//             if (response.ok) {
//                 setCartItems((prevItems) =>
//                     prevItems.map((item) =>
//                         item._id === id ? { ...item, quantity: quantity } : item
//                     )
//                 );
//             }
//         } catch (error) {
//             console.error("Error updating quantity:", error);
//         }
//     };

//     // Handle product deletion
//     const handleDelete = async (id) => {
//         try {
//             const response = await fetch(`/api/cart/${id}`, {
//                 method: "DELETE",
//             });
    
//             if (response.ok) {
//                 setCartItems((prevItems) => prevItems.filter((item) => item._id !== id));
//             } else {
//                 console.error("Failed to delete cart item:", await response.json());
//             }
//         } catch (error) {
//             console.error("Error deleting cart item:", error);
//         }
//     };

   
    
    

//     // Calculate total price
//     const subtotal = cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0);
//     const totalPrice = subtotal + shippingFee; // Add shipping fee to subtotal

//     // Handle "Proceed to Checkout"
//     const proceedToCheckout = () => {
//         const userInfo = JSON.parse(localStorage.getItem("userInfo")); // Check user login
//         if (userInfo) {
//             navigate("/checkout"); // Navigate to checkout if logged in
//         } else {
//             alert("Please log in to proceed to checkout!");
//             navigate("/login");
//         }
//     };

//     if (cartItems.length === 0) {
//         return <h2 style={{ textAlign: "center", marginTop: "20px" }}>Your Cart is Empty</h2>;
//     }

//     return (
//         <div>
//             <h2 style={{ textAlign: "center", marginTop: "20px" }}>Your Cart</h2>
//             <div style={{ maxWidth: "800px", margin: "20px auto", border: "1px solid #ccc", padding: "10px" }}>
//                 {cartItems.map((item) => (
//                     <div
//                         key={item._id}
//                         style={{
//                             display: "flex",
//                             justifyContent: "space-between",
//                             alignItems: "center",
//                             marginBottom: "20px",
//                             borderBottom: "1px solid #eee",
//                             paddingBottom: "10px",
//                         }}
//                     >
//                         {/* Product Image */}
//                         <img
//                             src={item.image}
//                             alt={item.name}
//                             style={{ width: "100px", height: "100px", objectFit: "cover" }}
//                         />
//                         {/* Product Details */}
//                         <div style={{ flex: "1", marginLeft: "20px" }}>
//                             <h4>{item.name}</h4>
//                             <p>${item.price.toFixed(2)}</p>
//                             <p>Size: {item.size}</p>
//                         </div>
//                         {/* Quantity Input */}
//                         <div>
//                             <input
//                                 type="number"
//                                 min="1"
//                                 value={item.quantity}
//                                 onChange={(e) => handleQuantityChange(item._id, parseInt(e.target.value))}
//                                 style={{
//                                     width: "50px",
//                                     textAlign: "center",
//                                     border: "1px solid #ccc",
//                                     borderRadius: "5px",
//                                     padding: "5px",
//                                 }}
//                             />
//                         </div>
//                         {/* Delete Button */}
//                         <button
//                             onClick={() => handleDelete(item._id)}
//                             style={{
//                                 border: "none",
//                                 backgroundColor: "transparent",
//                                 cursor: "pointer",
//                                 color: "#f00",
//                                 fontSize: "20px",
//                             }}
//                         >
//                             🗑️
//                         </button>
//                     </div>
//                 ))}
//                 {/* Subtotal and Shipping Fee */}
//                 <h3>Subtotal: ${subtotal.toFixed(2)}</h3>
//                 <h3>Shipping Fee: ${shippingFee.toFixed(2)}</h3>
//                 <h3>Total: ${totalPrice.toFixed(2)}</h3>
//                 {/* Proceed to Checkout Button */}
//                 <button
//                     onClick={proceedToCheckout}
//                     style={{
//                         backgroundColor: "#000",
//                         color: "#fff",
//                         padding: "10px 20px",
//                         border: "none",
//                         cursor: "pointer",
//                         marginTop: "20px",
//                         display: "block",
//                         marginLeft: "auto",
//                     }}
//                 >
//                     Proceed to Checkout
//                 </button>
//             </div>
//         </div>
//     );
// };

// export default Cart;

import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

const Cart = () => {
    const [cartItems, setCartItems] = useState([]);
    const shippingFee = 10; // Fixed shipping fee
    const navigate = useNavigate();

    // Fetch cart items when the component loads
    useEffect(() => {
        const fetchCartItems = async () => {
            try {
                const response = await fetch("/api/cart");
                const data = await response.json();
                setCartItems(data);
            } catch (error) {
                console.error("Error fetching cart items:", error);
            }
        };

        fetchCartItems();
    }, []);

    // Handle quantity change
    const handleQuantityChange = async (id, quantity) => {
        try {
            if (quantity <= 0) return;

            const response = await fetch(`/api/cart/${id}`, {
                method: "PATCH",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ delta: quantity - cartItems.find((item) => item._id === id).quantity }),
            });

            if (response.ok) {
                setCartItems((prevItems) =>
                    prevItems.map((item) =>
                        item._id === id ? { ...item, quantity: quantity } : item
                    )
                );
            }
        } catch (error) {
            console.error("Error updating quantity:", error);
        }
    };

    // Handle product deletion
  // Handle product deletion
const handleDelete = async (id) => {
    try {
        const response = await fetch(`/api/cart/${id}`, {
            method: "DELETE",
        });

        if (response.ok) {
            // Update the cart items state to remove the deleted item
            setCartItems((prevItems) => prevItems.filter((item) => item._id !== id));
        } else {
            const errorData = await response.json();
            console.error("Failed to delete cart item:", errorData.message);
        }
    } catch (error) {
        console.error("Error deleting cart item:", error);
    }
};


    // Calculate total price
    const subtotal = cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0);
    const totalPrice = subtotal + shippingFee;

    // Handle "Proceed to Checkout"
    const proceedToCheckout = () => {
        const userInfo = JSON.parse(localStorage.getItem("userInfo"));
        if (userInfo) {
            navigate("/checkout");
        } else {
            alert("Please log in to proceed to checkout!");
            navigate("/login");
        }
    };

    if (cartItems.length === 0) {
        return <h2 style={{ textAlign: "center", marginTop: "20px" }}>Your Cart is Empty</h2>;
    }

    return (
        <div>
            <h2 style={{ textAlign: "center", marginTop: "20px" }}>Your Cart</h2>
            <div style={{ maxWidth: "800px", margin: "20px auto", border: "1px solid #ccc", padding: "10px" }}>
                {cartItems.map((item) => (
                    <div
                        key={item._id}
                        style={{
                            display: "flex",
                            justifyContent: "space-between",
                            alignItems: "center",
                            marginBottom: "20px",
                            borderBottom: "1px solid #eee",
                            paddingBottom: "10px",
                        }}
                    >
                        <img
                            src={item.image}
                            alt={item.name}
                            style={{ width: "100px", height: "100px", objectFit: "cover" }}
                        />
                        <div style={{ flex: "1", marginLeft: "20px" }}>
                            <h4>{item.name}</h4>
                            <p>${item.price.toFixed(2)}</p>
                            <p>Size: {item.size}</p>
                        </div>
                        <div>
                            <input
                                type="number"
                                min="1"
                                value={item.quantity}
                                onChange={(e) => handleQuantityChange(item._id, parseInt(e.target.value))}
                                style={{
                                    width: "50px",
                                    textAlign: "center",
                                    border: "1px solid #ccc",
                                    borderRadius: "5px",
                                    padding: "5px",
                                }}
                            />
                        </div>
                        <button
                            onClick={() => handleDelete(item._id)}
                            style={{
                                border: "none",
                                backgroundColor: "transparent",
                                cursor: "pointer",
                                color: "#f00",
                                fontSize: "20px",
                            }}
                        >
                            🗑️
                        </button>
                    </div>
                ))}
                <h3>Subtotal: ${subtotal.toFixed(2)}</h3>
                <h3>Shipping Fee: ${shippingFee.toFixed(2)}</h3>
                <h3>Total: ${totalPrice.toFixed(2)}</h3>
                <button
                    onClick={proceedToCheckout}
                    style={{
                        backgroundColor: "#000",
                        color: "#fff",
                        padding: "10px 20px",
                        border: "none",
                        cursor: "pointer",
                        marginTop: "20px",
                        display: "block",
                        marginLeft: "auto",
                    }}
                >
                    Proceed to Checkout
                </button>
            </div>
        </div>
    );
};

export default Cart;


