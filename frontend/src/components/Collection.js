// import React, { useState, useEffect } from "react";
// import { Link } from "react-router-dom";

// const Collection = () => {
//     const [products, setProducts] = useState([]);
//     const [categories, setCategories] = useState([]);
//     const [selectedCategories, setSelectedCategories] = useState([]);
//     const [sortOption, setSortOption] = useState("relevant"); // Default sort: Relevant

//     useEffect(() => {
//         const fetchProducts = async () => {
//             const response = await fetch("/api/products"); // Fetch products from API
//             const data = await response.json();
//             setProducts(data);
//         };
//         fetchProducts();

//         setCategories(["Men", "Women", "Kid"]); // Set available categories
//     }, []);

//     const handleFilterChange = (category) => {
//         if (selectedCategories.includes(category)) {
//             setSelectedCategories(selectedCategories.filter((cat) => cat !== category));
//         } else {
//             setSelectedCategories([...selectedCategories, category]);
//         }
//     };

//     const handleSortChange = (e) => {
//         setSortOption(e.target.value); // Update the sort option
//     };

//     const applySort = (productsList) => {
//         if (sortOption === "lowToHigh") {
//             return productsList.sort((a, b) => a.price - b.price); // Sort by price (Low to High)
//         }
//         if (sortOption === "highToLow") {
//             return productsList.sort((a, b) => b.price - a.price); // Sort by price (High to Low)
//         }
//         return productsList; // Default: Relevant (no sorting)
//     };

//     const filteredProducts = selectedCategories.length
//         ? products.filter((product) => selectedCategories.includes(product.category))
//         : products;

//     const sortedProducts = applySort(filteredProducts);

//     return (
//         <div>
//             <h2 style={{ textAlign: "center", marginTop: "20px" }}>All Collections</h2>
//             <div style={{ display: "flex", gap: "20px", padding: "20px" }}>
//                 {/* Filters Section */}
//                 <div style={{ flex: "1", border: "1px solid #ccc", padding: "10px" }}>
//                     <h3>Filters</h3>
//                     {categories.map((category) => (
//                         <div key={category} style={{ marginBottom: "10px" }}>
//                             <input
//                                 type="checkbox"
//                                 id={category}
//                                 checked={selectedCategories.includes(category)}
//                                 onChange={() => handleFilterChange(category)}
//                                 style={{ marginRight: "8px" }}
//                             />
//                             <label htmlFor={category}>{category}</label>
//                         </div>
//                     ))}
//                 </div>
//                 {/* Products Section */}
//                 <div style={{ flex: "3" }}>
//                     {/* Sort By Dropdown */}
//                     <div style={{ display: "flex", justifyContent: "flex-end", marginBottom: "20px" }}>
//                         <label style={{ marginRight: "10px", fontWeight: "bold" }}>Sort by:</label>
//                         <select
//                             value={sortOption}
//                             onChange={handleSortChange}
//                             style={{
//                                 padding: "8px",
//                                 borderRadius: "5px",
//                                 border: "1px solid #ccc",
//                                 cursor: "pointer",
//                             }}
//                         >
//                             <option value="relevant">Relevance</option>
//                             <option value="lowToHigh">Price: Low to High</option>
//                             <option value="highToLow">Price: High to Low</option>
//                         </select>
//                     </div>
//                     {/* Product Cards */}
//                     <div style={{ display: "flex", flexWrap: "wrap", gap: "20px" }}>
//                         {sortedProducts.map((product) => (
//                             <div
//                                 key={product._id}
//                                 style={{
//                                     border: "1px solid #ccc",
//                                     padding: "10px",
//                                     width: "200px",
//                                     textAlign: "center",
//                                     borderRadius: "8px",
//                                 }}
//                             >
//                                 {/* Link to Product Details */}
//                                 <Link
//                                     to={`/product/${product._id}`} // Navigate to ProductDetails
//                                     style={{ textDecoration: "none", color: "inherit" }}
//                                 >
//                                     <img
//                                         src={product.image}
//                                         alt={product.name}
//                                         style={{
//                                             width: "100%",
//                                             height: "150px",
//                                             objectFit: "cover",
//                                             borderRadius: "5px",
//                                         }}
//                                     />
//                                     <h3>{product.name}</h3>
//                                     <p>${product.price.toFixed(2)}</p>
//                                 </Link>
//                             </div>
//                         ))}
//                     </div>
//                 </div>
//             </div>
//         </div>
//     );
// };

// export default Collection;


import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const Collection = () => {
    const [products, setProducts] = useState([]);
    const [categories, setCategories] = useState([]);
    const [selectedCategories, setSelectedCategories] = useState([]);
    const [sortOption, setSortOption] = useState("relevant");

    useEffect(() => {
        const fetchProducts = async () => {
            const response = await fetch("/api/products");
            const data = await response.json();
            setProducts(data);
        };
        fetchProducts();

        setCategories(["Men", "Women", "Kid"]);
    }, []);

    const handleFilterChange = (category) => {
        if (selectedCategories.includes(category)) {
            setSelectedCategories(selectedCategories.filter((cat) => cat !== category));
        } else {
            setSelectedCategories([...selectedCategories, category]);
        }
    };

    const handleSortChange = (e) => {
        setSortOption(e.target.value);
    };

    const applySort = (productsList) => {
        if (sortOption === "lowToHigh") {
            return productsList.sort((a, b) => a.price - b.price);
        }
        if (sortOption === "highToLow") {
            return productsList.sort((a, b) => b.price - a.price);
        }
        return productsList;
    };

    const filteredProducts = selectedCategories.length
        ? products.filter((product) => selectedCategories.includes(product.category))
        : products;

    const sortedProducts = applySort(filteredProducts);

    return (
        <div style={{ padding: "20px", fontFamily: "Arial, sans-serif", color: "#FFD700" }}>
            <h2 style={{ textAlign: "center", marginBottom: "20px", fontWeight: "bold" }}>All Collections</h2>
            <div style={{ display: "flex", gap: "20px" }}>
                {/* Filters Section */}
                <div
                    style={{
                        flex: "1",
                        border: "1px solid #FFD700",
                        padding: "20px",
                        borderRadius: "8px",
                        backgroundColor: "#111",
                    }}
                >
                    <h3 style={{ textAlign: "center", marginBottom: "20px" }}>Filters</h3>
                    {categories.map((category) => (
                        <div key={category} style={{ marginBottom: "10px", display: "flex", alignItems: "center" }}>
                            <input
                                type="checkbox"
                                id={category}
                                checked={selectedCategories.includes(category)}
                                onChange={() => handleFilterChange(category)}
                                style={{ marginRight: "8px", cursor: "pointer" }}
                            />
                            <label htmlFor={category} style={{ cursor: "pointer" }}>
                                {category}
                            </label>
                        </div>
                    ))}
                </div>
                {/* Products Section */}
                <div style={{ flex: "3" }}>
                    {/* Sort By Dropdown */}
                    <div style={{ display: "flex", justifyContent: "flex-end", marginBottom: "20px" }}>
                        <label style={{ marginRight: "10px", fontWeight: "bold" }}>Sort by:</label>
                        <select
                            value={sortOption}
                            onChange={handleSortChange}
                            style={{
                                padding: "8px",
                                borderRadius: "5px",
                                border: "1px solid #FFD700",
                                backgroundColor: "#111",
                                color: "#FFD700",
                                cursor: "pointer",
                            }}
                        >
                            <option value="relevant">Relevance</option>
                            <option value="lowToHigh">Price: Low to High</option>
                            <option value="highToLow">Price: High to Low</option>
                        </select>
                    </div>
                    {/* Product Cards */}
                    <div
                        style={{
                            display: "grid",
                            gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
                            gap: "20px",
                        }}
                    >
                        {sortedProducts.map((product) => (
                            <div
                                key={product._id}
                                style={{
                                    border: "1px solid #FFD700",
                                    borderRadius: "8px",
                                    overflow: "hidden",
                                    backgroundColor: "#111",
                                    color: "#FFD700",
                                }}
                            >
                                <Link
                                    to={`/product/${product._id}`}
                                    style={{ textDecoration: "none", color: "inherit" }}
                                >
                                    <img
                                        src={product.image}
                                        alt={product.name}
                                        style={{
                                            width: "100%",
                                            height: "200px",
                                            objectFit: "cover",
                                            display: "block",
                                        }}
                                    />
                                    <div style={{ padding: "10px", textAlign: "center" }}>
                                        <h3 style={{ fontSize: "18px", marginBottom: "10px" }}>{product.name}</h3>
                                        <p style={{ fontSize: "16px", fontWeight: "bold" }}>${product.price.toFixed(2)}</p>
                                    </div>
                                </Link>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Collection;

