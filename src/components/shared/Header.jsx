import React, { useState } from 'react';
import { FaRegUser, FaShoppingCart, FaChevronDown, FaSearch, FaMapMarkerAlt } from 'react-icons/fa';

const Header = () => {
  const [activeCategory, setActiveCategory] = useState('All');

  const categories = [
    { id: 'all', name: 'All', icon: '≡' },
    { id: 'cafe', name: 'Cafe', icon: '☕' },
    { id: 'home', name: 'Home', icon: '🏠' },
    { id: 'toys', name: 'Toys', icon: '🧸' },
    { id: 'fresh', name: 'Fresh', icon: '🥦' },
    { id: 'electronics', name: 'Electronics', icon: '📱' },
    { id: 'mobiles', name: 'Mobiles', icon: '📱' },
    { id: 'beauty', name: 'Beauty', icon: '💄' },
    { id: 'fashion', name: 'Fashion', icon: '👕' }
  ];

  return (
    <div className="bg-white sticky top-0 z-50 shadow-sm">
      {/* Top Banner */}
      <div className="bg-red-700 text-white text-center py-1.5 text-xs">
        Get Cigarettes at <span className="font-bold">₹0</span> Convenience Fee • Get smoking accessories, fresheners & more in minutes!
      </div>

      {/* Main Header */}
      <header className="bg-white border-b border-gray-200">
        <div className="px-4 lg:px-6">
          <div className="flex items-center justify-between h-16">
            {/* Left Section - Logo */}
            <div className="flex items-center space-x-6">
              <div className="flex items-center">
                <span className="text-2xl font-bold text-red-600 tracking-tight">minutos</span>
              </div>
              
              {/* Super Saver Badge */}
              <div className="hidden sm:block">
                <span className="bg-red-100 text-red-700 px-3 py-1.5 rounded-full text-xs font-semibold uppercase tracking-wide">
                  EXPRESS DELIVERY
                </span>
              </div>
            </div>

            {/* Center Section - Location & Search */}
            <div className="flex items-center space-x-4 flex-1 max-w-2xl mx-4">
              {/* Location Selector */}
              <div className="min-w-fit">
                <button className="flex items-center space-x-2 text-gray-700 px-3 py-2 rounded-md transition-colors">
                  <FaMapMarkerAlt className="w-4 h-4 text-red-600" />
                  <span className="text-sm font-medium whitespace-nowrap">Select Location</span>
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
                    placeholder='Search for "apple juice"'
                    className="w-full pl-12 pr-4 py-2.5 bg-gray-100 border-0 rounded-lg focus:ring-2 focus:ring-red-500 focus:bg-white outline-none text-sm transition-all"
                  />
                </div>
              </div>
            </div>

            {/* Right Section */}
            <div className="flex items-center space-x-4">
              {/* COD Badge */}
              <div className="hidden lg:block">
                <span className="bg-red-100 text-red-700 px-2.5 py-1 rounded text-xs font-semibold">
                  COD
                </span>
              </div>

              {/* Profile */}
              <button className="flex flex-col items-center text-gray-700 px-2 transition-colors hover:text-red-600">
                <FaRegUser className="w-5 h-5" />
                <span className="text-xs font-medium mt-1">Profile</span>
              </button>

              {/* Cart */}
              <button className="flex flex-col items-center text-gray-700 px-2 transition-colors hover:text-red-600">
                <div className="relative">
                  <FaShoppingCart className="w-5 h-5" />
                  <span className="absolute -top-2 -right-2 bg-red-600 text-white rounded-full w-4 h-4 flex items-center justify-center text-xs">0</span>
                </div>
                <span className="text-xs font-medium mt-1">Cart</span>
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Category Navigation */}
      <nav className="bg-white border-b border-gray-100">
        <div className="px-4 lg:px-6">
          <div className="flex items-center space-x-6 h-12 overflow-x-auto scrollbar-hide">
            {categories.map((category) => (
              <button
                key={category.id}
                className={`flex items-center space-x-2 whitespace-nowrap pb-2 transition-colors ${
                  activeCategory === category.name 
                    ? 'text-red-600 font-medium border-b-2 border-red-600' 
                    : 'text-gray-600 hover:text-red-600'
                }`}
                onClick={() => setActiveCategory(category.name)}
              >
                <div className={`w-5 h-5 rounded flex items-center justify-center ${
                  activeCategory === category.name ? 'bg-red-100' : 'bg-gray-100'
                }`}>
                  <span className="text-xs">{category.icon}</span>
                </div>
                <span className="text-sm font-medium">{category.name}</span>
              </button>
            ))}
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Header;