import React from "react";
import { Link } from "react-router-dom";
import { useAuthStore } from "../store/useAuthStore";
import { LogOut, MessageSquare, Settings, User } from "lucide-react";

const Navbar = () => {
  const { logout, authUser } = useAuthStore();

  return (
    <header className="fixed w-full top-0 z-40 backdrop-blur-lg bg-gray-900/80 shadow-lg border-b border-gray-800">
      <div className="container mx-auto px-6 h-16 flex items-center justify-between">
        
        {/* Logo & Brand */}
        <Link to="/" className="flex items-center gap-3 hover:opacity-80 transition-all">
          <div className="size-10 rounded-xl bg-primary/20 flex items-center justify-center">
            <MessageSquare className="w-6 h-6 text-primary" />
          </div>
          <h1 className="text-xl font-semibold text-white">Chatty</h1>
        </Link>

        {/* Navigation Buttons */}
        <div className="flex items-center gap-3">
          {/* Settings */}
          {/* <Link to="/settings" className="btn btn-sm btn-outline border-gray-600 bg-indigo-600 hover:text-white text-white ">
            <Settings className="size-5" />
            <span className="hidden sm:inline">Settings</span>
          </Link> */}

          {/* Authenticated User Options */}
          {authUser && (
            <>
              {/* Profile */}
              <Link to="/profile" className="btn btn-sm btn-outline border-gray-600 bg-indigo-600 hover:text-white text-white">
                <User className="size-5" />
                <span className="hidden sm:inline">Profile</span>
              </Link>

              {/* Logout */}
              <button className="btn btn-sm btn-outline  border-gray-600 bg-red-700 hover:bg-red-800 text-white" onClick={logout}>
                <LogOut className="size-5" />
                <span className="hidden sm:inline">Logout</span>
              </button>
            </>
          )}
        </div>
      </div>
    </header>
  );
};

export default Navbar;
