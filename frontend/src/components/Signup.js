import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Signup = () => {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate();

    const signupHandler = async (e) => {
        e.preventDefault();
        try {
            const response = await fetch("/api/users/signup", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ name, email, password }),
            });

            if (response.ok) {
                const data = await response.json();
                localStorage.setItem("userInfo", JSON.stringify(data));
                navigate("/");
            } else {
                alert("Error signing up");
            }
        } catch (error) {
            console.error("Error signing up:", error);
        }
    };

    return (
        <div style={{ maxWidth: "400px", margin: "50px auto", textAlign: "center" }}>
            <h2>Sign Up</h2>
            <form onSubmit={signupHandler}>
                <div>
                    <input
                        type="text"
                        placeholder="Name"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        required
                    />
                </div>
                <div>
                    <input
                        type="email"
                        placeholder="Email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                    />
                </div>
                <div>
                    <input
                        type="password"
                        placeholder="Password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        required
                    />
                </div>
                <button type="submit">Sign Up</button>
            </form>
        </div>
    );
};

export default Signup;
