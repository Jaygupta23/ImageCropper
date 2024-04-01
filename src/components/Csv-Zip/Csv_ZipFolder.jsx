import React from "react";
import UploadFile from "../../assets/photo.png";
const Csv_ZipFolder = () => {
  return (
    <>
      <div
        className="flex justify-center gap-5 bg-gray-00 h-[90vh] my-5 py-5"
      >
        <div className="me-5 max-w-xl border-4 border-dashed  border-indigo-400 h-[50%] w-[25%] rounded-3xl p-8 text-center shadow-lg">
          <img
            src={UploadFile}
            alt="uploadIcon"
            className="w-[25%] mx-auto mt-5 mb-4"
          />
          <h2 className=" text-xl font-semibold text-gray-500 mb-4">
            Drag and Drop file to upload <br /> or{" "}
          </h2>
          <div className="relative flex justify-center">
            <label
              className="flex items-center font-medium text-white bg-gradient-to-r from-purple-600 to-indigo-700 rounded-lg shadow-md cursor-pointer select-none text-lg px-6 py-3 hover:shadow-xl active:shadow-md"
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
          <p className="text-gray-500 font-medium my-3">
            Supported files: xlsx
          </p>
        </div>
        {/* 2nd section */}

        <div className="ms-5 max-w-xl border-4 border-dashed  border-indigo-400 h-[50%] w-[25%] rounded-3xl p-8 text-center shadow-lg ">
          <img
            src={UploadFile}
            alt="uploadIcon"
            className="w-[25%] mx-auto mt-5 mb-4"
          />

          <h2 className=" text-xl font-semibold text-gray-500 mb-4">
            Drag and Drop file to upload <br /> or{" "}
          </h2>
          <div className="relative flex justify-center">
            <label
              className="flex items-center font-medium text-white bg-gradient-to-r from-purple-600 to-indigo-700 rounded-lg shadow-md cursor-pointer select-none text-lg px-6 py-3 hover:shadow-xl active:shadow-md"
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
          <p className="text-gray-500 font-medium my-3">
            Supported files: xlsx
          </p>
        </div>
      </div>
      <div className="flex justify-center mb-5">
        <button className="bg-indigo-700 text-white px-4 py-2 text-xl font-medium rounded-xl">Save Files </button>
      </div>
    </>
  );
};

export default Csv_ZipFolder;
