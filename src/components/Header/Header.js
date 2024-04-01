import React from "react";
import logo from "../../assets/logo.png";
const Header = () => {
  return (
    <div>
      <header className="bg-gray-100">
        <div className=" max-w-screen-xl px-1 py-3 sm:px-2  lg:px-8">
          <div className="sm:flex sm:items-center sm:justify-between">
            <div className=" sm:text-left flex">
              <img src={logo} alt="logo" className="w-16 ms-4 me-3" />
              <h1 className="text-2xl font-bold text-gray-900 sm:text-3xl ">
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
