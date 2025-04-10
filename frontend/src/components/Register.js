import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import ReCAPTCHA from "react-google-recaptcha";

const Register = () => {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [passwordStrength, setPasswordStrength] = useState(0);
    const [captchaVerified, setCaptchaVerified] = useState(false);

    const navigate = useNavigate();

    const registerHandler = async (e) => {
        e.preventDefault();
        if (!captchaVerified) {
            alert("Please complete the CAPTCHA verification!");
            return;
        }
        if (password !== confirmPassword) {
            alert("Passwords do not match!");
            return;
        }
        try {
            const response = await fetch("/api/users/register", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ name, email, password }),
            });

            if (response.ok) {
                alert("Registration successful! Please login.");
                navigate("/login");
            } else {
                const errorData = await response.json();
                alert(errorData.message || "Registration failed");
            }
        } catch (error) {
            console.error("Error registering user:", error);
        }
    };

    const checkPasswordStrength = (password) => {
        let strength = 0;
        if (password.length >= 8) strength += 1;
        if (password.match(/[a-z]+/)) strength += 1;
        if (password.match(/[A-Z]+/)) strength += 1;
        if (password.match(/[0-9]+/)) strength += 1;
        if (password.match(/[$@#&!]+/)) strength += 1;
        setPasswordStrength(strength);
    };

    const handlePasswordChange = (e) => {
        const value = e.target.value;
        setPassword(value);
        checkPasswordStrength(value);
    };

    const getStrengthColor = () => {
        switch (passwordStrength) {
            case 1: return "red";
            case 2: return "orange";
            case 3: return "yellow";
            case 4: return "lightgreen";
            case 5: return "green";
            default: return "lightgray";
        }
    };

    const handleCaptchaChange = (value) => {
        setCaptchaVerified(!!value);
    };

    return (
        <div className="form-container" style={{ maxWidth: "400px", margin: "50px auto" }}>
            <h2 style={{ textAlign: "center", marginBottom: "20px" }}>Register</h2>
            <form onSubmit={registerHandler}>
                <input
                    type="text"
                    placeholder="Name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    required
                    style={{ padding: "10px", marginBottom: "10px", width: "100%" }}
                />
                <input
                    type="email"
                    placeholder="Email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                    style={{ padding: "10px", marginBottom: "10px", width: "100%" }}
                />
                <input
                    type="password"
                    placeholder="Password"
                    value={password}
                    onChange={handlePasswordChange}
                    required
                    style={{ padding: "10px", marginBottom: "10px", width: "100%" }}
                />
                {/* Password Strength Bar */}
                <div
                    style={{
                        width: "100%",
                        height: "10px",
                        backgroundColor: "lightgray",
                        borderRadius: "5px",
                        marginBottom: "10px",
                    }}
                >
                    <div
                        style={{
                            width: `${passwordStrength * 20}%`,
                            height: "100%",
                            backgroundColor: getStrengthColor(),
                            borderRadius: "5px",
                            transition: "width 0.3s ease",
                        }}
                    ></div>
                </div>
                <input
                    type="password"
                    placeholder="Confirm Password"
                    value={confirmPassword}
                    onChange={(e) => setConfirmPassword(e.target.value)}
                    required
                    style={{ padding: "10px", marginBottom: "10px", width: "100%" }}
                />
                {/* Google reCAPTCHA */}
                <div style={{ marginBottom: "20px", textAlign: "center" }}>
                    <ReCAPTCHA
                        sitekey="6LeW1SMqAAAAAN94LYpprALOGQotWRFPRqp2puEM"
                        onChange={handleCaptchaChange}
                    />
                </div>
                <button
                    type="submit"
                    style={{
                        padding: "10px",
                        width: "100%",
                        backgroundColor: "black",
                        color: "white",
                        border: "none",
                        cursor: "pointer",
                    }}
                >
                    Register
                </button>
                <p style={{ textAlign: "center", marginTop: "10px" }}>
                    Already have an account? <a href="/login">Login here</a>
                </p>
            </form>
        </div>
    );
};

export default Register;
