import { Link } from 'react-router-dom';
import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaLinkedinIn,
} from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-white border-t border-gray-200">
      {/* Popular Searches Section */}
      <div className="px-6 py-8 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <h3 className="text-lg font-bold mb-4 text-red-700">Popular Searches</h3>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div>
              <h4 className="font-semibold mb-2 text-red-600">Products:</h4>
              <p className="text-sm text-gray-600">
                Avocado | Strawberry | Pomegranate | Beetroot | Ash guard | Bottle guard | Lady finger | Potatoes | Lemon | Dabbin | Fenugreek seeds | Blueberry | Pizza | Dragon fruit | Madricorn | Lettuce
              </p>
            </div>
            
            <div>
              <h4 className="font-semibold mb-2 text-red-600">Brands:</h4>
              <p className="text-sm text-gray-600">
                Yukui | My Muse | Ambrosia Alta | Too Varma | Layzi | Fique Olive Oil | Nandan Villa | Awai | Mother Dairy New Me | Fortune Oil | Superyou | Dacre Condoms | Ferris and Pixels
              </p>
            </div>
            
            <div>
              <h4 className="font-semibold mb-2 text-red-600">Categories:</h4>
              <p className="text-sm text-gray-600">
                Grocery | Capsules | Chips | Cork | Hookah Brewer | Plain shop near me | Eggs price | Cheese slice | Fresh fruits | Fresh vegetables | Refined oil | Butter price | Paneer price
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Categories Section */}
      <div className="px-6 py-8">
        <div className="max-w-6xl mx-auto">
          <h3 className="text-lg font-bold mb-6 text-red-700">Categories</h3>
          
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
            <div>
              <h4 className="font-semibold mb-2 text-sm text-red-600">Fruits & Vegetables</h4>
              <h4 className="font-semibold mb-2 text-sm text-red-600">Atta, Rice, Oil & Dal</h4>
              <h4 className="font-semibold mb-2 text-sm text-red-600">Masala & Dry Fruits</h4>
              <h4 className="font-semibold mb-2 text-sm text-red-600">Sweet Cravings</h4>
              <h4 className="font-semibold mb-2 text-sm text-red-600">Frozen Food & Ice Cream</h4>
            </div>
            
            <div>
              <h4 className="font-semibold mb-2 text-sm text-red-600">Baby Food</h4>
              <h4 className="font-semibold mb-2 text-sm text-red-600">Dairy, Bread & Eggs</h4>
              <h4 className="font-semibold mb-2 text-sm text-red-600">Cold Drinks & Juices</h4>
              <h4 className="font-semibold mb-2 text-sm text-red-600">Munchies</h4>
              <h4 className="font-semibold mb-2 text-sm text-red-600">Meats, Fish & Eggs</h4>
            </div>
            
            <div>
              <h4 className="font-semibold mb-2 text-sm text-red-600">Breakfast & Sauces</h4>
              <h4 className="font-semibold mb-2 text-sm text-red-600">Tea, Coffee & More</h4>
              <h4 className="font-semibold mb-2 text-sm text-red-600">Biscuits</h4>
              <h4 className="font-semibold mb-2 text-sm text-red-600">Makeup & Beauty</h4>
              <h4 className="font-semibold mb-2 text-sm text-red-600">Bath & Body</h4>
            </div>
            
            <div>
              <h4 className="font-semibold mb-2 text-sm text-red-600">Cleaning Essentials</h4>
              <h4 className="font-semibold mb-2 text-sm text-red-600">Home Needs</h4>
              <h4 className="font-semibold mb-2 text-sm text-red-600">Pharmaceuticals & Accessories</h4>
              <h4 className="font-semibold mb-2 text-sm text-red-600">Hygiene & Grooming</h4>
              <h4 className="font-semibold mb-2 text-sm text-red-600">Health & Baby Care</h4>
            </div>
            
            <div>
              <h4 className="font-semibold mb-2 text-sm text-red-600">Humayama Brands</h4>
              <h4 className="font-semibold mb-2 text-sm text-red-600">Paar Corner</h4>
            </div>
          </div>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="bg-gray-100 py-8">
        <div className="max-w-6xl mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6">
            <div className="flex items-center">
              <span className="text-2xl font-bold text-red-600 tracking-tight">minutos</span>
              <span className="ml-4 text-sm text-gray-600">© Minutos Marketplace Private Limited</span>
            </div>
            
            <div className="flex flex-wrap gap-4">
              <Link to="/" className="text-sm text-gray-600 hover:text-red-600">Home</Link>
              <Link to="/delivery-areas" className="text-sm text-gray-600 hover:text-red-600">Delivery Areas</Link>
              <Link to="/careers" className="text-sm text-gray-600 hover:text-red-600">Careers</Link>
              <Link to="/support" className="text-sm text-gray-600 hover:text-red-600">Customer Support</Link>
              <Link to="/press" className="text-sm text-gray-600 hover:text-red-600">Press</Link>
              <Link to="/blog" className="text-sm text-gray-600 hover:text-red-600">Blog</Link>
            </div>
          </div>
          
          <div className="mt-6 pt-6 border-t border-gray-200">
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6">
              <div className="flex flex-wrap gap-4">
                <Link to="/privacy" className="text-sm text-gray-600 hover:text-red-600">Privacy Policy</Link>
                <Link to="/terms" className="text-sm text-gray-600 hover:text-red-600">Terms of Use</Link>
                <Link to="/disclosure" className="text-sm text-gray-600 hover:text-red-600">Responsible Disclosure Policy</Link>
                <Link to="/sell" className="text-sm text-gray-600 hover:text-red-600">Sell on Minutos</Link>
                <Link to="/deliver" className="text-sm text-gray-600 hover:text-red-600">Deliver with Minutos</Link>
                <Link to="/franchise" className="text-sm text-gray-600 hover:text-red-600">Franchise with Minutos</Link>
              </div>
              
              <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4">
                <h4 className="font-bold text-sm text-red-700">Download App</h4>
                <div className="flex gap-2">
                  <button className="h-10 w-32 bg-black text-white rounded flex items-center justify-center text-xs hover:bg-red-600 transition-colors">
                    GET IT ON<br />GOOGLE PLAY
                  </button>
                  <button className="h-10 w-32 bg-black text-white rounded flex items-center justify-center text-xs hover:bg-red-600 transition-colors">
                    DOWNLOAD ON THE<br />APP STORE
                  </button>
                </div>
              </div>
            </div>
          </div>
          
          <div className="mt-6 flex justify-center md:justify-start">
            <div className="flex gap-4">
              <div className="cursor-pointer w-8 h-8 rounded-full bg-red-600 text-white flex items-center justify-center hover:bg-red-700 transition-colors">
                <FaFacebookF size={14} />
              </div>
              <div className="cursor-pointer w-8 h-8 rounded-full bg-red-600 text-white flex items-center justify-center hover:bg-red-700 transition-colors">
                <FaTwitter size={14} />
              </div>
              <div className="cursor-pointer w-8 h-8 rounded-full bg-red-600 text-white flex items-center justify-center hover:bg-red-700 transition-colors">
                <FaInstagram size={14} />
              </div>
              <div className="cursor-pointer w-8 h-8 rounded-full bg-red-600 text-white flex items-center justify-center hover:bg-red-700 transition-colors">
                <FaLinkedinIn size={14} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;