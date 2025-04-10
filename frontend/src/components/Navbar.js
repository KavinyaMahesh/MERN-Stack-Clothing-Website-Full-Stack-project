// // import React, { useState, useEffect } from "react";
// // import { Link, useNavigate } from "react-router-dom";

// // const Navbar = () => {
// //     const [userInfo, setUserInfo] = useState(null);
// //     const navigate = useNavigate();

// //     useEffect(() => {
// //         // Retrieve user information from localStorage
// //         const storedUserInfo = JSON.parse(localStorage.getItem("userInfo"));
// //         setUserInfo(storedUserInfo);
// //     }, []);

// //     const logoutHandler = () => {
// //         // Remove user information from localStorage
// //         localStorage.removeItem("userInfo");
// //         setUserInfo(null);
// //         navigate("/login");
// //     };

// //     return (
// //         <nav style={{ display: "flex", justifyContent: "space-between", padding: "10px 20px", borderBottom: "1px solid #ccc" }}>
// //             <h2>Vogue Vastra</h2>
// //             <ul style={{ display: "flex", listStyle: "none", gap: "20px", margin: 0 }}>
// //                 <li><Link to="/">Home</Link></li>
// //                 <li><Link to="/collection">Collections</Link></li>
// //                 <li><Link to="/cart">Cart</Link></li>
// //                 {userInfo ? (
// //                     <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
// //                         <span>Welcome, <strong>{userInfo.name}</strong></span> {/* Display user's name */}
// //                         <button
// //                             onClick={logoutHandler}
// //                             style={{
// //                                 backgroundColor: "transparent",
// //                                 border: "1px solid #ccc",
// //                                 borderRadius: "5px",
// //                                 padding: "5px 10px",
// //                                 cursor: "pointer",
// //                             }}
// //                         >
// //                             Logout
// //                         </button>
// //                     </div>
// //                 ) : (
// //                     <li><Link to="/login">Login</Link></li>
// //                 )}
// //             </ul>
// //         </nav>
// //     );
// // };

// // export default Navbar;


// import React, { useState, useEffect } from "react";
// import { Link, useNavigate } from "react-router-dom";

// const Navbar = () => {
//     const [userInfo, setUserInfo] = useState(null);
//     const navigate = useNavigate();

//     useEffect(() => {
//         const storedUserInfo = JSON.parse(localStorage.getItem("userInfo"));
//         setUserInfo(storedUserInfo);
//     }, []);

//     const logoutHandler = () => {
//         localStorage.removeItem("userInfo");
//         setUserInfo(null);
//         navigate("/login");
//     };

//     return (
//         <nav>
//             <h2>Vogue Vastra</h2>
//             {/* <ul>
//                 <li><Link to="/">Home</Link></li>
//                 <li><Link to="/collection">Collections</Link></li>
//                 <li><Link to="/cart">Cart</Link></li>
//                 {userInfo ? (
//                     <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
//                         <span>Welcome, <strong>{userInfo.name}</strong></span>
//                         <button onClick={logoutHandler}>Logout</button>
//                     </div>
//                 ) : (
//                     <li><Link to="/login">Login</Link></li>
//                 )}
//             </ul> */}

//             <ul style={{ display: "flex", listStyle: "none", gap: "20px", margin: 0 }}>
//     <li>
//         <Link
//             to="/"
//             style={{
//                 textDecoration: "none",
//                 color: "#FFD700",
//                 fontSize: "18px",
//                 padding: "5px 10px",
//                 borderRadius: "5px",
//                 transition: "all 0.3s ease",
//             }}
//             onMouseEnter={(e) => (e.target.style.backgroundColor = "#333")}
//             onMouseLeave={(e) => (e.target.style.backgroundColor = "transparent")}
//         >
//             Home
//         </Link>
//     </li>
    
//     <li>
//         <Link
//             to="/collection"
//             style={{
//                 textDecoration: "none",
//                 color: "#FFD700",
//                 fontSize: "18px",
//                 padding: "5px 10px",
//                 borderRadius: "5px",
//                 transition: "all 0.3s ease",
//             }}
//             onMouseEnter={(e) => (e.target.style.backgroundColor = "#333")}
//             onMouseLeave={(e) => (e.target.style.backgroundColor = "transparent")}
//         >
//             Collections
//         </Link>
//     </li>
//     <li>
//         <Link
//             to="/cart"
//             style={{
//                 textDecoration: "none",
//                 color: "#FFD700",
//                 fontSize: "18px",
//                 padding: "5px 10px",
//                 borderRadius: "5px",
//                 transition: "all 0.3s ease",
//             }}
//             onMouseEnter={(e) => (e.target.style.backgroundColor = "#333")}
//             onMouseLeave={(e) => (e.target.style.backgroundColor = "transparent")}
//         >
//             Cart
//         </Link>
//     </li>
    

//     {userInfo ? (
//                     <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
//                         <span>Welcome, <strong>{userInfo.name}</strong></span>
//                         <button onClick={logoutHandler}>Logout</button>
//                     </div>
//                 ) : (
//                     <li>
//         <Link
//             to="/login"
//             style={{
//                 textDecoration: "none",
//                 color: "#FFD700",
//                 fontSize: "18px",
//                 padding: "5px 10px",
//                 borderRadius: "5px",
//                 transition: "all 0.3s ease",
//             }}
//             onMouseEnter={(e) => (e.target.style.backgroundColor = "#333")}
//             onMouseLeave={(e) => (e.target.style.backgroundColor = "transparent")}
//         >
//             Login
//         </Link>

        
//     </li>
//                 )}
// </ul>

//         </nav>
//     );
// };

// export default Navbar;


import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";

const Navbar = () => {
    const [userInfo, setUserInfo] = useState(null);
    const navigate = useNavigate();

    useEffect(() => {
        const storedUserInfo = JSON.parse(localStorage.getItem("userInfo"));
        setUserInfo(storedUserInfo);
    }, []);

    const logoutHandler = () => {
        localStorage.removeItem("userInfo");
        setUserInfo(null);
        navigate("/login");
    };

    return (
        <nav
            style={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                padding: "10px 20px",
                borderBottom: "2px solid #FFD700",
            }}
        >
            <h2 style={{ color: "#FFD700", fontSize: "24px" }}>Vogue Vastra</h2>
            <ul
                style={{
                    display: "flex",
                    listStyle: "none",
                    gap: "20px",
                    margin: 0,
                    padding: 0,
                }}
            >
                {/* Home Link */}
                <li>
                    <Link
                        to="/"
                        style={{
                            textDecoration: "none",
                            color: "#FFD700",
                            fontSize: "18px",
                            padding: "5px 10px",
                            borderRadius: "5px",
                            transition: "all 0.3s ease",
                        }}
                        onMouseEnter={(e) =>
                            (e.target.style.backgroundColor = "#333")
                        }
                        onMouseLeave={(e) =>
                            (e.target.style.backgroundColor = "transparent")
                        }
                    >
                        Home
                    </Link>
                </li>
                {/* Collections Link */}
                <li>
                    <Link
                        to="/collection"
                        style={{
                            textDecoration: "none",
                            color: "#FFD700",
                            fontSize: "18px",
                            padding: "5px 10px",
                            borderRadius: "5px",
                            transition: "all 0.3s ease",
                        }}
                        onMouseEnter={(e) =>
                            (e.target.style.backgroundColor = "#333")
                        }
                        onMouseLeave={(e) =>
                            (e.target.style.backgroundColor = "transparent")
                        }
                    >
                        Collections
                    </Link>
                </li>
                {/* Cart Link */}
                <li>
                    <Link
                        to="/cart"
                        style={{
                            textDecoration: "none",
                            color: "#FFD700",
                            fontSize: "18px",
                            padding: "5px 10px",
                            borderRadius: "5px",
                            transition: "all 0.3s ease",
                        }}
                        onMouseEnter={(e) =>
                            (e.target.style.backgroundColor = "#333")
                        }
                        onMouseLeave={(e) =>
                            (e.target.style.backgroundColor = "transparent")
                        }
                    >
                        Cart
                    </Link>
                </li>
                {/* About Us Link */}
                <li>
                    <Link
                        to="/about"
                        style={{
                            textDecoration: "none",
                            color: "#FFD700",
                            fontSize: "18px",
                            padding: "5px 10px",
                            borderRadius: "5px",
                            transition: "all 0.3s ease",
                        }}
                        onMouseEnter={(e) =>
                            (e.target.style.backgroundColor = "#333")
                        }
                        onMouseLeave={(e) =>
                            (e.target.style.backgroundColor = "transparent")
                        }
                    >
                        About Us
                    </Link>
                </li>
                {/* Contact Us Link */}
                <li>
                    <Link
                        to="/contact"
                        style={{
                            textDecoration: "none",
                            color: "#FFD700",
                            fontSize: "18px",
                            padding: "5px 10px",
                            borderRadius: "5px",
                            transition: "all 0.3s ease",
                        }}
                        onMouseEnter={(e) =>
                            (e.target.style.backgroundColor = "#333")
                        }
                        onMouseLeave={(e) =>
                            (e.target.style.backgroundColor = "transparent")
                        }
                    >
                        Contact Us
                    </Link>
                    
                </li>

                <li>
  <Link
    to="/style-quiz"
    style={{
      textDecoration: "none",
      color: "#FFD700",
      fontSize: "18px",
      padding: "5px 10px",
      borderRadius: "5px",
      transition: "all 0.3s ease",
    }}
    onMouseEnter={(e) => (e.target.style.backgroundColor = "#333")}
    onMouseLeave={(e) => (e.target.style.backgroundColor = "transparent")}
  >
    Style Quiz
  </Link>
</li>

                {/* Login/Logout Section */}
                {userInfo ? (
                    <div
                        style={{
                            display: "flex",
                            alignItems: "center",
                            gap: "10px",
                        }}
                    >
                        <span
                            style={{
                                color: "#FFD700",
                                fontSize: "18px",
                            }}
                        >
                            Welcome, <strong>{userInfo.name}</strong>
                        </span>
                        <button
                            onClick={logoutHandler}
                            style={{
                                backgroundColor: "transparent",
                                border: "1px solid #FFD700",
                                color: "#FFD700",
                                borderRadius: "5px",
                                padding: "5px 10px",
                                cursor: "pointer",
                                fontSize: "16px",
                            }}
                        >
                            Logout
                        </button>
                    </div>
                ) : (
                    <li>
                        <Link
                            to="/login"
                            style={{
                                textDecoration: "none",
                                color: "#FFD700",
                                fontSize: "18px",
                                padding: "5px 10px",
                                borderRadius: "5px",
                                transition: "all 0.3s ease",
                            }}
                            onMouseEnter={(e) =>
                                (e.target.style.backgroundColor = "#333")
                            }
                            onMouseLeave={(e) =>
                                (e.target.style.backgroundColor = "transparent")
                            }
                        >
                            Login
                        </Link>
                    </li>
                )}
            </ul>
        </nav>
    );
};

export default Navbar;

