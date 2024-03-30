import React from "react";
import logo from "../../assets/logo.png";
const Header = () => {
  return (
    <div>
      <header className="bg-gray-100">
        <div className="mx-auto max-w-screen-xl px-1 py-4 sm:px-2 sm:py-4 lg:px-8">
          <div className="sm:flex sm:items-center sm:justify-between">
            <div className="text-center sm:text-left flex">
              <img src={logo} alt="logo" className="w-20 mx-4" />
              <h1 className="text-2xl font-bold text-gray-900 sm:text-3xl mt-1">
                OMR India Outsources
              </h1>
            </div>
          </div>
        </div>
      </header>
    </div>
  );
};

export default Header;
