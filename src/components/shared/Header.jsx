import React, { useState } from 'react';
import { FaRegUser, FaShoppingCart, FaChevronDown, FaSearch, FaMapMarkerAlt, FaTimes, FaCrosshairs } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const Header = () => {
  const [activeCategory, setActiveCategory] = useState('All');
  const [showLocationPopup, setShowLocationPopup] = useState(false);
  const [selectedLocation, setSelectedLocation] = useState('Select Location');
  const [isCartOpen, setIsCartOpen] = useState(false); // State for cart sidebar

  const categories = [
    { id: 'all', name: 'All', icon: '🛍️' },
    { id: 'electronics', name: 'Electronics', icon: '🎧' },
    { id: 'beauty', name: 'Beauty', icon: '🧴' },
    { id: 'cafe', name: 'Cafe', icon: '🥤' },
    { id: 'fashion', name: 'Fashion', icon: '👕' },
    { id: 'fresh', name: 'Fresh', icon: '🥦' },
    { id: 'toys', name: 'Toys', icon: '🧸' },
    { id: 'home', name: 'Home', icon: '🏠' },
    { id: 'mobiles', name: 'Mobiles', icon: '📱' }
  ];

  const popularLocations = [
    'Connaught Place, New Delhi',
    'MG Road, Bangalore',
    'Bandra West, Mumbai',
    'Jubilee Hills, Hyderabad',
    'Salt Lake City, Kolkata'
  ];

  const recentLocations = [
    'Saket, New Delhi',
    'Indiranagar, Bangalore'
  ];

  const handleLocationSelect = (location) => {
    setSelectedLocation(location);
    setShowLocationPopup(false);
  };

  // Sample cart items
  const cartItems = [
    { id: 1, name: 'Product 1', price: 299, quantity: 2 },
    { id: 2, name: 'Product 2', price: 499, quantity: 1 }
  ];

  const cartTotal = cartItems.reduce((total, item) => total + (item.price * item.quantity), 0);

  return (
    <div className="bg-white sticky top-0 z-50 shadow-sm">
      {/* Cart Sidebar */}
      <div className={`fixed top-0 right-0 h-full w-full sm:w-96 bg-white shadow-xl z-50 transform transition-transform duration-300 ease-in-out ${isCartOpen ? 'translate-x-0' : 'translate-x-full'}`}>
        <div className="flex flex-col h-full">
          {/* Cart Header */}
          <div className="flex items-center justify-between p-4 border-b">
            <h2 className="text-lg font-semibold">Your Cart ({cartItems.length})</h2>
            <button 
              onClick={() => setIsCartOpen(false)}
              className="p-2 rounded-full hover:bg-gray-100"
            >
              <FaTimes className="w-5 h-5 text-gray-600" />
            </button>
          </div>
          
          {/* Cart Items */}
          <div className="flex-1 overflow-y-auto p-4">
            {cartItems.length === 0 ? (
              <div className="flex flex-col items-center justify-center h-full text-gray-500">
                <FaShoppingCart className="w-16 h-16 mb-4 opacity-30" />
                <p className="text-lg">Your cart is empty</p>
                <p className="text-sm mt-2">Add items to get started</p>
              </div>
            ) : (
              <div className="space-y-4">
                {cartItems.map(item => (
                  <div key={item.id} className="flex items-center justify-between p-3 border rounded-lg">
                    <div className="flex items-center">
                      <div className="w-16 h-16 bg-gray-200 rounded-md mr-3"></div>
                      <div>
                        <h3 className="font-medium">{item.name}</h3>
                        <p className="text-sm text-gray-600">Quantity: {item.quantity}</p>
                      </div>
                    </div>
                    <p className="font-semibold">₹{item.price * item.quantity}</p>
                  </div>
                ))}
              </div>
            )}
          </div>
          
          {/* Cart Footer */}
          {cartItems.length > 0 && (
            <div className="border-t p-4">
              <div className="flex justify-between items-center mb-4">
                <span className="font-medium">Subtotal:</span>
                <span className="font-semibold">₹{cartTotal}</span>
              </div>
              <button className="w-full bg-red-600 text-white py-3 rounded-lg font-medium hover:bg-red-700 transition-colors">
                Proceed to Checkout
              </button>
            </div>
          )}
        </div>
      </div>

      {/* Overlay when cart is open */}
      {isCartOpen && (
        <div 
          className="fixed inset-0 bg-black bg-opacity-50 z-40"
          onClick={() => setIsCartOpen(false)}
        ></div>
      )}

      {/* Location Popup Modal */}
      {showLocationPopup && (
        <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-start justify-center pt-16">
          <div className="bg-white w-full max-w-md rounded-t-lg overflow-hidden">
            {/* Header */}
            <div className="flex items-center justify-between p-4 border-b">
              <h2 className="text-lg font-semibold">Choose your location</h2>
              <button 
                onClick={() => setShowLocationPopup(false)}
                className="p-2 rounded-full hover:bg-gray-100"
              >
                <FaTimes className="w-5 h-5 text-gray-600" />
              </button>
            </div>
            
            {/* Search Input */}
            <div className="p-4 border-b">
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <FaSearch className="h-4 w-4 text-gray-400" />
                </div>
                <input
                  type="text"
                  placeholder="Search for area, street name..."
                  className="w-full pl-10 pr-4 py-2.5 bg-gray-100 border-0 rounded-lg focus:ring-2 focus:ring-red-500 focus:bg-white outline-none text-sm transition-all"
                />
              </div>
            </div>
            
            {/* Current Location */}
            <div className="p-4 border-b">
              <button className="flex items-center text-red-600 font-medium">
                <FaCrosshairs className="w-4 h-4 mr-2" />
                Use current location
              </button>
            </div>
            
            {/* Recent Locations */}
            {recentLocations.length > 0 && (
              <div className="p-4 border-b">
                <h3 className="text-sm font-medium text-gray-500 mb-2">Recent Locations</h3>
                {recentLocations.map((location, index) => (
                  <button
                    key={index}
                    onClick={() => handleLocationSelect(location)}
                    className="block w-full text-left p-2 hover:bg-gray-50 rounded-md"
                  >
                    {location}
                  </button>
                ))}
              </div>
            )}
            
            {/* Popular Locations */}
            <div className="p-4">
              <h3 className="text-sm font-medium text-gray-500 mb-2">Popular Locations</h3>
              {popularLocations.map((location, index) => (
                <button
                  key={index}
                  onClick={() => handleLocationSelect(location)}
                  className="block w-full text-left p-2 hover:bg-gray-50 rounded-md"
                >
                  {location}
                </button>
              ))}
            </div>
          </div>
        </div>
      )}

      {/* Top Banner - Hidden on mobile like in the image */}
      <div className="hidden sm:block bg-red-700 text-white text-center py-1.5 px-2">
        <p className="text-xs sm:text-sm">
          Get Cigarettes at <span className="font-bold">₹0</span> Convenience Fee
          <span className="hidden sm:inline"> • Get smoking accessories, fresheners & more in minutes!</span>
        </p>
      </div>

      {/* Main Header */}
      <header className="bg-white border-b border-gray-200">
        <div className="px-3 sm:px-4 lg:px-6">
          <div className="flex items-center justify-between h-14 sm:h-16">
            {/* Left Section - Logo */}
            <div className="flex items-center space-x-2 sm:space-x-6">
              <div className="flex items-center">
                <span className="text-xl sm:text-2xl font-bold text-red-600 tracking-tight">minutos</span>
              </div>
              
              {/* Express Delivery Badge - Desktop only */}
              <div className="hidden sm:block">
                <span className="bg-red-100 text-red-700 px-2 sm:px-3 py-1 sm:py-1.5 rounded-full text-xs font-semibold uppercase tracking-wide">
                  EXPRESS DELIVERY
                </span>
              </div>
            </div>

            {/* Center Section - Location & Search (Desktop) */}
            <div className="hidden md:flex items-center space-x-4 flex-1 max-w-2xl mx-4">
              {/* Location Selector */}
              <div className="min-w-fit">
                <button 
                  className="flex items-center space-x-2 text-gray-700 px-3 py-2 rounded-md hover:bg-gray-50 transition-colors"
                  onClick={() => setShowLocationPopup(true)}
                >
                  <FaMapMarkerAlt className="w-4 h-4 text-red-600" />
                  <span className="text-sm font-medium whitespace-nowrap">{selectedLocation}</span>
                  <FaChevronDown className="w-3 h-3 text-gray-500" />
                </button>
              </div>

              {/* Search Bar */}
              <div className="flex-1">
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                    <FaSearch className="h-4 w-4 text-gray-400" />
                  </div>
                  <input
                    type="text"
                    placeholder='Search for "cheese slices"'
                    className="w-full pl-12 pr-4 py-2.5 bg-gray-100 border-0 rounded-lg focus:ring-2 focus:ring-red-500 focus:bg-white outline-none text-sm transition-all"
                  />
                </div>
              </div>
            </div>

            {/* Right Section */}
            <div className="flex items-center space-x-1 sm:space-x-4">
              {/* Location on Mobile */}
              <button 
                className="md:hidden flex items-center text-gray-700 px-2 py-1 text-sm"
                onClick={() => setShowLocationPopup(true)}
              >
                <span className="font-medium">{selectedLocation.length > 15 ? `${selectedLocation.substring(0, 15)}...` : selectedLocation}</span>
                <FaChevronDown className="w-3 h-3 text-gray-500 ml-1" />
              </button>

              {/* COD Badge */}
              <div className="hidden lg:block">
                <span className="bg-red-100 text-red-700 px-2.5 py-1 rounded text-xs font-semibold">
                  COD
                </span>
              </div>

              {/* Cart Icon - Desktop */}
              <button 
                className="hidden md:flex items-center p-2 text-gray-700 transition-colors hover:text-red-600 relative"
                onClick={() => setIsCartOpen(true)}
              >
                <FaShoppingCart className="w-5 h-5" />
                {cartItems.length > 0 && (
                  <span className="absolute -top-1 -right-1 bg-red-600 text-white rounded-full w-4 h-4 flex items-center justify-center text-xs">
                    {cartItems.length}
                  </span>
                )}
              </button>

              {/* Profile */}
              <button className="p-2 text-gray-700 transition-colors hover:text-red-600">
                <Link to="/profile"><FaRegUser className="w-5 h-5" /></Link>
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Search Bar */}
        <div className="md:hidden px-3 sm:px-4 pb-3">
          <div className="relative">
            <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
              <FaSearch className="h-4 w-4 text-gray-400" />
            </div>
            <input
              type="text"
              placeholder='Search for "cheese slices"'
              className="w-full pl-12 pr-4 py-2.5 bg-gray-100 border-0 rounded-lg focus:ring-2 focus:ring-red-500 focus:bg-white outline-none text-sm transition-all"
            />
          </div>
        </div>
      </header>

      {/* Category Navigation */}
      <nav className="bg-white border-b border-gray-100">
        <div className="px-3 sm:px-4 lg:px-6">
          {/* Desktop Categories */}
          <div className="hidden md:flex justify-center items-center gap-6 h-12 overflow-x-auto scrollbar-hide">
            {categories.map((category) => (
              <button
                key={category.id}
                className={`flex items-center gap-2 whitespace-nowrap pb-2 transition-colors ${
                  activeCategory === category.name 
                    ? 'text-red-600 font-medium border-b-2 border-red-600' 
                    : 'text-gray-600 hover:text-red-600'
                }`}
                onClick={() => setActiveCategory(category.name)}
              >
                <div
                  className={`w-5 h-5 rounded flex items-center justify-center ${
                    activeCategory === category.name ? 'bg-red-100' : 'bg-gray-100'
                  }`}
                >
                  <span className="text-xs">{category.icon}</span>
                </div>
                <span className="text-sm font-medium">{category.name}</span>
              </button>
            ))}
          </div>

          {/* Mobile Categories - Horizontal Scroll with Icons Only */}
          <div className="md:hidden flex items-center gap-4 h-16 overflow-x-auto scrollbar-hide px-1">
            {categories.map((category) => (
              <button
                key={category.id}
                className={`flex flex-col items-center gap-1 min-w-fit px-2 py-1 transition-colors ${
                  activeCategory === category.name 
                    ? 'text-red-600' 
                    : 'text-gray-600'
                }`}
                onClick={() => setActiveCategory(category.name)}
              >
                <div className="text-2xl">
                  {category.icon}
                </div>
                <span className="text-xs font-medium whitespace-nowrap">{category.name}</span>
              </button>
            ))}
          </div>
        </div>
      </nav>

      {/* Bottom Navigation - Mobile Only */}
      <div className="md:hidden fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 z-40">
        <div className="flex items-center justify-around h-16">
          <button className="flex flex-col items-center justify-center text-red-600 px-3 py-2">
            <div className="text-xl mb-1">M</div>
            <span className="text-xs font-medium">Minutos</span>
          </button>
          
          <button className="flex flex-col items-center justify-center text-gray-600 px-3 py-2">
            <div className="text-lg mb-1">☰</div>
            <span className="text-xs font-medium">Categories</span>
          </button>
          
          <button className="flex flex-col items-center justify-center text-gray-600 px-3 py-2">
            <div className="text-lg mb-1">%</div>
            <span className="text-xs font-medium">Deal Store</span>
          </button>
          
          <button 
            className="flex flex-col items-center justify-center text-gray-600 px-3 py-2 relative"
            onClick={() => setIsCartOpen(true)}
          >
            <div className="text-lg mb-1">🛒</div>
            <span className="text-xs font-medium">Cart</span>
            {cartItems.length > 0 && (
              <span className="absolute -top-1 -right-1 bg-red-600 text-white rounded-full w-4 h-4 flex items-center justify-center text-xs">
                {cartItems.length}
              </span>
            )}
          </button>
        </div>
      </div>
    </div>
  );
};

export default Header;