import React from "react";
import { Search, Bell, MessageSquare, User } from "lucide-react";

const Header = () => {
  return (
    <header className='bg-white border-b border-gray-200 sticky top-0 z-50'>
      <div className='container mx-auto px-4'>
        <div className='flex items-center justify-between h-16'>
          {/* Logo */}
          <div className='flex items-center'>
            <div className='bg-success-600 text-white p-2 rounded-lg mr-3'>
              <span className='font-bold text-lg'>U</span>
            </div>
            <span className='text-xl font-semibold text-gray-900'>
              Cloudilic
            </span>
          </div>

          {/* Navigation */}
          <nav className='hidden md:flex items-center space-x-8'>
            <a
              href='#'
              className='text-gray-700 hover:text-gray-900 font-medium transition-colors duration-200 relative group'
            >
              Find Talent
              <span className='absolute -bottom-1 left-0 w-0 h-0.5 bg-success-600 transition-all duration-200 group-hover:w-full'></span>
            </a>
            <a
              href='#'
              className='text-gray-700 hover:text-gray-900 font-medium transition-colors duration-200 relative group'
            >
              Find Work
              <span className='absolute -bottom-1 left-0 w-0 h-0.5 bg-success-600 transition-all duration-200 group-hover:w-full'></span>
            </a>
            <a
              href='#'
              className='text-gray-700 hover:text-gray-900 font-medium transition-colors duration-200 relative group'
            >
              Why Cloudilic
              <span className='absolute -bottom-1 left-0 w-0 h-0.5 bg-success-600 transition-all duration-200 group-hover:w-full'></span>
            </a>
            <a
              href='#'
              className='text-gray-700 hover:text-gray-900 font-medium transition-colors duration-200 relative group'
            >
              Enterprise
              <span className='absolute -bottom-1 left-0 w-0 h-0.5 bg-success-600 transition-all duration-200 group-hover:w-full'></span>
            </a>
          </nav>

          {/* Right side actions */}
          <div className='flex items-center space-x-2'>
            <button className='p-2 text-gray-600 hover:text-gray-900 rounded-full hover:bg-gray-100 transition-all duration-200 hover:scale-110'>
              <Search size={20} />
            </button>
            <button className='p-2 text-gray-600 hover:text-gray-900 rounded-full hover:bg-gray-100 transition-all duration-200 hover:scale-110'>
              <MessageSquare size={20} />
            </button>
            <button className='p-2 text-gray-600 hover:text-gray-900 rounded-full hover:bg-gray-100 transition-all duration-200 hover:scale-110'>
              <Bell size={20} />
            </button>
            <button className='p-2 text-gray-600 hover:text-gray-900 rounded-full hover:bg-gray-100 transition-all duration-200 hover:scale-110'>
              <User size={20} />
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
