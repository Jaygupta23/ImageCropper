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
      <section
        className=" xl:flex justify-evenly h-screen"
        style={{ backgroundColor: "#180C2E" }}
      >
        <div className="mx-auto max-w-screen-sm px-4 py-12 lg:flex lg:items-center flex-col">
          <div className="mt-10 xl:mt-40">
            <h1 className="text-white text-center text-4xl mb-4 font-bold">
              Saved Templates
            </h1>
          </div>

          <div className="h-[35%] lg:w-[36rem] rounded-xl bg-white">
            <div className=" min-w-full divide-y-2 divide-gray-200 bg-white text-sm rounded-xl">
              <div className="divide-y divide-gray-200 text-md font-semibold text-gray-600">
                <div className="flex">
                <div className="whitespace-nowrap px-4 py-3 text-lg font-semibold">
                  Template Name
                </div>
                <div className="whitespace-nowrap px-4 py-3 text-lg text-gray-600">
                  Other Data..
                </div>
                <div className="px-4 py-2">
                  <div className="InputContainer w-48 h-11 flex items-center justify-center bg-gradient-to-b from-purple-200 to-pink-200 rounded-full overflow-hidden cursor-pointer shadow-sm">
                    <input
                      placeholder="Search.."
                      id="input"
                      className="w-44 h-8 bg-white border-none outline-none rounded-full pl-4 text-sm text-gray-700"
                      name="text"
                      type="text"
                    />
                  </div>
                </div>
                </div>
                <div className="overflow-y-scroll h-[220px]">
                <div className="flex">
                  <div className="whitespace-nowrap px-4 py-2">
                    Omr Scanner 1
                  </div>
                  <div className="whitespace-nowrap px-4 py-2">Omr details</div>
                  <div className="whitespace-nowrap px-4 py-2 mx-auto">
                    <a
                      href="#"
                      className="inline-block rounded bg-indigo-600 text-md px-4 py-1 font-medium text-white hover:bg-indigo-700"
                    >
                      View
                    </a>
                  </div>
                </div>
                <div className="flex">
                  <div className="whitespace-nowrap px-4 py-2">
                    Omr Scanner 1
                  </div>
                  <div className="whitespace-nowrap px-4 py-2">Omr details</div>
                  <div className="whitespace-nowrap px-4 py-2 mx-auto">
                    <a
                      href="#"
                      className="inline-block rounded bg-indigo-600 text-md px-4 py-1 font-medium text-white hover:bg-indigo-700"
                    >
                      View
                    </a>
                  </div>
                </div>
                <div className="flex">
                  <div className="whitespace-nowrap px-4 py-2">
                    Omr Scanner 1
                  </div>
                  <div className="whitespace-nowrap px-4 py-2">Omr details</div>
                  <div className="whitespace-nowrap px-4 py-2 mx-auto">
                    <a
                      href="#"
                      className="inline-block rounded bg-indigo-600 text-md px-4 py-1 font-medium text-white hover:bg-indigo-700"
                    >
                      View
                    </a>
                  </div>
                </div>
                <div className="flex">
                  <div className="whitespace-nowrap px-4 py-2">
                    Omr Scanner 1
                  </div>
                  <div className="whitespace-nowrap px-4 py-2">Omr details</div>
                  <div className="whitespace-nowrap px-4 py-2 mx-auto">
                    <a
                      href="#"
                      className="inline-block rounded bg-indigo-600 text-md px-4 py-1 font-medium text-white hover:bg-indigo-700"
                    >
                      View
                    </a>
                  </div>
                </div>
                <div className="flex">
                  <div className="whitespace-nowrap px-4 py-2">
                    Omr Scanner 1
                  </div>
                  <div className="whitespace-nowrap px-4 py-2">Omr details</div>
                  <div className="whitespace-nowrap px-4 py-2 mx-auto">
                    <a
                      href="#"
                      className="inline-block rounded bg-indigo-600 text-md px-4 py-1 font-medium text-white hover:bg-indigo-700"
                    >
                      View
                    </a>
                  </div>
                </div>
                <div className="flex">
                  <div className="whitespace-nowrap px-4 py-2">
                    Omr Scanner 1
                  </div>
                  <div className="whitespace-nowrap px-4 py-2">Omr details</div>
                  <div className="whitespace-nowrap px-4 py-2 mx-auto">
                    <a
                      href="#"
                      className="inline-block rounded bg-indigo-600 text-md px-4 py-1 font-medium text-white hover:bg-indigo-700"
                    >
                      View
                    </a>
                  </div>
                </div>
                <div className="flex">
                  <div className="whitespace-nowrap px-4 py-2">
                    Omr Scanner 1
                  </div>
                  <div className="whitespace-nowrap px-4 py-2">Omr details</div>
                  <div className="whitespace-nowrap px-4 py-2 mx-auto">
                    <a
                      href="#"
                      className="inline-block rounded bg-indigo-600 text-md px-4 py-1 font-medium text-white hover:bg-indigo-700"
                    >
                      View
                    </a>
                  </div>
                </div>
              
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="mx-auto max-w-screen-sm px-4 py-12 lg:flex  lg:items-center flex-col">
          <div className="mt-10 xl:mt-40">
            <h1 className="text-white text-center text-4xl mb-4 font-bold">
              OMR India Outsources{" "}
            </h1>
          </div>
          <div className="mx-auto max-w-xxl border-3 rounded-[4%] border-dashed  border-green-400 h-[35%] lg:w-[36rem]  py-8 px-32 text-center">
            <svg
              className="mx-auto h-20 w-20 text-gray-300"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M12 6v6m0 0v6m0-6h6m-6 0H6"
              ></path>
            </svg>
            <h2 className="mt-1 text-lg font-large text-white mb-6">
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
