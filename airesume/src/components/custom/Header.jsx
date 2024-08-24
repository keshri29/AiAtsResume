/* eslint-disable no-unused-vars */
import React from 'react'
import { Button } from '../ui/button'
import { Link } from 'react-router-dom'
import { UserButton, useUser } from '@clerk/clerk-react'

const Header = () => {
  const { user, isSignedIn } = useUser();

  return (
    <div className="bg-gradient-to-r from-blue-500 to-purple-600 shadow-lg p-4 rounded-b-xl flex flex-col md:flex-row justify-between items-center">
      {/* Left: Logo and App Name */}
      <div className="flex items-center mb-4 md:mb-0">
        <img 
          src="/logo.svg" 
          alt="Logo" 
          className="w-20 h-20 md:w-24 md:h-24" 
        />
      </div>

      {/* Right: Dashboard and Profile/User Button */}
      <div className="flex flex-col md:flex-row items-center gap-4">
        {isSignedIn ? (
          <>
            <Link to={'/dashboard'}>
              <Button 
                variant="outline" 
                className="bg-white text-blue-500 border-none shadow-lg transform hover:scale-105 transition-transform duration-300">
                Dashboard
              </Button>
            </Link>
            <UserButton 
              appearance={{ 
                elements: { 
                  userButtonOuter: "transform hover:scale-105 transition-transform duration-300" 
                } 
              }} 
            />
          </>
        ) : (
          <Link to={'/auth/sign-in'}>
            <Button 
              className="bg-white text-blue-500 shadow-lg transform hover:scale-105 transition-transform duration-300">
              Start
            </Button>
          </Link>
        )}
      </div>
    </div>
  );
};

export default Header;
