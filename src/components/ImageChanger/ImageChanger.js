import React, { useEffect, useState } from "react";
import image from "../../assets/Screenshot 2024-03-28 150535.png";
import screenshotImage1 from "../../assets/Screenshot 2024-04-10 102127.png";
import screenshotImage2 from "../../assets/Screenshot 2024-04-10 102137.png";
import screenshotImage3 from "../../assets/Screenshot 2024-04-10 102146.png";
import screenshotImage4 from "../../assets/Screenshot 2024-04-10 160230.png";
import { FaImage } from "react-icons/fa6";
import "../../App.css";

const ImageChanger = () => {
  const [popUp, setPopUp] = useState(true);
  const [viewImage, setViewImage] = useState(false);
  const [showImages, setShowImages] = useState({
    image1: true,
    image2: false,
    image3: false,
    image4: false,
  });

  const handleInputClick = (imageKey) => {
    setViewImage(false);
    setShowImages((prevState) => ({
      image1: false,
      image2: false,
      image3: false,
      image4: false,
      [imageKey]: true,
    }));
  };

  const onclickHandler = () => {
    setPopUp(false);
  };
  const viewImageHandler = () => {
    setViewImage(!viewImage);
  };
  return (
    <>
      {popUp && (
        <div className="bg-gray-400 py-56">
          <section className="rounded-3xl shadow-2xl bg-white w-25 mx-auto">
            <div className="p-8 text-center sm:p-12">
              <h2 className="mt-6 text-3xl font-bold">
                Check the Image File with CSV Data of Student
              </h2>

              <a
                className="mt-8 inline-block w-full rounded-full bg-pink-600 py-3 text-2xl font-bold text-white shadow-xl"
                href="#"
                onClick={onclickHandler}
              >
                Let's Start
              </a>
            </div>
          </section>
        </div>
      )}
      {!popUp && (
        <>
          <div className=" bg-slate-500">
            {/* LEFT SECTION  */}

            <div className="flex border-e  ">
              {/* Form Field Area */}
              <div className="absolute top-24 right-20">
                <label
                  data-bs-toggle="modal"
                  data-bs-target="#exampleModal"
                  className=" font-medium text-white bg-gradient-to-r from-purple-600 to-indigo-700 rounded-xl shadow-md cursor-pointer select-none text-lg px-6 py-2 hover:shadow-xl active:shadow-md"
                >
                  <span>View Image</span>
                </label>
              </div>
              {/* modal for image */}
              <div
                class="modal fade"
                id="exampleModal"
                tabindex="-1"
                aria-labelledby="exampleModalLabel"
                aria-hidden="true"
              >
                <div class="modal-dialog modal-xl">
                  <div class="modal-content">
                    <div class="modal-header">
                      <h1 class="modal-title fs-5" id="exampleModalLabel">
                        Modal title
                      </h1>
                      <button
                        type="button"
                        class="btn-close"
                        data-bs-dismiss="modal"
                        aria-label="Close"
                      ></button>
                    </div>
                    <div class="modal-body px-5">
                      <div
                        style={{
                          position: "relative",
                          border: "2px solid gray",
                        }}
                        className="mx-5"
                      >
                        <img
                          src={image}
                          alt="Selected"
                          style={{
                            width: "100%",
                            height: "810px",
                            cursor: "crosshair",
                          }}
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className=" flex flex-col  py-4 w-[40%] overflow-hidden">
                <article className="overflow-hidden rounded-lg ps-3 py-3 shadow transition hover:shadow-lg bg-slate-300 m-3 ">
                  <div className="w-5/6 px-3 py-2">
                    <label
                      className="text-xl font-semibold pb-2 leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                      htmlFor="name"
                    >
                      Name
                    </label>
                    <div className="flex">
                      <input
                        type="text"
                        id="name"
                        className="input font-semibold bg-white border-none border-gray-300 w-full  rounded-lg p-2 text-lg shadow-xl focus:border-blue-500 focus:ring-1 focus:ring-blue-500 outline-none"
                        placeholder="Candidate Name.."
                      />
                      <div className="mx-3 my-1 rounded-2 bg-slate-400">
                        <FaImage
                          className=" text-light text-4xl px-1"
                          onClick={() => handleInputClick("image1")}
                        />
                      </div>
                    </div>
                  </div>

                  <div className="w-5/6 px-3 py-2">
                    <label
                      className="text-xl font-semibold pb-2 leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                      htmlFor="class"
                    >
                      Class
                    </label>
                    <div className="flex">
                      <input
                        type="text"
                        id="class"
                        className="input font-semibold bg-white border-none border-gray-300  rounded-lg p-2 text-lg shadow-xl w-full focus:border-blue-500 focus:ring-1 focus:ring-blue-500 outline-none"
                        placeholder="Class.."
                      />
                      <div className="mx-3 my-1 rounded-2 bg-slate-400">
                        <FaImage
                          className=" text-light text-4xl px-1"
                          onClick={() => handleInputClick("image2")}
                        />
                      </div>
                    </div>
                  </div>

                  <div className="w-5/6 px-3 py-2">
                    <label
                      className="text-xl font-semibold pb-2 leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                      htmlFor="schoolname"
                    >
                      School Name
                    </label>
                    <div className="flex">
                      <input
                        type="text"
                        id="schoolname"
                        className="input font-semibold bg-white border-none border-gray-300  rounded-lg p-2 text-lg shadow-xl w-full focus:border-blue-500 focus:ring-1 focus:ring-blue-500 outline-none"
                        placeholder="School Name.."
                      />
                      <div className="mx-3 my-1 rounded-2 bg-slate-400">
                        <FaImage
                          className=" text-light text-4xl px-1"
                          onClick={() => handleInputClick("image3")}
                        />
                      </div>
                    </div>
                  </div>

                  <div
                    className="w-3/6 py-2"
                    onClick={() => handleInputClick("image4")}
                  >
                    <div className="flex mb-1">
                      <label
                        className="text-xl mx-3  font-semibold py-2 mt-1 leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                        htmlFor="questions"
                      >
                        Questions:
                      </label>
                      <div className=" my-1 rounded-2 bg-slate-400">
                        <FaImage
                          className=" text-light text-4xl px-1"
                          onClick={() => handleInputClick("image1")}
                        />
                      </div>
                    </div>
                    <div className=" px-2 mx-3 py-2 flex">
                      <lable className="text-xl font-semibold mt-1 me-2">
                        1.
                      </lable>
                      <input
                        type="text"
                        className="input font-semibold me-2 bg-white border-none border-gray-300  rounded-lg px-2 py-1 text-lg shadow-xl w-full focus:border-blue-500 focus:ring-1 focus:ring-blue-500 outline-none"
                        placeholder="Question1.."
                        id="questions"
                      />
                    </div>
                    <div className=" px-2 mx-3 py-2 flex">
                      <lable className="text-xl font-semibold mt-1 me-2">
                        2.
                      </lable>
                      <input
                        type="text"
                        className="input font-semibold me-2 bg-white border-none border-gray-300  rounded-lg px-2 py-1 text-lg shadow-xl w-full focus:border-blue-500 focus:ring-1 focus:ring-blue-500 outline-none"
                        placeholder="Question2.."
                      />
                    </div>
                    <div className="mx-3 px-2 py-2 flex">
                      <lable className="text-xl font-semibold mt-1 me-2">
                        3.
                      </lable>
                      <input
                        type="text"
                        className="input font-semibold me-2 bg-white border-none border-gray-300  rounded-lg px-2 py-1 text-lg shadow-xl w-full focus:border-blue-500 focus:ring-1 focus:ring-blue-500 outline-none"
                        placeholder="Question3.."
                      />
                    </div>
                    <div className="mx-3 px-2 py-2 flex">
                      <lable className="text-xl font-semibold mt-1 me-2">
                        4.
                      </lable>
                      <input
                        type="text"
                        className="input font-semibold me-2 bg-white border-none border-gray-300  rounded-lg px-2 py-1 text-lg shadow-xl w-full focus:border-blue-500 focus:ring-1 focus:ring-blue-500 outline-none"
                        placeholder="Question4.."
                      />
                    </div>
                  </div>
                </article>
              </div>

              {/* show from field iamge */}
              {showImages.image1 && (
                <div className="flex items-center w-[60%] mx-3">
                  <div className="border-3 border-green-300 mx-auto">
                    <img alt="" src={screenshotImage1} className="" />
                  </div>
                </div>
              )}

              {showImages.image2 && (
                <div className="flex items-center w-[60%] mx-3">
                  <div className="border-3 border-green-300  mx-auto">
                    <img alt="" src={screenshotImage2} className="" />
                  </div>
                </div>
              )}
              {showImages.image3 && (
                <div className="flex items-center w-[60%] mx-3">
                  <div className="border-3 border-green-300 mx-auto">
                    <img alt="" src={screenshotImage3} className="" />
                  </div>
                </div>
              )}
              {showImages.image4 && (
                <div className="flex items-center w-[60%] mx-3">
                  <div className="border-3 border-green-300 mx-auto">
                    <img alt="" src={screenshotImage4} className="" />
                  </div>
                </div>
              )}

              {/* View image */}
            </div>
            <div className="flex gap-4 me-4 pb-4">
              <button className="ms-auto group flex rounded-lg border-none border-indigo-600 bg-gradient-to-r from-purple-600 to-indigo-700  py-2  transition-colors hover:bg-teal-700 focus:outline-none focus:ring">
                <span className=" font-medium text-lg flex  text-white transition-colors group-hover:text-indigo-600 group-active:text-indigo-500 mx-4 px-1">
                  Prev
                </span>
              </button>
              <button className=" group flex rounded-lg border-none border-indigo-600 bg-gradient-to-r from-purple-600 to-indigo-700 bg-teal-600  py-2  transition-colors hover:bg-teal-700 focus:outline-none focus:ring">
                <span className=" font-medium text-lg flex text-white transition-colors group-hover:text-indigo-600 group-active:text-indigo-500 mx-4 px-1">
                  Next
                </span>
              </button>
            </div>
          </div>
        </>
      )}
    </>
  );
};

export default ImageChanger;
