import React, { useState } from 'react';
import { Star, Menu, X } from 'lucide-react';
import Header from './Header';
import Footer from './Footer';

const FruitsVegetablesComponent = () => {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const categories = [
    { id: 'All', name: 'All', icon: '🥗' },
    { id: 'fresh-vegetables', name: 'Fresh Vegetables', icon: '🥕' },
    { id: 'fresh-fruits', name: 'Fresh Fruits', icon: '🍎' },
    { id: 'exotics-premium', name: 'Exotics & Premium', icon: '🥭' },
    { id: 'flowers-leaves', name: 'Flowers & Leaves', icon: '🌸' },
    { id: 'leafy-herbs', name: 'Leafy, Herbs & Seasonings', icon: '🌿' },
    { id: 'organics-hydroponics', name: 'Organics & Hydroponics', icon: '🌱' },
    { id: 'plants-gardening', name: 'Plants & Gardening', icon: '🪴' },
    { id: 'cuts-sprouts', name: 'Cuts & Sprouts', icon: '🌱' },
    { id: 'frozen-veggies', name: 'Frozen Veggies & Pulp', icon: '🧊' }
  ];

  const products = [
  {
    id: 1,
    name: 'Coriander leaves',
    price: 7,
    originalPrice: 18,
    savings: 9,
    weight: '1 pack (100 g)',
    rating: 4.5,
    reviews: '686.4k',
    image: '/api/placeholder/200/200',
    category: 'leafy-herbs',
    bgColor: 'from-green-100 to-green-200'
  },
  {
    id: 2,
    name: 'Fresh Onion',
    price: 22,
    originalPrice: 45,
    savings: 23,
    weight: '1 Pack / 900-1000 gm',
    rating: 4.5,
    reviews: '81.7k',
    image: '/api/placeholder/200/200',
    category: 'fresh-vegetables',
    bgColor: 'from-purple-100 to-pink-200'
  },
  {
    id: 3,
    name: 'Banana Robusta',
    price: 28,
    originalPrice: 44,
    savings: 16,
    weight: '6 pcs',
    rating: 4.2,
    reviews: '158.2k',
    image: '/api/placeholder/200/200',
    category: 'fresh-fruits',
    bgColor: 'from-yellow-100 to-yellow-200'
  },
  {
    id: 4,
    name: 'Mushroom Button',
    price: 58,
    originalPrice: 77,
    savings: 19,
    weight: '200 g',
    rating: 4.4,
    reviews: '45.5k',
    image: '/api/placeholder/200/200',
    category: 'fresh-vegetables',
    bgColor: 'from-gray-100 to-gray-200'
  },
  {
    id: 5,
    name: 'Banana Elaichi / Yelakki',
    price: 58,
    originalPrice: 94,
    savings: 36,
    weight: '500 g',
    rating: 4.4,
    reviews: '122.9k',
    image: '/api/placeholder/200/200',
    category: 'fresh-fruits',
    bgColor: 'from-yellow-100 to-orange-200'
  },
  {
    id: 6,
    name: 'Tomato Local',
    price: 16,
    originalPrice: 29,
    savings: 13,
    weight: '500 g',
    rating: 4.3,
    reviews: '236.2k',
    image: '/api/placeholder/200/200',
    category: 'fresh-vegetables',
    bgColor: 'from-red-100 to-red-200'
  },
  {
    id: 7,
    name: 'Jill Green',
    price: 15,
    originalPrice: 28,
    savings: 13,
    weight: '100 g',
    rating: 4.2,
    reviews: '45.6k',
    image: '/api/placeholder/200/200',
    category: 'leafy-herbs',
    bgColor: 'from-green-100 to-emerald-200'
  },
  {
    id: 8,
    name: 'Apple Shimla',
    price: 217,
    originalPrice: 285,
    savings: 68,
    weight: '4 Pc (500 - 640 g)',
    rating: 4.3,
    reviews: '67.8k',
    image: '/api/placeholder/200/200',
    category: 'fresh-fruits',
    bgColor: 'from-red-100 to-pink-200'
  },
  {
    id: 9,
    name: 'Fresh Potato',
    price: 23,
    originalPrice: 47,
    savings: 24,
    weight: '1 pack (900 g - 1 kg)',
    rating: 4.1,
    reviews: '89.3k',
    image: '/api/placeholder/200/200',
    category: 'fresh-vegetables',
    bgColor: 'from-amber-100 to-yellow-200'
  },
  {
    id: 10,
    name: 'Mosambi',
    price: 22,
    originalPrice: 37,
    savings: 15,
    weight: '500 g',
    rating: 4.0,
    reviews: '23.4k',
    image: '/api/placeholder/200/200',
    category: 'fresh-fruits',
    bgColor: 'from-lime-100 to-green-200'
  },
  {
    id: 11,
    name: 'Residue Free Chilli Green',
    price: 20,
    originalPrice: 28,
    savings: 8,
    weight: '100 g',
    rating: 4.2,
    reviews: '45.2k',
    image: '/api/placeholder/200/200',
    category: 'organics-hydroponics',
    bgColor: 'from-green-100 to-lime-200'
  },
  {
    id: 12,
    name: 'Curry Leaves - Cleaned',
    price: 7,
    originalPrice: 13,
    savings: 6,
    weight: '50 g',
    rating: 4.3,
    reviews: '78.9k',
    image: '/api/placeholder/200/200',
    category: 'leafy-herbs',
    bgColor: 'from-emerald-100 to-teal-200'
  },
  {
    id: 13,
    name: 'Cauliflower',
    price: 35,
    originalPrice: 55,
    savings: 20,
    weight: '1 pc (400-600 g)',
    rating: 4.1,
    reviews: '98.7k',
    image: '/api/placeholder/200/200',
    category: 'fresh-vegetables',
    bgColor: 'from-purple-100 to-gray-200'
  },
  {
    id: 14,
    name: 'Strawberry Fresh',
    price: 145,
    originalPrice: 199,
    savings: 54,
    weight: '200 g',
    rating: 4.6,
    reviews: '12.5k',
    image: '/api/placeholder/200/200',
    category: 'fresh-fruits',
    bgColor: 'from-pink-100 to-red-200'
  },
  {
    id: 15,
    name: 'Broccoli',
    price: 65,
    originalPrice: 99,
    savings: 34,
    weight: '250 g',
    rating: 4.5,
    reviews: '33.2k',
    image: '/api/placeholder/200/200',
    category: 'fresh-vegetables',
    bgColor: 'from-green-100 to-lime-200'
  },
  {
    id: 16,
    name: 'Papaya',
    price: 55,
    originalPrice: 88,
    savings: 33,
    weight: '1 pc (800 g - 1.2 kg)',
    rating: 4.2,
    reviews: '45.9k',
    image: '/api/placeholder/200/200',
    category: 'fresh-fruits',
    bgColor: 'from-orange-100 to-yellow-200'
  },
  {
    id: 17,
    name: 'Beetroot',
    price: 26,
    originalPrice: 42,
    savings: 16,
    weight: '500 g',
    rating: 4.1,
    reviews: '56.3k',
    image: '/api/placeholder/200/200',
    category: 'fresh-vegetables',
    bgColor: 'from-red-100 to-purple-200'
  },
  {
    id: 18,
    name: 'Pineapple',
    price: 75,
    originalPrice: 110,
    savings: 35,
    weight: '1 pc (700 g - 1.5 kg)',
    rating: 4.3,
    reviews: '25.7k',
    image: '/api/placeholder/200/200',
    category: 'fresh-fruits',
    bgColor: 'from-yellow-100 to-orange-200'
  },
  {
    id: 19,
    name: 'Spinach Bunch',
    price: 12,
    originalPrice: 20,
    savings: 8,
    weight: '250 g',
    rating: 4.4,
    reviews: '77.1k',
    image: '/api/placeholder/200/200',
    category: 'leafy-herbs',
    bgColor: 'from-green-100 to-teal-200'
  },
  {
    id: 20,
    name: 'Cabbage',
    price: 28,
    originalPrice: 46,
    savings: 18,
    weight: '1 pc (500-800 g)',
    rating: 4.2,
    reviews: '61.8k',
    image: '/api/placeholder/200/200',
    category: 'fresh-vegetables',
    bgColor: 'from-green-100 to-emerald-200'
  },
  {
    id: 21,
    name: 'Kiwi',
    price: 120,
    originalPrice: 160,
    savings: 40,
    weight: '3 pcs (200 g)',
    rating: 4.5,
    reviews: '32.4k',
    image: '/api/placeholder/200/200',
    category: 'fresh-fruits',
    bgColor: 'from-green-100 to-lime-200'
  },
  {
    id: 22,
    name: 'Brinjal Purple',
    price: 29,
    originalPrice: 47,
    savings: 18,
    weight: '500 g',
    rating: 4.1,
    reviews: '44.5k',
    image: '/api/placeholder/200/200',
    category: 'fresh-vegetables',
    bgColor: 'from-purple-100 to-indigo-200'
  },
  {
    id: 23,
    name: 'Sweet Lime Imported',
    price: 85,
    originalPrice: 120,
    savings: 35,
    weight: '1 kg',
    rating: 4.4,
    reviews: '22.6k',
    image: '/api/placeholder/200/200',
    category: 'fresh-fruits',
    bgColor: 'from-yellow-100 to-lime-200'
  },
  {
    id: 24,
    name: 'Radish White',
    price: 18,
    originalPrice: 30,
    savings: 12,
    weight: '500 g',
    rating: 4.2,
    reviews: '39.4k',
    image: '/api/placeholder/200/200',
    category: 'fresh-vegetables',
    bgColor: 'from-gray-100 to-gray-200'
  },
  {
    id: 25,
    name: 'Blueberries',
    price: 199,
    originalPrice: 280,
    savings: 81,
    weight: '125 g',
    rating: 4.7,
    reviews: '9.8k',
    image: '/api/placeholder/200/200',
    category: 'fresh-fruits',
    bgColor: 'from-indigo-100 to-purple-200'
  },
  {
    id: 26,
    name: 'Drumstick',
    price: 40,
    originalPrice: 65,
    savings: 25,
    weight: '250 g',
    rating: 4.3,
    reviews: '26.2k',
    image: '/api/placeholder/200/200',
    category: 'fresh-vegetables',
    bgColor: 'from-green-100 to-emerald-200'
  },
  {
    id: 27,
    name: 'Lemon',
    price: 15,
    originalPrice: 25,
    savings: 10,
    weight: '250 g (4-5 pcs)',
    rating: 4.4,
    reviews: '53.8k',
    image: '/api/placeholder/200/200',
    category: 'fresh-fruits',
    bgColor: 'from-yellow-100 to-lime-200'
  },
  {
    id: 28,
    name: 'Lady Finger',
    price: 28,
    originalPrice: 47,
    savings: 19,
    weight: '500 g',
    rating: 4.2,
    reviews: '41.6k',
    image: '/api/placeholder/200/200',
    category: 'fresh-vegetables',
    bgColor: 'from-green-100 to-lime-200'
  },
  {
    id: 29,
    name: 'Mango Alphonso',
    price: 250,
    originalPrice: 340,
    savings: 90,
    weight: '1 kg',
    rating: 4.6,
    reviews: '19.2k',
    image: '/api/placeholder/200/200',
    category: 'fresh-fruits',
    bgColor: 'from-yellow-100 to-orange-200'
  },
  {
    id: 30,
    name: 'Mint Leaves',
    price: 10,
    originalPrice: 18,
    savings: 8,
    weight: '100 g',
    rating: 4.5,
    reviews: '71.3k',
    image: '/api/placeholder/200/200',
    category: 'leafy-herbs',
    bgColor: 'from-green-100 to-teal-200'
  }
];


  const filteredProducts = selectedCategory === 'All' 
    ? products 
    : products.filter(product => product.category === selectedCategory);

  const ProductCard = ({ product }) => (
    <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-3 hover:shadow-lg transition-all duration-200 hover:-translate-y-1">
      <div className="relative mb-3">
        <div className={`w-full h-32 bg-gradient-to-br ${product.bgColor} rounded-xl flex items-center justify-center text-4xl`}>
          {product.category === 'fresh-fruits' ? '🍎' : 
           product.category === 'leafy-herbs' ? '🌿' : 
           product.category === 'organics-hydroponics' ? '🌱' : '🥕'}
        </div>
      </div>
      
      <div className="space-y-2">
        <div className="flex items-start justify-between">
          <span className="font-bold text-lg text-gray-900">₹{product.price}</span>
          <button className="bg-white border-2 border-pink-500 text-pink-500 px-3 py-1 rounded-md text-xs font-bold hover:bg-pink-50 transition-colors">
            ADD
          </button>
        </div>
        
        <div className="flex items-center gap-1 text-xs text-gray-500">
          <span className="line-through">₹{product.originalPrice}</span>
          <span className="text-green-600 font-bold">SAVE ₹{product.savings}</span>
        </div>
        
        <div className="text-xs text-gray-600 mb-1">{product.weight}</div>
        <h3 className="font-medium text-gray-800 text-sm leading-tight line-clamp-2">{product.name}</h3>
        
        <div className="flex items-center gap-1">
          <Star className="w-3 h-3 fill-yellow-400 text-yellow-400" />
          <span className="text-xs font-medium text-gray-700">{product.rating}</span>
          <span className="text-xs text-gray-500">({product.reviews})</span>
        </div>
      </div>
    </div>
  );

  return (
    <div className="min-h-screen bg-gray-50">
        <Header/>
      <div className="max-w-7xl mx-auto px-4 py-6">
        <div className="flex gap-6">
          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsSidebarOpen(!isSidebarOpen)}
            className="lg:hidden fixed top-20 left-4 z-50 bg-white p-2 rounded-full shadow-lg border"
          >
            <Menu className="w-5 h-5" />
          </button>

          {/* Sidebar */}
          <div className={`${isSidebarOpen ? 'fixed inset-0 z-40 lg:relative lg:inset-auto' : 'hidden'} lg:block lg:w-80`}>
            {isSidebarOpen && (
              <div className="fixed inset-0 bg-black bg-opacity-50 lg:hidden" onClick={() => setIsSidebarOpen(false)} />
            )}
            
            <div className={`${isSidebarOpen ? 'fixed left-0 top-0 h-full w-80 transform transition-transform' : ''} bg-white lg:bg-transparent lg:shadow-none shadow-xl z-50 lg:z-auto overflow-y-auto`}>
              {/* Mobile sidebar header */}
              <div className="lg:hidden flex items-center justify-between p-4 border-b">
                <h2 className="text-lg font-semibold">Categories</h2>
                <button
                  onClick={() => setIsSidebarOpen(false)}
                  className="p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              <div className="p-4 lg:p-0 space-y-2">
                {categories.map((category) => (
                  <button
                    key={category.id}
                    onClick={() => {
                      setSelectedCategory(category.id);
                      setIsSidebarOpen(false);
                    }}
                    className={`w-full flex items-center gap-3 px-4 py-3 rounded-xl text-left transition-all duration-200 ${
                      selectedCategory === category.id
                        ? 'bg-purple-50 text-purple-700 font-semibold border-2 border-purple-200 shadow-sm'
                        : 'text-gray-700 hover:bg-gray-50 border-2 border-transparent'
                    }`}
                  >
                    <span className="text-xl">{category.icon}</span>
                    <span className="text-sm">{category.name}</span>
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Main Content */}
          <div className="flex-1">
            {/* Breadcrumb */}
            <div className="flex items-center gap-2 text-sm text-gray-500 mb-4">
              <span>Home</span>
              <span>›</span>
              <span>Fruits Vegetables</span>
              <span>›</span>
              <span className="text-gray-900 font-medium">All</span>
            </div>

            <h1 className="text-3xl font-bold text-gray-900 mb-6">Fresh Fruits and Vegetables</h1>

            {/* Hero Banner */}
            <div className="bg-gradient-to-r from-blue-400 via-blue-500 to-cyan-400 rounded-2xl p-6 mb-8 text-white relative overflow-hidden">
              <div className="relative z-10 flex items-center justify-between">
                <div>
                  <p className="text-sm opacity-90 mb-1">Build your own</p>
                  <h2 className="text-2xl md:text-3xl font-bold mb-4">
                    Home garden<br />bloom
                  </h2>
                  <button className="bg-white text-blue-600 px-6 py-2 rounded-lg font-bold text-sm hover:bg-blue-50 transition-colors shadow-lg">
                    ORDER NOW
                  </button>
                </div>
                <div className="hidden sm:flex items-end gap-2 opacity-30">
                  <div className="w-12 h-16 bg-white rounded-xl flex items-end justify-center pb-2 text-lg">🌱</div>
                  <div className="w-12 h-20 bg-white rounded-xl flex items-end justify-center pb-2 text-lg">🌿</div>
                  <div className="w-12 h-16 bg-white rounded-xl flex items-end justify-center pb-2 text-lg">🪴</div>
                </div>
              </div>
              {/* Decorative elements */}
              <div className="absolute -top-10 -right-10 w-40 h-40 bg-white opacity-10 rounded-full"></div>
              <div className="absolute -bottom-5 -left-5 w-20 h-20 bg-white opacity-10 rounded-full"></div>
            </div>

            {/* Products Grid */}
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-6 gap-4">
              {filteredProducts.map((product) => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>

            {/* Show more button */}
            <div className="text-center mt-8">
              <button className="bg-white border-2 border-red-500 text-red-500 px-8 py-3 rounded-xl font-semibold hover:bg-red-50 transition-colors shadow-sm">
                Load More Products
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile overlay when sidebar is open */}
      {isSidebarOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-30 lg:hidden"
          onClick={() => setIsSidebarOpen(false)}
        />
      )}
      <Footer/>
    </div>
    
  );
};

export default FruitsVegetablesComponent;