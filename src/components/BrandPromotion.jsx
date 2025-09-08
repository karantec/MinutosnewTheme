import { IoCheckmarkCircle } from 'react-icons/io5';
import AppStoreLogo from '../assets/images/app-store.webp';
import PlayStoreLogo from '../assets/images/play-store.webp';

const HowItWorks = () => {
  return (
    <section className="py-12 bg-white">
      <div className="max-w-6xl mx-auto px-6">
        {/* Section Header */}
        <h2 className="text-3xl font-bold text-center mb-12 text-red-700">How it Works</h2>
        
        {/* Steps */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {/* Step 1 */}
          <div className="flex flex-col items-center text-center">
            <div className="w-24 h-24 bg-red-100 rounded-full flex items-center justify-center mb-6">
              <svg className="w-12 h-12 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
              </svg>
            </div>
            <h3 className="text-xl font-semibold mb-3 text-red-800">Open the app</h3>
            <p className="text-gray-600">
              Choose from over 7000 products across groceries, fresh fruits & veggies, meat, pet care, beauty items & more
            </p>
          </div>
          
          {/* Step 2 */}
          <div className="flex flex-col items-center text-center">
            <div className="w-24 h-24 bg-red-100 rounded-full flex items-center justify-center mb-6">
              <svg className="w-12 h-12 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
              </svg>
            </div>
            <h3 className="text-xl font-semibold mb-3 text-red-800">Place an order</h3>
            <p className="text-gray-600">
              Add your favourite items to the cart & avail the best offers
            </p>
          </div>
          
          {/* Step 3 */}
          <div className="flex flex-col items-center text-center">
            <div className="w-24 h-24 bg-red-100 rounded-full flex items-center justify-center mb-6">
              <svg className="w-12 h-12 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
              </svg>
            </div>
            <h3 className="text-xl font-semibold mb-3 text-red-800">Get free delivery</h3>
            <p className="text-gray-600">
              Experience lighting-fast speed & get all your items delivered in 10 minutes
            </p>
          </div>
        </div>
        
        {/* App Download Section */}
        <div className="bg-red-50 rounded-2xl p-8 md:p-12">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <div className="md:w-1/2 mb-8 md:mb-0">
              <h2 className="text-3xl font-bold mb-6 text-red-800">Get the Minutos app</h2>
              <div className="space-y-4 mb-6">
                <div className="flex items-center">
                  <IoCheckmarkCircle size={24} className="text-red-600 mr-3" />
                  <span className="text-gray-700">Live order tracking</span>
                </div>
                <div className="flex items-center">
                  <IoCheckmarkCircle size={24} className="text-red-600 mr-3" />
                  <span className="text-gray-700">Latest feature updates</span>
                </div>
                <div className="flex items-center">
                  <IoCheckmarkCircle size={24} className="text-red-600 mr-3" />
                  <span className="text-gray-700">Exclusive app-only offers</span>
                </div>
              </div>
              
              <div className="flex flex-col sm:flex-row gap-4 mt-8">
                <div className="h-12 w-40 bg-black rounded overflow-hidden">
                  <img
                    src={AppStoreLogo}
                    alt="Download on App Store"
                    className="h-full w-full object-cover"
                  />
                </div>
                <div className="h-12 w-40 bg-black rounded overflow-hidden">
                  <img
                    src={PlayStoreLogo}
                    alt="Get it on Google Play"
                    className="h-full w-full object-cover"
                  />
                </div>
              </div>
            </div>
            
            <div className="md:w-1/2 flex justify-center relative">
              <div className="relative">
                <img
                  src="/phone.webp"
                  alt="Minutos App"
                  className="max-h-80 z-10 relative"
                />
                <div className="absolute -bottom-6 -right-6 animate-bounce">
                  <img
                    src="/bike.png"
                    alt="Delivery"
                    className="h-24"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
        
        {/* Footer Note */}
        <div className="mt-12 pt-6 border-t border-gray-200">
          <p className="text-sm text-gray-600 text-center">
            "Minutos" is owned & managed by "Minutos Marketplace Private Limited" and provides quick grocery delivery services.
          </p>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;