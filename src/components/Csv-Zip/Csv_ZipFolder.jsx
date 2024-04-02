import React from "react";
import UploadFile from "../../assets/photo.png";
const Csv_ZipFolder = () => {
  return (
    <>
      <div className="flex justify-center gap-5 h-[90vh] my-5 pt-3">
        <div className="me-5 max-w-xl border-4 border-dashed h-[50%] w-[25%] p-8 text-center shadow-lg shadow-blue-400" style={{borderColor: "skyblue", borderRadius: "60px"}}>
          <img
            src={UploadFile}
            alt="uploadIcon"
            width={"25%"}
            className=" mx-auto mt-5 pt-3 mb-4"
          />
          <h2 className=" text-xl font-semibold text-gray-500 mb-4 mt-5">
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
          <p className="text-gray-500 font-medium my-3">
            Supported files: xlsx
          </p>
        </div>
        {/* 2nd section */}

        <div className="ms-5 max-w-xl border-4 border-dashed  h-[50%] w-[25%] rounded-3xl p-8 text-center shadow-lg " style={{borderColor: "skyblue", borderRadius: "60px"}}>
          <img
            src={UploadFile}
            alt="uploadIcon"
            width={"25%"}
            className=" mx-auto mt-5 pt-3 mb-4"
          />

          <h2 className=" text-xl font-semibold text-gray-500 mb-4 mt-5">
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
          <p className="text-gray-500 font-medium my-3">
            Supported files: .zip
          </p>
        </div>
      </div>
      <div className="flex justify-center bg-indigo-400 mb-5 pt-4">
        <button type="submit" className="btn btn-lg btn-success text-gray px-4 py-2 text-xl font-medium rounded-3xl">Save Files </button>       
      </div>
    </>
  );
};

export default Csv_ZipFolder;
