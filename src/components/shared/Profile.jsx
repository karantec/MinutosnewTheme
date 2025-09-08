import { useState } from "react";
import {
  FaBoxOpen,
  FaHeadset,
  FaUserFriends,
  FaMapMarkerAlt,
  FaUser,
  FaBars,
  FaTimes,
} from "react-icons/fa";
import Header from "./Header";

export default function SettingsPage() {
  const [activePage, setActivePage] = useState("orders");
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const menuItems = [
    { id: "orders", label: "Orders", icon: <FaBoxOpen /> },
    { id: "support", label: "Customer Support", icon: <FaHeadset /> },
    { id: "referrals", label: "Manage Referrals", icon: <FaUserFriends /> },
    { id: "addresses", label: "Addresses", icon: <FaMapMarkerAlt /> },
    { id: "profile", label: "Profile", icon: <FaUser /> },
  ];

  const renderContent = () => {
    switch (activePage) {
      case "orders":
        return (
          <div className="flex flex-col items-center justify-center text-center px-4">
            <div className="text-4xl sm:text-6xl mb-4">🧾</div>
            <h2 className="text-lg sm:text-xl font-semibold mb-4">No orders yet</h2>
            <button className="w-full sm:w-auto mt-4 px-6 py-3 border border-purple-500 text-purple-700 rounded-lg hover:bg-purple-50 transition-colors">
              Browse products
            </button>
            <button className="w-full sm:w-auto mt-3 px-6 py-3 border border-pink-500 text-pink-500 rounded-lg hover:bg-pink-50 transition-colors">
              ↓ Load More
            </button>
          </div>
        );
      case "support":
        return (
          <div className="flex flex-col items-center justify-center text-center px-4">
            <div className="text-4xl sm:text-6xl mb-4">📞</div>
            <h2 className="text-lg sm:text-xl font-semibold">Customer Support</h2>
            <p className="text-gray-600 mt-2">Coming soon...</p>
          </div>
        );
      case "referrals":
        return (
          <div className="flex flex-col items-center justify-center text-center px-4">
            <div className="text-4xl sm:text-6xl mb-4">🎁</div>
            <h2 className="text-lg sm:text-xl font-semibold">Manage Referrals</h2>
            <p className="text-gray-600 mt-2">Your referrals will appear here</p>
          </div>
        );
      case "addresses":
        return (
          <div className="flex flex-col items-center justify-center text-center px-4">
            <div className="text-4xl sm:text-6xl mb-4">📍</div>
            <h2 className="text-lg sm:text-xl font-semibold">Saved Addresses</h2>
            <p className="text-gray-600 mt-2">Your saved addresses will appear here</p>
          </div>
        );
      case "profile":
        return (
          <div className="flex flex-col items-center justify-center text-center px-4">
            <div className="text-4xl sm:text-6xl mb-4">👤</div>
            <h2 className="text-lg sm:text-xl font-semibold">Profile Settings</h2>
            <p className="text-gray-600 mt-2">Manage your profile information</p>
          </div>
        );
      default:
        return null;
    }
  };

  const handleMenuClick = (pageId) => {
    setActivePage(pageId);
    setSidebarOpen(false); // Close sidebar on mobile after selection
  };

  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      {/* Top Header */}
      <Header />

      <div className="flex-1 flex justify-center px-2 sm:px-4 relative">
        <div className="flex w-full max-w-6xl relative bg-gray-50">
          {/* Mobile Menu Button */}
          <button
            onClick={() => setSidebarOpen(!sidebarOpen)}
            className="lg:hidden fixed top-20 left-4 z-50 bg-white p-3 rounded-full shadow-lg border"
          >
            {sidebarOpen ? <FaTimes className="text-xl" /> : <FaBars className="text-xl" />}
          </button>

          {/* Overlay for mobile */}
          {sidebarOpen && (
            <div
              className="lg:hidden fixed inset-0 bg-black bg-opacity-50 z-30"
              onClick={() => setSidebarOpen(false)}
            />
          )}

          {/* Sidebar */}
          <div
            className={`fixed lg:relative inset-y-0 left-0 z-40 w-72 sm:w-80 bg-white border-r transform transition-transform duration-300 ease-in-out
              ${sidebarOpen ? "translate-x-0" : "-translate-x-full lg:translate-x-0"}
              flex flex-col h-full lg:h-auto`}
          >
            <div className="p-4 flex-1 overflow-y-auto">
              {/* Profile Info */}
              <div className="flex items-center space-x-3 mb-6 pt-16 lg:pt-0">
                <div className="w-12 h-12 rounded-full bg-purple-100 flex items-center justify-center flex-shrink-0">
                  <FaUser className="text-purple-700 text-xl" />
                </div>
                <div className="min-w-0">
                  <h2 className="font-bold text-sm sm:text-base truncate">KARAN RANA</h2>
                  <p className="text-sm text-gray-500">9798316854</p>
                </div>
              </div>

              {/* Wallet Offer */}
              <div className="bg-green-700 text-white p-4 rounded-lg mb-4">
                <p className="text-sm">
                  You would potentially save{" "}
                  <span className="font-semibold">₹500</span> per month with Minutos Daily
                </p>
                <button className="mt-2 px-3 py-1 bg-yellow-400 text-black rounded-md text-sm font-medium hover:bg-yellow-300 transition-colors w-full sm:w-auto">
                  Get Daily
                </button>
              </div>

              {/* Balance */}
              <div className="p-3 border rounded-lg mb-4">
                <h3 className="text-sm font-medium">Minutos Cash & Gift Card</h3>
                <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mt-2 gap-2">
                  <p className="text-gray-500 text-sm">Available Balance: ₹0</p>
                  <button className="px-3 py-1 bg-black text-white text-sm rounded-lg hover:bg-gray-800 transition-colors w-full sm:w-auto">
                    Add Balance
                  </button>
                </div>
              </div>

              {/* Menu Items */}
              <div className="flex-1">
                {menuItems.map((item) => (
                  <button
                    key={item.id}
                    onClick={() => handleMenuClick(item.id)}
                    className={`flex items-center space-x-3 w-full px-4 py-3 rounded-md text-left mb-2 transition-colors ${
                      activePage === item.id
                        ? "bg-gray-100 text-black font-medium"
                        : "text-gray-700 hover:bg-gray-100"
                    }`}
                  >
                    <span className="flex-shrink-0">{item.icon}</span>
                    <span className="truncate">{item.label}</span>
                  </button>
                ))}
              </div>

              {/* Logout */}
              <button className="mt-6 text-red-500 font-semibold w-full text-left px-4 py-2 hover:bg-red-50 rounded-md transition-colors">
                Log Out
              </button>
            </div>
          </div>

          {/* Main Content */}
          <div className="flex-1 flex flex-col min-h-0 w-full lg:w-auto">
            {/* Top Title */}
            <div className="border-b px-4 sm:px-6 py-4 bg-white text-center lg:text-left">
              <h1 className="text-lg sm:text-xl font-semibold">Settings</h1>
            </div>

            {/* Content Area */}
            <div className="flex-1 flex items-center justify-center p-3 sm:p-6 bg-gray-50">
              <div className="bg-white rounded-lg shadow-md w-full max-w-2xl min-h-[300px] sm:min-h-[500px] flex items-center justify-center mx-auto px-4 sm:px-6">
                {renderContent()}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
