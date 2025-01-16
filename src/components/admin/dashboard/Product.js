import React, { useState, useEffect } from 'react';
import axios from 'axios';

export default function Product() {
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);

    // Fetch the products from the API
    useEffect(() => {
        axios
            .get('https://glorious-generosity-production.up.railway.app/banana/app/admin/product/allProducts')
            .then((response) => {
                setProducts(response.data); // Set the products state with the data from the API
                setLoading(false); // Set loading to false after data is fetched
            })
            .catch((error) => {
                console.error('Error fetching products:', error);
                setLoading(false);
            });
    }, []);

    // If loading, show a loading message
    if (loading) {
        return (
            <div className="flex justify-center items-center h-screen">
                <div className="text-lg font-semibold">Loading products...</div>
            </div>
        );
    }

    return (
        <div className="container mx-auto px-4 py-6">
            <h1 className="text-2xl font-bold text-center mb-6">Product List</h1>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                {products.map((product) => (
                    <div
                        key={product.productId}
                        className="bg-white rounded-lg shadow-lg overflow-hidden"
                    >
                        <img
                            src={product.productImage}
                            alt={product.productName}
                            className="w-full h-56 object-cover"
                        />
                        <div className="p-4">
                            <h2 className="text-xl font-semibold truncate">{product.productName}</h2>
                            <p className="text-gray-600 mt-2 text-sm">{product.description}</p>
                            <div className="mt-4 flex justify-between items-center">
                                <span className="text-lg font-semibold text-gray-800">
                                    ₹{product.price}
                                </span>
                                <span className="text-sm text-gray-500">
                                    {product.quantity} available
                                </span>
                            </div>
                            <div className="mt-4">
                                <button
                                    className="w-full py-2 px-4 bg-blue-500 text-white rounded-lg hover:bg-blue-600 focus:outline-none"
                                    onClick={() => alert(`Added ${product.productName} to cart!`)}
                                >
                                    Add to Cart
                                </button>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}
