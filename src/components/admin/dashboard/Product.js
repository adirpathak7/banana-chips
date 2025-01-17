import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Loading from '../../Loading';

export default function Product() {
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        axios
            .get('https://glorious-generosity-production.up.railway.app/banana/app/admin/product/allProducts', {
                withCredentials: true,
            })
            .then((response) => {
                setProducts(response.data);
                setLoading(false);
            })
            .catch((error) => {
                console.error('Error fetching products:', error);
                setLoading(false);
            });
    }, []);

    if (loading) {
        return <Loading />;
    }

    return (
        <div className="flex justify-center py-20 w-[300%] h-auto md:w-[20%] md:h-[50%] ">
            <div className="w-full p-8  sm:w-[500%] px-10">
                <h1 className="text-2xl font-bold text-center mb-6 text-gray-800">All Products</h1>
                <div className="overflow-y-auto max-h-[80vh]">
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                        {products.map((product) => (
                            <div
                                key={product.productId}
                                className="bg-white shadow-3xl rounded-lg overflow-hidden transform  transition duration-300"
                            >
                                <img
                                    src={product.productImage || "https://via.placeholder.com/300"}
                                    alt={product.productName}
                                    className="w-full h-48 object-cover"
                                />
                                <div className="p-4 bg-gray-100">
                                    <h2 className="text-xl font-semibold mb-2 text-gray-800">{product.productName}</h2>
                                    <p className="text-gray-600 mb-2">{product.description}</p>
                                    <p className="text-gray-800 font-bold mt-2">₹{product.price}</p>
                                    <p
                                        className={`mt-2 ${product.quantity > 0 ? 'text-green-500' : 'text-red-500'
                                            }`}
                                    >
                                        {product.quantity > 0
                                            ? `In Stock (${product.quantity})`
                                            : 'Out of Stock'}
                                    </p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}
