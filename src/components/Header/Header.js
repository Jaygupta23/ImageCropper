import React from "react";
import logo from "../../assets/logo.png";
const Header = () => {
  return (
    <div>
      <header className="bg-gray-100">
        <div className="  px-1 py-3 sm:px-2  lg:px-8">
          <div className="sm:flex sm:items-center sm:justify-between">
            <div className=" flex">
              <img src={logo} alt="logo" className="w-16 ms-4 me-3" />
              <h1 className="text-2xl font-bold text-gray-900 sm:text-3xl ">
                OMR India Outsources
              </h1>
            </div>
            <label
              className="ms-auto font-medium me-5 text-white bg-gradient-to-r from-purple-600 to-indigo-700 rounded-xl shadow-md cursor-pointer select-none text-lg px-6 py-2 hover:shadow-xl active:shadow-md"
            
            >
              <span>Create Template</span>
            </label>
          </div>
        </div>
      </header>
    </div>
  );
};

export default Header;
