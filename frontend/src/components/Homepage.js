// import React, { useState, useEffect } from "react";
// import { Link } from "react-router-dom";

// const Homepage = () => {
//     const [collections, setCollections] = useState({
//         men: [],
//         women: [],
//         kids: [],
//     });

//     useEffect(() => {
//         const fetchCollections = async () => {
//             try {
//                 const response = await fetch("/api/products/latest"); // Call the backend endpoint
//                 const data = await response.json();
//                 setCollections(data); // Set the fetched data
//             } catch (error) {
//                 console.error("Error fetching collections:", error);
//             }
//         };

//         fetchCollections();
//     }, []);

//     return (
//         <div>
//             <h2 style={{ textAlign: "center", marginTop: "20px" }}>Latest Collections</h2>
//             <div style={{ marginTop: "20px" }}>
//                 {/* Men's Collection */}
//                 <section style={{ marginBottom: "40px" }}>
//                     <h3 style={{ textAlign: "center" }}>Men's Collection</h3>
//                     <div style={{ display: "flex", justifyContent: "center", gap: "20px" }}>
//                         {collections.men.map((product) => (
//                             <div key={product._id} style={{ border: "1px solid #ccc", padding: "10px", width: "200px", textAlign: "center" }}>
//                                 <Link to={`/product/${product._id}`} style={{ textDecoration: "none", color: "inherit" }}>
//                                     <img src={product.image} alt={product.name} style={{ width: "100%", height: "150px", objectFit: "cover" }} />
//                                     <h4>{product.name}</h4>
//                                     <p>${product.price}</p>
//                                 </Link>
//                             </div>
//                         ))}
//                     </div>
//                 </section>

//                 {/* Women's Collection */}
//                 <section style={{ marginBottom: "40px" }}>
//                     <h3 style={{ textAlign: "center" }}>Women's Collection</h3>
//                     <div style={{ display: "flex", justifyContent: "center", gap: "20px" }}>
//                         {collections.women.map((product) => (
//                             <div key={product._id} style={{ border: "1px solid #ccc", padding: "10px", width: "200px", textAlign: "center" }}>
//                                 <Link to={`/product/${product._id}`} style={{ textDecoration: "none", color: "inherit" }}>
//                                     <img src={product.image} alt={product.name} style={{ width: "100%", height: "150px", objectFit: "cover" }} />
//                                     <h4>{product.name}</h4>
//                                     <p>${product.price}</p>
//                                 </Link>
//                             </div>
//                         ))}
//                     </div>
//                 </section>

//                 {/* Kids' Collection */}
//                 <section>
//                     <h3 style={{ textAlign: "center" }}>Kid's Collection</h3>
//                     <div style={{ display: "flex", justifyContent: "center", gap: "20px" }}>
//                         {collections.kids.map((product) => (
//                             <div key={product._id} style={{ border: "1px solid #ccc", padding: "10px", width: "200px", textAlign: "center" }}>
//                                 <Link to={`/product/${product._id}`} style={{ textDecoration: "none", color: "inherit" }}>
//                                     <img src={product.image} alt={product.name} style={{ width: "100%", height: "150px", objectFit: "cover" }} />
//                                     <h4>{product.name}</h4>
//                                     <p>${product.price}</p>
//                                 </Link>
//                             </div>
//                         ))}
//                     </div>
//                 </section>
//             </div>
//         </div>
//     );
// };

// export default Homepage;

import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const Homepage = () => {
    const [collections, setCollections] = useState({
        men: [],
        women: [],
        kids: [],
    });

    useEffect(() => {
        const fetchCollections = async () => {
            try {
                const response = await fetch("/api/products/latest");
                const data = await response.json();
                setCollections(data);
            } catch (error) {
                console.error("Error fetching collections:", error);
            }
        };

        fetchCollections();
    }, []);

    return (
        <div>
            <h2>Latest Collections</h2>

            {/* Men's Collection */}
            <section>
                <h3>Men's Collection</h3>
                <div className="scrollable-section">
                    {collections.men.map((product) => (
                        <div key={product._id} className="product-card">
                            <Link to={`/product/${product._id}`}>
                                <img src={product.image} alt={product.name} />
                                <h4>{product.name}</h4>
                                <p>${product.price}</p>
                            </Link>
                        </div>
                    ))}
                </div>
            </section>

            {/* Women's Collection */}
            <section>
                <h3>Women's Collection</h3>
                <div className="scrollable-section">
                    {collections.women.map((product) => (
                        <div key={product._id} className="product-card">
                            <Link to={`/product/${product._id}`}>
                                <img src={product.image} alt={product.name} />
                                <h4>{product.name}</h4>
                                <p>${product.price}</p>
                            </Link>
                        </div>
                    ))}
                </div>
            </section>

            {/* Kid's Collection */}
            <section>
                <h3>Kid's Collection</h3>
                <div className="scrollable-section">
                    {collections.kids.map((product) => (
                        <div key={product._id} className="product-card">
                            <Link to={`/product/${product._id}`}>
                                <img src={product.image} alt={product.name} />
                                <h4>{product.name}</h4>
                                <p>${product.price}</p>
                            </Link>
                        </div>
                    ))}
                </div>
            </section>
        </div>
    );
};

export default Homepage;

