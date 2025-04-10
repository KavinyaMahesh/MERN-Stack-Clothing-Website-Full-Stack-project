// // import React, { useState } from "react";
// // import { useNavigate } from "react-router-dom";

// // const Login = () => {
// //     const [email, setEmail] = useState("");
// //     const [password, setPassword] = useState("");
// //     const navigate = useNavigate();

// //     const loginHandler = async (e) => {
// //         e.preventDefault();
// //         try {
// //             const response = await fetch("/api/users/login", {
// //                 method: "POST",
// //                 headers: { "Content-Type": "application/json" },
// //                 body: JSON.stringify({ email, password }),
// //             });

// //             if (response.ok) {
// //                 const data = await response.json();
// //                 localStorage.setItem("userInfo", JSON.stringify(data));
// //                 navigate("/");
// //             } else {
// //                 alert("Invalid email or password");
// //             }
// //         } catch (error) {
// //             console.error("Error logging in:", error);
// //         }
// //     };

// //     return (
// //         <div style={{ maxWidth: "400px", margin: "50px auto", textAlign: "center" }}>
// //             <h2>Login</h2>
// //             <form onSubmit={loginHandler}>
// //                 <div>
// //                     <input
// //                         type="email"
// //                         placeholder="Email"
// //                         value={email}
// //                         onChange={(e) => setEmail(e.target.value)}
// //                         required
// //                         style={{ padding: "10px", marginBottom: "10px", width: "100%" }}
// //                     />
// //                 </div>
// //                 <div>
// //                     <input
// //                         type="password"
// //                         placeholder="Password"
// //                         value={password}
// //                         onChange={(e) => setPassword(e.target.value)}
// //                         required
// //                         style={{ padding: "10px", marginBottom: "20px", width: "100%" }}
// //                     />
// //                 </div>
// //                 <button type="submit" style={{ padding: "10px", width: "100%", backgroundColor: "black", color: "white" }}>
// //                     Sign In
// //                 </button>
// //                 <p style={{ marginTop: "10px" }}>
// //                     Don't have an account? <a href="/register">Register here</a>
// //                 </p>
// //             </form>
// //         </div>
// //     );
// // };

// // export default Login;


// import React, { useState } from "react";
// import { useNavigate } from "react-router-dom";

// const Login = () => {
//     const [email, setEmail] = useState("");
//     const [password, setPassword] = useState("");
//     const navigate = useNavigate();

//     const loginHandler = async (e) => {
//         e.preventDefault();
//         try {
//             const response = await fetch("/api/users/login", {
//                 method: "POST",
//                 headers: { "Content-Type": "application/json" },
//                 body: JSON.stringify({ email, password }),
//             });

//             if (response.ok) {
//                 const data = await response.json();
//                 localStorage.setItem("userInfo", JSON.stringify(data));
//                 navigate("/");
//             } else {
//                 alert("Invalid email or password");
//             }
//         } catch (error) {
//             console.error("Error logging in:", error);
//         }
//     };

//     return (
//         <div className="form-container">
//             <h2>Login</h2>
//             <form onSubmit={loginHandler}>
//                 <input
//                     type="email"
//                     placeholder="Email"
//                     value={email}
//                     onChange={(e) => setEmail(e.target.value)}
//                     required
//                 />
//                 <input
//                     type="password"
//                     placeholder="Password"
//                     value={password}
//                     onChange={(e) => setPassword(e.target.value)}
//                     required
//                 />
//                 <button type="submit">Sign In</button>
//                 <p style={{ marginTop: "10px", color: "#FFD700" }}>
//     Don't have an account?{" "}
//     <a
//         href="/register"
//         style={{
//             color: "#FFD700",
//             fontWeight: "bold",
//             textDecoration: "underline",
//         }}
//     >
//         Register here
//     </a>
// </p>

//             </form>
//         </div>
//     );
// };

// export default Login;

import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Login = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate();

    const loginHandler = async (e) => {
        e.preventDefault();
        try {
            const response = await fetch("/api/users/login", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ email, password }),
            });

            if (response.ok) {
                const data = await response.json();
                localStorage.setItem("userInfo", JSON.stringify(data));
                navigate("/");
            } else {
                alert("Invalid email or password");
            }
        } catch (error) {
            console.error("Error logging in:", error);
        }
    };

    return (
        <div style={{ 
            display: "flex", 
            justifyContent: "center", 
            alignItems: "center", 
            height: "100vh", 
            backgroundColor: "#000", 
            color: "#FFD700" 
        }}>
            <div style={{
                maxWidth: "400px",
                width: "90%",
                padding: "20px",
                backgroundColor: "#1c1c1c",
                border: "1px solid #FFD700",
                borderRadius: "10px",
                boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2)",
                textAlign: "center"
            }}>
                <h2 style={{ marginBottom: "20px" }}>Login</h2>
                <form onSubmit={loginHandler}>
                    <input
                        type="email"
                        placeholder="Email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                        style={{
                            width: "100%",
                            padding: "10px",
                            marginBottom: "15px",
                            borderRadius: "5px",
                            border: "1px solid #FFD700",
                            backgroundColor: "#333",
                            color: "#FFD700",
                        }}
                    />
                    <input
                        type="password"
                        placeholder="Password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        required
                        style={{
                            width: "100%",
                            padding: "10px",
                            marginBottom: "15px",
                            borderRadius: "5px",
                            border: "1px solid #FFD700",
                            backgroundColor: "#333",
                            color: "#FFD700",
                        }}
                    />
                    <button type="submit" style={{
                        width: "100%",
                        padding: "10px",
                        backgroundColor: "#FFD700",
                        color: "#000",
                        border: "none",
                        borderRadius: "5px",
                        fontWeight: "bold",
                        cursor: "pointer",
                    }}>
                        Sign In
                    </button>
                    <p style={{ marginTop: "15px", fontSize: "14px" }}>
                        Don't have an account?{" "}
                        <a
                            href="/register"
                            style={{
                                color: "#FFD700",
                                fontWeight: "bold",
                                textDecoration: "underline",
                            }}
                        >
                            Register here
                        </a>
                    </p>
                </form>
            </div>
        </div>
    );
};

export default Login;

