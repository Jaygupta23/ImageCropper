import React from "react";
import UploadFile from "../../assets/photo.png";
const Csv_ZipFolder = () => {
  return (
    <div style={{ backgroundColor: "#180C2E" }}>
      <div className="flex justify-center gap-5 mb-5 pt-5 mx-5">
        <div
          className="mt-5 h-[50%] bg-white px-5 py-3"
          style={{ borderRadius: "60px" }}
        >
          <h1 className="py-2 text-xl font-semibold text-center">
            Template Name
          </h1>
          <form className="form relative pb-2">
            <button className="absolute ps-3" style={{top: "10px"}}>
              <svg
                className="w-5 h-5 text-gray-700"
                aria-labelledby="search"
                role="img"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                height="16"
                width="17"
              >
                <path
                  strokeLinejoin="round"
                  strokeLinecap="round"
                  strokeWidth="1.333"
                  stroke="currentColor"
                  d="M7.667 12.667A5.333 5.333 0 107.667 2a5.333 5.333 0 000 10.667zM14.334 14l-2.9-2.9"
                ></path>
              </svg>
            </button>
            <input
              type="text"
              required=""
              placeholder="Search..."
              className="input rounded-full ps-5 py-1 border-2 rounded-4 border-transparent focus:outline-none focus:border-blue-500 placeholder-gray-400"
            />
          </form>
          <div className=" overflow-y-scroll h-[100px] px-2">
            <div>
              <a
                href="#"
                className="block rounded-lg px-4 py-2 text-md font-medium text-gray-500 hover:bg-gray-300 hover:text-gray-700"
              >
                General
              </a>
            </div>

            <div>
              <a
                href="#"
                className="block rounded-lg px-4 py-2 text-md font-medium  text-gray-500 hover:bg-teal-300 hover:text-gray-700"
              >
                Teams
              </a>
            </div>

            <div>
              <a
                href="#"
                className="block rounded-lg px-4 py-2 text-md font-medium text-gray-500 hover:bg-gray-300 hover:text-gray-700"
              >
                Billing
              </a>
            </div>
            <div>
              <a
                href="#"
                className="block rounded-lg px-4 py-2 text-md font-medium text-gray-500 hover:bg-gray-300 hover:text-gray-700"
              >
                Billing
              </a>
            </div>
            <div>
              <a
                href="#"
                className="block rounded-lg px-4 py-2 text-md font-medium text-gray-500 hover:bg-gray-300 hover:text-gray-700"
              >
                Billing
              </a>
            </div>
            <div>
              <a
                href="#"
                className="block rounded-lg px-4 py-2 text-md font-medium text-gray-500 hover:bg-gray-300 hover:text-gray-700"
              >
                Billing
              </a>
            </div>

          </div>
        </div>
        <div
          className="mx-5 max-w-xl border-4 border-dashed h-[50%] w-[25%] p-8 text-center shadow-lg shadow-blue-400 mt-5"
          style={{ borderColor: "skyblue", borderRadius: "60px" }}
        >
          <img
            src={UploadFile}
            alt="uploadIcon"
            width={"25%"}
            className=" mx-auto mt-5 pt-3 mb-4"
          />
          <h2 className=" text-xl font-semibold text-white mb-4 mt-5">
            Drag and Drop file to upload <br /> or{" "}
          </h2>
          <div className="relative flex justify-center">
            <label
              className="flex items-center font-medium text-white bg-gradient-to-r from-purple-600 to-indigo-700 rounded-3xl shadow-md cursor-pointer select-none text-lg px-6 py-2 hover:shadow-xl active:shadow-md"
              htmlFor="file-upload"
            >
              <span>Upload CSV File</span>
            </label>
            <input
              // onChange={handleImageChange}
              id="file-upload"
              type="file"
              className="absolute -top-full opacity-0"
            />
          </div>
          <p className="text-white font-medium my-3">Supported files: xlsx</p>
        </div>
        {/* 2nd section */}
        <div
          className="ms-5 max-w-xl border-4 border-dashed  h-[50%] w-[25%] rounded-3xl p-8 mt-5 text-center shadow-lg "
          style={{ borderColor: "skyblue", borderRadius: "60px" }}
        >
          <img
            src={UploadFile}
            alt="uploadIcon"
            width={"25%"}
            className=" mx-auto mt-5 pt-3 mb-4"
          />

          <h2 className=" text-xl font-semibold text-white mb-4 mt-5">
            Drag and Drop file to upload <br /> or{" "}
          </h2>
          <div className="relative flex justify-center">
            <label
              className="flex items-center font-medium text-white bg-gradient-to-r from-purple-600 to-indigo-700 rounded-3xl shadow-md cursor-pointer select-none text-lg px-6 py-2 hover:shadow-xl active:shadow-md"
              htmlFor="file-upload"
            >
              <span>Upload Zip file </span>
            </label>
            <input
              // onChange={handleImageChange}
              id="file-upload"
              type="file"
              className="absolute -top-full opacity-0"
            />
          </div>
          <p className="text-white font-medium my-3">Supported files: .zip</p>
        </div>
      </div>
      <div className="flex justify-center bg-indigo-400 py-5">
        <button
          type="submit"
          className="btn btn-lg btn-success text-gray px-4 py-2 text-xl font-medium rounded-3xl"
        >
          Save Files{" "}
        </button>
      </div>
    </div>
  );
};

export default Csv_ZipFolder;
