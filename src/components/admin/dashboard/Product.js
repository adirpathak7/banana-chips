import React, { useState, useEffect } from 'react'
import axios from 'axios';

export default function Product() {
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        axios
            .get("http://localhost:8000/banana/app/admin/product/allProducts")
            .then((response) => {
                setProducts(response.data);
                setLoading(false);
            })
            .catch((error) => {
                console.error("Error fetching products:", error);
                setLoading(false);
            });
    }, []);

    if (loading) {
        return (
            <div className="flex justify-center items-center h-screen">
                <div className="text-lg font-semibold">Loading products...</div>
            </div>
        );
    }

    return (
        <div className="p-6 bg-gray-100 min-h-screen">
            <h1 className="text-2xl font-bold text-center mb-6">Available Products</h1>
            <div className="overflow-y-auto max-h-[80vh]">
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                    {products.map((product) => (
                        <div
                            key={product.productId}
                            className="bg-white shadow-lg rounded-lg overflow-hidden"
                        >
                            <img
                                src={product.productImage || "https://via.placeholder.com/300"}
                                alt={product.productName}
                                className="w-full h-48 object-cover"
                            />
                            <div className="p-4">
                                <h2 className="text-xl font-semibold mb-2">{product.productName}</h2>
                                <p className="text-gray-600">{product.description}</p>
                                <p className="text-gray-800 font-bold mt-2">Price: ₹{product.price}</p>
                                <p className={`mt-2 ${product.quantity > 0 ? "text-green-500" : "text-red-500"}`}>
                                    {product.quantity > 0 ? `In Stock (${product.quantity})` : "Out of Stock"}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>

    );
};