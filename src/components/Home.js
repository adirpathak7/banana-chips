import React from 'react'
import bananaWaffers from '../images/banana-waffers.webp'
import benefitsOfBananaChips from '../images/benefits-of-banana-chips.jpg'
import masalaBananaChips from '../images/masala-banana-chips.jpg'
import bananaChipsImg from '../images/bananaChipsImg.jpg'
import mainBananaImg from '../images/mainBananaImg.jpg'

export default function Home() {
    return (
        <div>
            <div className="font-sans bg-gray-100">

                {/* Hero Section */}
                <section className="relative h-screen">
                    {/* Image with full cover and absolute positioning */}
                    <img src={mainBananaImg} alt="Banana Chips" className="absolute inset-0 w-full h-full object-cover" />

                    {/* Overlay with text */}
                    <div className="absolute inset-0 bg-black opacity-50"></div>
                    <div className="relative z-10 flex items-center justify-center text-center text-white h-full px-4">
                        <div>
                            <h1 className="text-5xl font-bold mb-4">Welcome to Banana Chips Heaven</h1>
                            <p className="text-xl mb-8">Crunchy, crispy, and delicious – Get the best Banana Chips delivered to your door!</p>
                            <a href="#shop" className="bg-yellow-500 text-black py-3 px-6 rounded-lg font-semibold text-lg hover:bg-yellow-400 transition duration-300">Shop Now</a>
                        </div>
                    </div>
                </section>
                {/* About Section */}
                <section id="about" className="py-16 bg-white">
                    <div className="container mx-auto px-4 text-center">
                        <h2 className="text-3xl font-semibold mb-6">Why Choose Our Banana Chips?</h2>
                        <p className="text-lg mb-8">Our Banana Chips are made from the finest, hand-picked bananas, deep-fried to perfection, and seasoned with just the right amount of spices. Crunchy, healthy, and utterly delicious!</p>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                            <div className="bg-gray-200 p-6 rounded-lg shadow-lg">
                                <img src={bananaWaffers} alt="Fresh Banana Chips" className="w-full h-48 object-cover rounded-md mb-4" />
                                <h3 className="text-xl font-semibold mb-2">Fresh & Natural Ingredients</h3>
                                <p className="text-gray-600">We use only the freshest bananas and natural ingredients to create the most flavorful chips you'll ever taste.</p>
                            </div>
                            <div className="bg-gray-200 p-6 rounded-lg shadow-lg">
                                <img src={benefitsOfBananaChips} alt="Healthy Snack" className="w-full h-48 object-cover rounded-md mb-4" />
                                <h3 className="text-xl font-semibold mb-2">Healthy Snack Option</h3>
                                <p className="text-gray-600">Our chips are low in calories and packed with nutrients, making them a great alternative to other unhealthy snacks.</p>
                            </div>
                            <div className="bg-gray-200 p-6 rounded-lg shadow-lg">
                                <img src={masalaBananaChips} alt="Crunchy Banana Chips" className="w-full h-48 object-cover rounded-md mb-4" />
                                <h3 className="text-xl font-semibold mb-2">Delicious Crunch</h3>
                                <p className="text-gray-600">Every bite of our Banana Chips offers a satisfying crunch that's irresistible, perfect for snacking anytime!</p>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Product Section */}
                <section id="shop" className="py-16 bg-gray-50">
                    <div className="container mx-auto px-4 text-center">
                        <h2 className="text-3xl font-semibold mb-6">Our Best-Selling Banana Chips</h2>
                        <p className="text-lg mb-8">Check out our most popular products and get your favorite banana chips delivered today!</p>
                        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
                            <div className="bg-white p-6 rounded-lg shadow-lg">
                                <img src={bananaChipsImg} alt="Banana Chips Pack 1" className="w-full h-48 object-cover rounded-md mb-4" />
                                <h3 className="text-xl font-semibold mb-2">Crunchy Banana Chips Pack 1</h3>
                                <p className="text-gray-600 mb-4">$5.99</p>
                                <a href="#" className="bg-yellow-400 text-black py-2 px-4 rounded-lg font-semibold text-md hover:bg-yellow-500 transition duration-300">Add to Cart</a>
                            </div>
                            <div className="bg-white p-6 rounded-lg shadow-lg">
                                <img src={bananaChipsImg} alt="Banana Chips Pack 2" className="w-full h-48 object-cover rounded-md mb-4" />
                                <h3 className="text-xl font-semibold mb-2">Crunchy Banana Chips Pack 2</h3>
                                <p className="text-gray-600 mb-4">$7.99</p>
                                <a href="#" className="bg-yellow-400 text-black py-2 px-4 rounded-lg font-semibold text-md hover:bg-yellow-500 transition duration-300">Add to Cart</a>
                            </div>
                            <div className="bg-white p-6 rounded-lg shadow-lg">
                                <img src={bananaChipsImg} alt="Banana Chips Pack 3" className="w-full h-48 object-cover rounded-md mb-4" />
                                <h3 className="text-xl font-semibold mb-2">Crunchy Banana Chips Pack 3</h3>
                                <p className="text-gray-600 mb-4">$9.99</p>
                                <a href="#" className="bg-yellow-400 text-black py-2 px-4 rounded-lg font-semibold text-md hover:bg-yellow-500 transition duration-300">Add to Cart</a>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Testimonials Section */}
                <section id="testimonials" className="py-16 bg-white">
                    <div className="container mx-auto px-4 text-center">
                        <h2 className="text-3xl font-semibold mb-6">What Our Customers Are Saying</h2>
                        <div className="flex flex-wrap justify-center">
                            <div className="w-full sm:w-1/2 md:w-1/3 p-4">
                                <div className="bg-gray-100 p-6 rounded-lg shadow-lg">
                                    <p className="text-lg mb-4">"These are the best banana chips I've ever had! So crunchy and flavorful. I can't stop eating them!"</p>
                                    <p className="text-gray-600 font-semibold">- Adi</p>
                                </div>
                            </div>
                            <div className="w-full sm:w-1/2 md:w-1/3 p-4">
                                <div className="bg-gray-100 p-6 rounded-lg shadow-lg">
                                    <p className="text-lg mb-4">"Love how crispy and fresh these banana chips are. Perfect for a healthy snack anytime!"</p>
                                    <p className="text-gray-600 font-semibold">- Adi</p>
                                </div>
                            </div>
                            <div className="w-full sm:w-1/2 md:w-1/3 p-4">
                                <div className="bg-gray-100 p-6 rounded-lg shadow-lg">
                                    <p className="text-lg mb-4">"I ordered these for a party and everyone loved them! Great quality and flavor."</p>
                                    <p className="text-gray-600 font-semibold">- Adi</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Footer Section */}
                <footer className="bg-gray-800 text-yellow-400 py-6">
                    <div className="container mx-auto px-4 text-center">
                        <p>&copy; 2025 Banana Chips Co. All Rights Reserved.</p>
                    </div>
                </footer>
            </div>
        </div>
    )
}
