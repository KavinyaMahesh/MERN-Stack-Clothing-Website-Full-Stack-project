import React, { useState } from "react";

const Checkout = () => {
    const [formData, setFormData] = useState({
        firstName: "",
        lastName: "",
        email: "",
        street: "",
        city: "",
        state: "",
        zipcode: "",
        country: "",
        phone: "",
        paymentMethod: "COD",
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({
            ...prevData,
            [name]: value,
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await fetch("/api/orders", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(formData),
            });

            if (response.ok) {
                alert("Order placed successfully!");
            } else {
                alert("Failed to place order.");
            }
        } catch (error) {
            console.error("Error placing order:", error);
            alert("Error placing order.");
        }
    };

    return (
        <div
            style={{
                maxWidth: "800px",
                margin: "30px auto",
                padding: "20px",
                backgroundColor: "#1a1a1a",
                borderRadius: "10px",
                boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2)",
            }}
        >
            <h2 style={{ textAlign: "center", color: "#FFD700", marginBottom: "30px" }}>Delivery Information</h2>
            <form onSubmit={handleSubmit} style={{ color: "#fff" }}>
                <div style={{ display: "flex", gap: "20px", marginBottom: "20px" }}>
                    <input
                        type="text"
                        name="firstName"
                        placeholder="First name"
                        value={formData.firstName}
                        onChange={handleChange}
                        required
                        style={inputStyle}
                    />
                    <input
                        type="text"
                        name="lastName"
                        placeholder="Last name"
                        value={formData.lastName}
                        onChange={handleChange}
                        required
                        style={inputStyle}
                    />
                </div>
                <input
                    type="email"
                    name="email"
                    placeholder="Email address"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    style={{ ...inputStyle, width: "100%", marginBottom: "20px" }}
                />
                <input
                    type="text"
                    name="street"
                    placeholder="Street"
                    value={formData.street}
                    onChange={handleChange}
                    required
                    style={{ ...inputStyle, width: "100%", marginBottom: "20px" }}
                />
                <div style={{ display: "flex", gap: "20px", marginBottom: "20px" }}>
                    <input
                        type="text"
                        name="city"
                        placeholder="City"
                        value={formData.city}
                        onChange={handleChange}
                        required
                        style={inputStyle}
                    />
                    <input
                        type="text"
                        name="state"
                        placeholder="State"
                        value={formData.state}
                        onChange={handleChange}
                        required
                        style={inputStyle}
                    />
                </div>
                <div style={{ display: "flex", gap: "20px", marginBottom: "20px" }}>
                    <input
                        type="text"
                        name="zipcode"
                        placeholder="Zipcode"
                        value={formData.zipcode}
                        onChange={handleChange}
                        required
                        style={inputStyle}
                    />
                    <input
                        type="text"
                        name="country"
                        placeholder="Country"
                        value={formData.country}
                        onChange={handleChange}
                        required
                        style={inputStyle}
                    />
                </div>
                <input
                    type="text"
                    name="phone"
                    placeholder="Phone"
                    value={formData.phone}
                    onChange={handleChange}
                    required
                    style={{ ...inputStyle, width: "100%", marginBottom: "30px" }}
                />
                <h3 style={{ color: "#FFD700", marginBottom: "10px" }}>Payment Method</h3>
                <div style={{ marginBottom: "30px", display: "flex", gap: "20px" }}>
                    <label style={radioLabelStyle}>
                        <input
                            type="radio"
                            name="paymentMethod"
                            value="Stripe"
                            checked={formData.paymentMethod === "Stripe"}
                            onChange={handleChange}
                            style={{ marginRight: "10px" }}
                        />
                        Stripe
                    </label>
                    <label style={radioLabelStyle}>
                        <input
                            type="radio"
                            name="paymentMethod"
                            value="Razorpay"
                            checked={formData.paymentMethod === "Razorpay"}
                            onChange={handleChange}
                            style={{ marginRight: "10px" }}
                        />
                        Razorpay
                    </label>
                    <label style={radioLabelStyle}>
                        <input
                            type="radio"
                            name="paymentMethod"
                            value="COD"
                            checked={formData.paymentMethod === "COD"}
                            onChange={handleChange}
                            style={{ marginRight: "10px" }}
                        />
                        Cash on Delivery
                    </label>
                </div>
                <button
                    type="submit"
                    style={{
                        width: "100%",
                        padding: "12px",
                        backgroundColor: "#FFD700",
                        color: "#000",
                        fontSize: "16px",
                        fontWeight: "bold",
                        border: "none",
                        borderRadius: "5px",
                        cursor: "pointer",
                    }}
                >
                    Place Order
                </button>
            </form>
        </div>
    );
};

// Input field styling
const inputStyle = {
    flex: "1",
    padding: "12px",
    backgroundColor: "#333",
    color: "#fff",
    border: "1px solid #FFD700",
    borderRadius: "5px",
};

// Radio button label styling
const radioLabelStyle = {
    display: "flex",
    alignItems: "center",
    color: "#FFD700",
    fontWeight: "bold",
};

export default Checkout;
