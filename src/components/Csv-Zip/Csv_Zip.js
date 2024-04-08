import React, { useState } from "react";
import axios from "axios";
import UploadFile from "../../assets/photo.png";
import {useNavigate} from "react-router-dom"

const Testing = () => {
  const [csvFile, setCsvFile] = useState(null);
  const [imageFolder, setImageFolder] = useState(null);

  const onCsvFileHandler = (event) => {
    if (event.target.files[0]) {
      const file = event.target.files[0];
      const allowedExtensions = ["csv", "xlsx"];
      const extension = file?.name.split(".").pop().toLowerCase();

      if (!allowedExtensions.includes(extension)) {
        alert("Please upload a CSV or Excel file.");
        return;
      }

      setCsvFile(file);
    }
  };

  const onImageFolderHandler = (event) => {
    if (event.target.files[0]) {
      const file = event.target.files[0];
      const allowedExtensions = ["zip", "folder"];
      const extension = file?.name.split(".").pop().toLowerCase();

      if (!allowedExtensions.includes(extension)) {
        alert("Please upload a ZIP file or a folder.");
        return;
      }

      setImageFolder(file);
    }
  };
  const navigate = useNavigate();
  const onSaveFilesHandler = async () => {
    // if (!csvFile || !imageFolder) {
    //   alert("Please upload both CSV and image folder.");
    //   return;
    // }
    navigate("/mapping")
    const formData = new FormData();
    formData.append("csvFile", csvFile);
    formData.append("zipFile", imageFolder);
    
    try {
      const response = await axios.post(
        "http://192.168.0.116:4000/upload/2",
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );
      console.log(response.data);
    } catch (error) {
      console.error("Error uploading files: ", error);
    }
  };

  return (
    <div style={{ backgroundColor: "#180C2E" }}>
      <div className="xl:flex justify-center gap-5 mb-5 pt-5 mx-5">
        <div className="mt-4 mx-auto ">
          <h1 className="py-3 text-3xl font-semibold text-white text-center">
            Template Name
          </h1>
        <div
          className=" bg-gray-100 px-5 py-3"
          style={{ borderRadius: "20px" }}
        >
          <form className="form relative pb-2">
            <button className="absolute" style={{ top: "10px", right: "20px" }}>
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
              className="input rounded-full ps-2 py-1 border-2 rounded-4 border-transparent focus:outline-none focus:border-blue-500 placeholder-gray-400"
            />
          </form>
          <div className=" overflow-y-scroll h-[290px] px-2">
            <div>
              <button className="block rounded-lg px-4 py-2 text-md font-medium text-gray-500 hover:bg-gray-300 hover:text-gray-700">
                General
              </button>
            </div>
            <div>
              <button className="block rounded-lg px-4 py-2 text-md font-medium text-gray-500 hover:bg-gray-300 hover:text-gray-700">
                General
              </button>
            </div>
            <div>
              <button className="block rounded-lg px-4 py-2 text-md font-medium text-gray-500 hover:bg-gray-300 hover:text-gray-700">
                General
              </button>
            </div>
            <div>
              <button className="block rounded-lg px-4 py-2 text-md font-medium text-gray-500 hover:bg-gray-300 hover:text-gray-700">
                General
              </button>
            </div>
            <div>
              <button className="block rounded-lg px-4 py-2 text-md font-medium text-gray-500 hover:bg-gray-300 hover:text-gray-700">
                General
              </button>
            </div>
            <div>
              <button className="block rounded-lg px-4 py-2 text-md font-medium text-gray-500 hover:bg-gray-300 hover:text-gray-700">
                General
              </button>
            </div>
            <div>
              <button className="block rounded-lg px-4 py-2 text-md font-medium text-gray-500 hover:bg-gray-300 hover:text-gray-700">
                General
              </button>
            </div>
            <div>
              <button className="block rounded-lg px-4 py-2 text-md font-medium text-gray-500 hover:bg-gray-300 hover:text-gray-700">
                General
              </button>
            </div>
            <div>
              <button className="block rounded-lg px-4 py-2 text-md font-medium text-gray-500 hover:bg-gray-300 hover:text-gray-700">
                General
              </button>
            </div>
            <div>
              <button className="block rounded-lg px-4 py-2 text-md font-medium text-gray-500 hover:bg-gray-300 hover:text-gray-700">
                General
              </button>
            </div>
          </div>
        </div>
        </div>
        <div
          className="mx-auto w-50 w-xl-none  border-4 border-dashed p-8 text-center shadow-md shadow-blue-400 mt-5"
          style={{ borderColor: "skyblue", borderRadius: "60px" }}
        >
          <img
            src={UploadFile}
            alt="uploadIcon"
            width={"25%"}
            className=" mx-auto pt-3 mb-4"
          />
          <h2 className=" text-xl font-semibold text-white mb-4 mt-5">
            Drag and Drop file to upload or{" "}
          </h2>
          <div className="relative flex justify-center">
            <label
              className="flex items-center font-medium text-white bg-gradient-to-r from-purple-600 to-indigo-700 rounded-3xl shadow-md cursor-pointer select-none text-lg px-6 py-2 hover:shadow-xl active:shadow-md"
              htmlFor="file-upload"
            >
              <span>Upload CSV File</span>
            </label>
            <input
              id="csv-upload"
              type="file"
              accept=".csv,.xlsx"
              name="file"
              onChange={onCsvFileHandler}
              className="absolute -top-full opacity-0"
            />
          </div>
          <p className="text-white font-medium my-3">Supported files: xlsx</p>
        </div>
        {/* 2nd section */}
        <div
          className="mx-auto w-50 w-xl-none border-4 border-dashed p-8 mt-5 text-center shadow-md shadow-blue-400"
          style={{ borderColor: "skyblue", borderRadius: "60px" }}
        >
          <img
            src={UploadFile}
            alt="uploadIcon"
            width={"25%"}
            className=" mx-auto  pt-3 mb-4"
          />

          <h2 className=" text-xl font-semibold text-white mb-4 mt-5">
            Drag and Drop file to upload or{" "}
          </h2>
          <div className="relative flex justify-center">
            <label
              className="flex items-center font-medium text-white bg-gradient-to-r from-purple-600 to-indigo-700 rounded-3xl shadow-md cursor-pointer select-none text-lg px-6 py-2 hover:shadow-xl active:shadow-md"
              htmlFor="file-upload"
            >
              <span>Upload Zip file </span>
            </label>
            <input
              id="image-folder-upload"
              type="file"
              accept=".zip,.folder"
              webkitdirectory
              directory
              multiple
              name="file"
              onChange={onImageFolderHandler}
              className="absolute -top-full opacity-0"
            />
          </div>
          <p className="text-white font-medium my-3">Supported files: .zip</p>
        </div>
      </div>
      <div className="flex justify-center py-5">
        <button
          type="submit"
          onClick={onSaveFilesHandler}
          y
          className="btn btn-lg btn-success text-gray px-4 py-2 text-xl font-medium rounded-3xl"
        >
          Save Files{" "}
        </button>
      </div>
    </div>
  );
};

export default Testing;
