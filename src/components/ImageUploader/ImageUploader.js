import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import uploadIcon from "../../assets/uploaderIcon.png";

const ImageUploader = () => {
  const [image, setImage] = useState(null);
  const navigate = useNavigate();

  // Function to handle image selection
  const handleImageChange = (e) => {
    if (e.target.files[0]) {
      const file = e.target.files[0];
      const reader = new FileReader();

      reader.onload = () => {
        setImage(reader.result);

        // Navigate to another page with the image state
        navigate("/scanner", { state: { imageURL: reader.result } });
      };

      reader?.readAsDataURL(file);
    }
  };

  return (
    <div>
      <section class="bgImage">
        <div class="mx-auto max-w-screen-sm px-4 py-12 lg:flex lg:h-screen lg:items-center flex-col">
          <div className="mt-40">
            <h1 className="text-white text-4xl mb-8 font-bold">
              OMR India Outsources{" "}
            </h1>
          </div>
          <div class="mx-auto max-w-xxl border-2 border-dashed  border-white h-[35%] w-[90%] rounded-lg p-8 text-center ">
            <svg
              class="mx-auto h-20 w-20 text-gray-300"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M12 6v6m0 0v6m0-6h6m-6 0H6"
              ></path>
            </svg>
            <h2 class="mt-1 text-lg font-large text-white mb-6">
              Create Template
            </h2>
            <div className="relative flex justify-center">
              <label
                className="flex items-center font-medium text-white bg-gradient-to-r from-purple-600 to-indigo-700 rounded-lg shadow-md cursor-pointer select-none text-lg px-6 py-3 hover:shadow-xl active:shadow-md"
                htmlFor="file-upload"
              >
                <img src={uploadIcon} alt="uploadIcon" className="mr-2" />
                <span>Upload Image</span>
              </label>
              <input
                onChange={handleImageChange}
                id="file-upload"
                type="file"
                className="absolute -top-full opacity-0"
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ImageUploader;
