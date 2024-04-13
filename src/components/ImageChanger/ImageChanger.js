import React, { useState, useContext, useEffect } from "react";
import { FaImage } from "react-icons/fa6";
import images from "../../assets/100022.jpg";
import { useParams, useLocation } from "react-router-dom";
import axios from "axios";
import ImageNotFound from "../../components/ImageNotFound/ImageNotFound";
import imagessss from "../../assets/Screenshot 2024-03-28 150535.png";
import { toast } from "react-toastify";
// import { scannerContext } from "../../ContextApi/ContextApi";

const ImageChanger = () => {
  const [popUp, setPopUp] = useState(false);
  const [image, setImage] = useState();
  // const { onGetTemplateHandler } = useContext(scannerContext);
  const [templateHeaders, setTemplateHeaders] = useState();
  const [imageName, setImageName] = useState("");
  const [currentIndex, setCurrentIndex] = useState(1);
  const [csvData, setCsvData] = useState([]);
  const { id } = useParams();
  const location = useLocation();
  const templateId = location.state;

  // useEffect(() => {
  // const fetchTemplate = async () => {
  // try {
  // // const response = await onGetTemplateHandler();
  // // const templateData = response.find((data) => data.id == templateId);
  // // setTemplateHeaders(templateData);
  // } catch (error) {
  // console.log(error);
  // }
  // };
  // fetchTemplate();
  // // }, [templateId, onGetTemplateHandler]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          `http://192.168.0.116:4000/get/csvdata/${id}`
        );
        setCsvData(response.data);
        const headers = response.data[0];
        const getKeyByValue = (object, value) => {
          return Object.keys(object).find((key) => object[key] === value);
        };
        const keyForImage = getKeyByValue(headers, "Image");
        setImageName(keyForImage);
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
  }, [id]);

  const onStartHandler = async (direction) => {
    try {
      let imageName1;
      if (direction === "initial") {
        const objects = { ...csvData[currentIndex + 1] };
        imageName1 = objects[imageName];
      } else {
        if (direction === "next") {
          if (currentIndex < csvData.length - 1) {
            // Skip the header row when moving to the next image
            setCurrentIndex(currentIndex + 1);
          } else {
            toast.success("All images have been processed.");
          }
        } else if (direction === "prev") {
          if (currentIndex > 0) {
            setCurrentIndex(currentIndex - 1);
          } else {
            toast.warning("You are already at the first image.");
          }
        } else {
          throw new Error("Invalid direction");
        }
        // Get the imageName for the next or previous image
        const objects = { ...csvData[currentIndex + 1] };
        imageName1 = objects[imageName];
      }

      if (currentIndex < csvData.length - 1) {
        // Request the image from the backend
        const response = await axios.post(
          `http://192.168.0.116:4000/get/image`,
          {
            imageName: imageName1,
            id: templateId,
          }
        );
        // const url = response.data?.croppedImages[0].imageUrl;
        const url = response.data?.base64Image;
        setImage(url);
        setPopUp(false); // Hide the initial popup after the first image is loaded
      } else {
        toast.success("All images have been processed.");
      }
    } catch (error) {
      toast.error("An error occurred while processing the image.");
      console.log(error.message);
    }
  };

  const [showImages, setShowImages] = useState({
    image1: true,
    image2: false,
    image3: false,
    image4: false,
  });

  const handleInputClick = (imageKey) => {
    setShowImages((prevState) => ({
      image1: false,
      image2: false,
      image3: false,
      image4: false,
      [imageKey]: true,
    }));
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

              <button
                className="mt-8 inline-block w-full rounded-full bg-pink-600 py-3 text-2xl font-bold text-white shadow-xl"
                onClick={() => onStartHandler("initial")}
              >
                Let's Start
              </button>
            </div>
          </section>
        </div>
      )}
      {!popUp && (
        <div className=" bg-slate-500 flex flex-col lg:flex-row">
          {/* LEFT SECTION */}

          <div className="flex border-e w-5/6 mx-auto lg:w-3/12   order-2 order-md-2 order-lg-1">
            <div className=" flex flex-col overflow-hidden w-[100%]">
              <article className="overflow-hidden p-3 shadow transition hover:shadow-lg bg-slate-300 lg:h-auto">
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
                      className="input font-semibold bg-white border-none border-gray-300 w-full rounded-lg p-2 text-lg shadow-xl focus:border-blue-500 focus:ring-1 focus:ring-blue-500 outline-none"
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
                      className="input font-semibold bg-white border-none border-gray-300 rounded-lg p-2 text-lg shadow-xl w-full focus:border-blue-500 focus:ring-1 focus:ring-blue-500 outline-none"
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
                      className="input font-semibold bg-white border-none border-gray-300 rounded-lg p-2 text-lg shadow-xl w-full focus:border-blue-500 focus:ring-1 focus:ring-blue-500 outline-none"
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

                <div className="w-full py-2">
                  <div className=" mb-1">
                    <div className="flex">
                      <label
                        className="text-xl mx-3 font-semibold py-2 mt-1 leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                        htmlFor="questions"
                      >
                        Questions:
                      </label>
                      <div className=" my-1 rounded-2 bg-slate-400">
                        <FaImage
                          className=" text-light text-4xl px-1"
                          onClick={() => handleInputClick("image4")}
                        />
                      </div>
                    </div>
                  </div>
                  <div className="flex flex-wrap flex-row">
                  <div className="flex-col ">
                      <div className=" px-2 mx-3 py-2 flex w-[70px]">
                        <div className="w-[30px]">
                          <lable className="text-xl font-semibold ">1.</lable>
                        </div>
                        <input
                          type="text"
                          className="input font-semibold bg-white border-none border-gray-300 rounded-lg text-center text-lg shadow-xl w-full focus:border-blue-500 focus:ring-1 focus:ring-blue-500 outline-none"
                          placeholder="A"
                          id="questions"
                        />
                      </div>
                      <div className=" px-2 mx-3 py-2 flex w-[70px]">
                        <div className="w-[30px]">
                          <lable className="text-xl font-semibold ">2.</lable>
                        </div>
                        <input
                          type="text"
                          className="input font-semibold bg-white border-none border-gray-300 rounded-lg text-center text-lg shadow-xl w-full focus:border-blue-500 focus:ring-1 focus:ring-blue-500 outline-none"
                          placeholder="A"
                          id="questions"
                        />
                      </div>
                      <div className=" px-2 mx-3 py-2 flex w-[70px]">
                        <div className="w-[30px]">
                          <lable className="text-xl font-semibold ">3.</lable>
                        </div>
                        <input
                          type="text"
                          className="input font-semibold bg-white border-none border-gray-300 rounded-lg text-center text-lg shadow-xl w-full focus:border-blue-500 focus:ring-1 focus:ring-blue-500 outline-none"
                          placeholder="A"
                          id="questions"
                        />
                      </div>
                      <div className=" px-2 mx-3 py-2 flex w-[70px]">
                        <div className="w-[30px]">
                          <lable className="text-xl font-semibold ">4.</lable>
                        </div>
                        <input
                          type="text"
                          className="input font-semibold bg-white border-none border-gray-300 rounded-lg text-center text-lg shadow-xl w-full focus:border-blue-500 focus:ring-1 focus:ring-blue-500 outline-none"
                          placeholder="A"
                          id="questions"
                        />
                      </div>
                      <div className=" px-2 mx-3 py-2 flex w-[70px]">
                        <div className="w-[30px]">
                          <lable className="text-xl font-semibold ">5.</lable>
                        </div>
                        <input
                          type="text"
                          className="input font-semibold bg-white border-none border-gray-300 rounded-lg text-center text-lg shadow-xl w-full focus:border-blue-500 focus:ring-1 focus:ring-blue-500 outline-none"
                          placeholder="A"
                          id="questions"
                        />
                      </div>
                      <div className=" px-2 mx-3 py-2 flex w-[70px]">
                        <div className="w-[30px]">
                          <lable className="text-xl font-semibold ">6.</lable>
                        </div>
                        <input
                          type="text"
                          className="input font-semibold bg-white border-none border-gray-300 rounded-lg text-center text-lg shadow-xl w-full focus:border-blue-500 focus:ring-1 focus:ring-blue-500 outline-none"
                          placeholder="A"
                          id="questions"
                        />
                      </div>
                      <div className=" px-2 mx-3 py-2 flex w-[70px]">
                        <div className="w-[30px]">
                          <lable className="text-xl font-semibold ">7.</lable>
                        </div>
                        <input
                          type="text"
                          className="input font-semibold bg-white border-none border-gray-300 rounded-lg text-center text-lg shadow-xl w-full focus:border-blue-500 focus:ring-1 focus:ring-blue-500 outline-none"
                          placeholder="A"
                          id="questions"
                        />
                      </div>
                      <div className=" px-2 mx-3 py-2 flex w-[70px]">
                        <div className="w-[30px]">
                          <lable className="text-xl font-semibold ">8.</lable>
                        </div>
                        <input
                          type="text"
                          className="input font-semibold bg-white border-none border-gray-300 rounded-lg text-center text-lg shadow-xl w-full focus:border-blue-500 focus:ring-1 focus:ring-blue-500 outline-none"
                          placeholder="A"
                          id="questions"
                        />
                      </div>
                      <div className=" px-2 mx-3 py-2 flex w-[70px]">
                        <div className="w-[30px]">
                          <lable className="text-xl font-semibold ">9.</lable>
                        </div>
                        <input
                          type="text"
                          className="input font-semibold bg-white border-none border-gray-300 rounded-lg text-center text-lg shadow-xl w-full focus:border-blue-500 focus:ring-1 focus:ring-blue-500 outline-none"
                          placeholder="A"
                          id="questions"
                        />
                      </div>
                      <div className=" px-2 mx-3 py-2 flex w-[70px]">
                        <div className="w-[30px]">
                          <lable className="text-xl font-semibold ">10.</lable>
                        </div>
                        <input
                          type="text"
                          className="input font-semibold bg-white border-none border-gray-300 rounded-lg text-center text-lg shadow-xl w-full focus:border-blue-500 focus:ring-1 focus:ring-blue-500 outline-none"
                          placeholder="A"
                          id="questions"
                        />
                      </div>
                    </div>
                    <div className="flex-col ">
                      <div className=" px-2 mx-3 py-2 flex w-[70px]">
                        <div className="w-[30px]">
                          <lable className="text-xl font-semibold ">1.</lable>
                        </div>
                        <input
                          type="text"
                          className="input font-semibold bg-white border-none border-gray-300 rounded-lg text-center text-lg shadow-xl w-full focus:border-blue-500 focus:ring-1 focus:ring-blue-500 outline-none"
                          placeholder="A"
                          id="questions"
                        />
                      </div>
                      <div className=" px-2 mx-3 py-2 flex w-[70px]">
                        <div className="w-[30px]">
                          <lable className="text-xl font-semibold ">2.</lable>
                        </div>
                        <input
                          type="text"
                          className="input font-semibold bg-white border-none border-gray-300 rounded-lg text-center text-lg shadow-xl w-full focus:border-blue-500 focus:ring-1 focus:ring-blue-500 outline-none"
                          placeholder="A"
                          id="questions"
                        />
                      </div>
                      <div className=" px-2 mx-3 py-2 flex w-[70px]">
                        <div className="w-[30px]">
                          <lable className="text-xl font-semibold ">3.</lable>
                        </div>
                        <input
                          type="text"
                          className="input font-semibold bg-white border-none border-gray-300 rounded-lg text-center text-lg shadow-xl w-full focus:border-blue-500 focus:ring-1 focus:ring-blue-500 outline-none"
                          placeholder="A"
                          id="questions"
                        />
                      </div>
                      <div className=" px-2 mx-3 py-2 flex w-[70px]">
                        <div className="w-[30px]">
                          <lable className="text-xl font-semibold ">4.</lable>
                        </div>
                        <input
                          type="text"
                          className="input font-semibold bg-white border-none border-gray-300 rounded-lg text-center text-lg shadow-xl w-full focus:border-blue-500 focus:ring-1 focus:ring-blue-500 outline-none"
                          placeholder="A"
                          id="questions"
                        />
                      </div>
                      <div className=" px-2 mx-3 py-2 flex w-[70px]">
                        <div className="w-[30px]">
                          <lable className="text-xl font-semibold ">5.</lable>
                        </div>
                        <input
                          type="text"
                          className="input font-semibold bg-white border-none border-gray-300 rounded-lg text-center text-lg shadow-xl w-full focus:border-blue-500 focus:ring-1 focus:ring-blue-500 outline-none"
                          placeholder="A"
                          id="questions"
                        />
                      </div>
                      <div className=" px-2 mx-3 py-2 flex w-[70px]">
                        <div className="w-[30px]">
                          <lable className="text-xl font-semibold ">6.</lable>
                        </div>
                        <input
                          type="text"
                          className="input font-semibold bg-white border-none border-gray-300 rounded-lg text-center text-lg shadow-xl w-full focus:border-blue-500 focus:ring-1 focus:ring-blue-500 outline-none"
                          placeholder="A"
                          id="questions"
                        />
                      </div>
                      <div className=" px-2 mx-3 py-2 flex w-[70px]">
                        <div className="w-[30px]">
                          <lable className="text-xl font-semibold ">7.</lable>
                        </div>
                        <input
                          type="text"
                          className="input font-semibold bg-white border-none border-gray-300 rounded-lg text-center text-lg shadow-xl w-full focus:border-blue-500 focus:ring-1 focus:ring-blue-500 outline-none"
                          placeholder="A"
                          id="questions"
                        />
                      </div>
                      <div className=" px-2 mx-3 py-2 flex w-[70px]">
                        <div className="w-[30px]">
                          <lable className="text-xl font-semibold ">8.</lable>
                        </div>
                        <input
                          type="text"
                          className="input font-semibold bg-white border-none border-gray-300 rounded-lg text-center text-lg shadow-xl w-full focus:border-blue-500 focus:ring-1 focus:ring-blue-500 outline-none"
                          placeholder="A"
                          id="questions"
                        />
                      </div>
                      <div className=" px-2 mx-3 py-2 flex w-[70px]">
                        <div className="w-[30px]">
                          <lable className="text-xl font-semibold ">9.</lable>
                        </div>
                        <input
                          type="text"
                          className="input font-semibold bg-white border-none border-gray-300 rounded-lg text-center text-lg shadow-xl w-full focus:border-blue-500 focus:ring-1 focus:ring-blue-500 outline-none"
                          placeholder="A"
                          id="questions"
                        />
                      </div>
                      <div className=" px-2 mx-3 py-2 flex w-[70px]">
                        <div className="w-[30px]">
                          <lable className="text-xl font-semibold ">10.</lable>
                        </div>
                        <input
                          type="text"
                          className="input font-semibold bg-white border-none border-gray-300 rounded-lg text-center text-lg shadow-xl w-full focus:border-blue-500 focus:ring-1 focus:ring-blue-500 outline-none"
                          placeholder="A"
                          id="questions"
                        />
                      </div>
                    </div>
                    <div className="flex-col ">
                      <div className=" px-2 mx-3 py-2 flex w-[70px]">
                        <div className="w-[30px]">
                          <lable className="text-xl font-semibold ">1.</lable>
                        </div>
                        <input
                          type="text"
                          className="input font-semibold bg-white border-none border-gray-300 rounded-lg text-center text-lg shadow-xl w-full focus:border-blue-500 focus:ring-1 focus:ring-blue-500 outline-none"
                          placeholder="A"
                          id="questions"
                        />
                      </div>
                      <div className=" px-2 mx-3 py-2 flex w-[70px]">
                        <div className="w-[30px]">
                          <lable className="text-xl font-semibold ">2.</lable>
                        </div>
                        <input
                          type="text"
                          className="input font-semibold bg-white border-none border-gray-300 rounded-lg text-center text-lg shadow-xl w-full focus:border-blue-500 focus:ring-1 focus:ring-blue-500 outline-none"
                          placeholder="A"
                          id="questions"
                        />
                      </div>
                      <div className=" px-2 mx-3 py-2 flex w-[70px]">
                        <div className="w-[30px]">
                          <lable className="text-xl font-semibold ">3.</lable>
                        </div>
                        <input
                          type="text"
                          className="input font-semibold bg-white border-none border-gray-300 rounded-lg text-center text-lg shadow-xl w-full focus:border-blue-500 focus:ring-1 focus:ring-blue-500 outline-none"
                          placeholder="A"
                          id="questions"
                        />
                      </div>
                      <div className=" px-2 mx-3 py-2 flex w-[70px]">
                        <div className="w-[30px]">
                          <lable className="text-xl font-semibold ">4.</lable>
                        </div>
                        <input
                          type="text"
                          className="input font-semibold bg-white border-none border-gray-300 rounded-lg text-center text-lg shadow-xl w-full focus:border-blue-500 focus:ring-1 focus:ring-blue-500 outline-none"
                          placeholder="A"
                          id="questions"
                        />
                      </div>
                      <div className=" px-2 mx-3 py-2 flex w-[70px]">
                        <div className="w-[30px]">
                          <lable className="text-xl font-semibold ">5.</lable>
                        </div>
                        <input
                          type="text"
                          className="input font-semibold bg-white border-none border-gray-300 rounded-lg text-center text-lg shadow-xl w-full focus:border-blue-500 focus:ring-1 focus:ring-blue-500 outline-none"
                          placeholder="A"
                          id="questions"
                        />
                      </div>
                      <div className=" px-2 mx-3 py-2 flex w-[70px]">
                        <div className="w-[30px]">
                          <lable className="text-xl font-semibold ">6.</lable>
                        </div>
                        <input
                          type="text"
                          className="input font-semibold bg-white border-none border-gray-300 rounded-lg text-center text-lg shadow-xl w-full focus:border-blue-500 focus:ring-1 focus:ring-blue-500 outline-none"
                          placeholder="A"
                          id="questions"
                        />
                      </div>
                      <div className=" px-2 mx-3 py-2 flex w-[70px]">
                        <div className="w-[30px]">
                          <lable className="text-xl font-semibold ">7.</lable>
                        </div>
                        <input
                          type="text"
                          className="input font-semibold bg-white border-none border-gray-300 rounded-lg text-center text-lg shadow-xl w-full focus:border-blue-500 focus:ring-1 focus:ring-blue-500 outline-none"
                          placeholder="A"
                          id="questions"
                        />
                      </div>
                      <div className=" px-2 mx-3 py-2 flex w-[70px]">
                        <div className="w-[30px]">
                          <lable className="text-xl font-semibold ">8.</lable>
                        </div>
                        <input
                          type="text"
                          className="input font-semibold bg-white border-none border-gray-300 rounded-lg text-center text-lg shadow-xl w-full focus:border-blue-500 focus:ring-1 focus:ring-blue-500 outline-none"
                          placeholder="A"
                          id="questions"
                        />
                      </div>
                      <div className=" px-2 mx-3 py-2 flex w-[70px]">
                        <div className="w-[30px]">
                          <lable className="text-xl font-semibold ">9.</lable>
                        </div>
                        <input
                          type="text"
                          className="input font-semibold bg-white border-none border-gray-300 rounded-lg text-center text-lg shadow-xl w-full focus:border-blue-500 focus:ring-1 focus:ring-blue-500 outline-none"
                          placeholder="A"
                          id="questions"
                        />
                      </div>
                      <div className=" px-2 mx-3 py-2 flex w-[70px]">
                        <div className="w-[30px]">
                          <lable className="text-xl font-semibold ">10.</lable>
                        </div>
                        <input
                          type="text"
                          className="input font-semibold bg-white border-none border-gray-300 rounded-lg text-center text-lg shadow-xl w-full focus:border-blue-500 focus:ring-1 focus:ring-blue-500 outline-none"
                          placeholder="A"
                          id="questions"
                        />
                      </div>
                    </div>
                    <div className="flex-col ">
                      <div className=" px-2 mx-3 py-2 flex w-[70px]">
                        <div className="w-[30px]">
                          <lable className="text-xl font-semibold ">1.</lable>
                        </div>
                        <input
                          type="text"
                          className="input font-semibold bg-white border-none border-gray-300 rounded-lg text-center text-lg shadow-xl w-full focus:border-blue-500 focus:ring-1 focus:ring-blue-500 outline-none"
                          placeholder="A"
                          id="questions"
                        />
                      </div>
                      <div className=" px-2 mx-3 py-2 flex w-[70px]">
                        <div className="w-[30px]">
                          <lable className="text-xl font-semibold ">2.</lable>
                        </div>
                        <input
                          type="text"
                          className="input font-semibold bg-white border-none border-gray-300 rounded-lg text-center text-lg shadow-xl w-full focus:border-blue-500 focus:ring-1 focus:ring-blue-500 outline-none"
                          placeholder="A"
                          id="questions"
                        />
                      </div>
                      <div className=" px-2 mx-3 py-2 flex w-[70px]">
                        <div className="w-[30px]">
                          <lable className="text-xl font-semibold ">3.</lable>
                        </div>
                        <input
                          type="text"
                          className="input font-semibold bg-white border-none border-gray-300 rounded-lg text-center text-lg shadow-xl w-full focus:border-blue-500 focus:ring-1 focus:ring-blue-500 outline-none"
                          placeholder="A"
                          id="questions"
                        />
                      </div>
                      <div className=" px-2 mx-3 py-2 flex w-[70px]">
                        <div className="w-[30px]">
                          <lable className="text-xl font-semibold ">4.</lable>
                        </div>
                        <input
                          type="text"
                          className="input font-semibold bg-white border-none border-gray-300 rounded-lg text-center text-lg shadow-xl w-full focus:border-blue-500 focus:ring-1 focus:ring-blue-500 outline-none"
                          placeholder="A"
                          id="questions"
                        />
                      </div>
                      <div className=" px-2 mx-3 py-2 flex w-[70px]">
                        <div className="w-[30px]">
                          <lable className="text-xl font-semibold ">5.</lable>
                        </div>
                        <input
                          type="text"
                          className="input font-semibold bg-white border-none border-gray-300 rounded-lg text-center text-lg shadow-xl w-full focus:border-blue-500 focus:ring-1 focus:ring-blue-500 outline-none"
                          placeholder="A"
                          id="questions"
                        />
                      </div>
                      <div className=" px-2 mx-3 py-2 flex w-[70px]">
                        <div className="w-[30px]">
                          <lable className="text-xl font-semibold ">6.</lable>
                        </div>
                        <input
                          type="text"
                          className="input font-semibold bg-white border-none border-gray-300 rounded-lg text-center text-lg shadow-xl w-full focus:border-blue-500 focus:ring-1 focus:ring-blue-500 outline-none"
                          placeholder="A"
                          id="questions"
                        />
                      </div>
                      <div className=" px-2 mx-3 py-2 flex w-[70px]">
                        <div className="w-[30px]">
                          <lable className="text-xl font-semibold ">7.</lable>
                        </div>
                        <input
                          type="text"
                          className="input font-semibold bg-white border-none border-gray-300 rounded-lg text-center text-lg shadow-xl w-full focus:border-blue-500 focus:ring-1 focus:ring-blue-500 outline-none"
                          placeholder="A"
                          id="questions"
                        />
                      </div>
                      <div className=" px-2 mx-3 py-2 flex w-[70px]">
                        <div className="w-[30px]">
                          <lable className="text-xl font-semibold ">8.</lable>
                        </div>
                        <input
                          type="text"
                          className="input font-semibold bg-white border-none border-gray-300 rounded-lg text-center text-lg shadow-xl w-full focus:border-blue-500 focus:ring-1 focus:ring-blue-500 outline-none"
                          placeholder="A"
                          id="questions"
                        />
                      </div>
                      <div className=" px-2 mx-3 py-2 flex w-[70px]">
                        <div className="w-[30px]">
                          <lable className="text-xl font-semibold ">9.</lable>
                        </div>
                        <input
                          type="text"
                          className="input font-semibold bg-white border-none border-gray-300 rounded-lg text-center text-lg shadow-xl w-full focus:border-blue-500 focus:ring-1 focus:ring-blue-500 outline-none"
                          placeholder="A"
                          id="questions"
                        />
                      </div>
                      <div className=" px-2 mx-3 py-2 flex w-[70px]">
                        <div className="w-[30px]">
                          <lable className="text-xl font-semibold ">10.</lable>
                        </div>
                        <input
                          type="text"
                          className="input font-semibold bg-white border-none border-gray-300 rounded-lg text-center text-lg shadow-xl w-full focus:border-blue-500 focus:ring-1 focus:ring-blue-500 outline-none"
                          placeholder="A"
                          id="questions"
                        />
                      </div>
                    </div>
                    <div className="flex-col ">
                      <div className=" px-2 mx-3 py-2 flex w-[70px]">
                        <div className="w-[30px]">
                          <lable className="text-xl font-semibold ">1.</lable>
                        </div>
                        <input
                          type="text"
                          className="input font-semibold bg-white border-none border-gray-300 rounded-lg text-center text-lg shadow-xl w-full focus:border-blue-500 focus:ring-1 focus:ring-blue-500 outline-none"
                          placeholder="A"
                          id="questions"
                        />
                      </div>
                      <div className=" px-2 mx-3 py-2 flex w-[70px]">
                        <div className="w-[30px]">
                          <lable className="text-xl font-semibold ">2.</lable>
                        </div>
                        <input
                          type="text"
                          className="input font-semibold bg-white border-none border-gray-300 rounded-lg text-center text-lg shadow-xl w-full focus:border-blue-500 focus:ring-1 focus:ring-blue-500 outline-none"
                          placeholder="A"
                          id="questions"
                        />
                      </div>
                      <div className=" px-2 mx-3 py-2 flex w-[70px]">
                        <div className="w-[30px]">
                          <lable className="text-xl font-semibold ">3.</lable>
                        </div>
                        <input
                          type="text"
                          className="input font-semibold bg-white border-none border-gray-300 rounded-lg text-center text-lg shadow-xl w-full focus:border-blue-500 focus:ring-1 focus:ring-blue-500 outline-none"
                          placeholder="A"
                          id="questions"
                        />
                      </div>
                      <div className=" px-2 mx-3 py-2 flex w-[70px]">
                        <div className="w-[30px]">
                          <lable className="text-xl font-semibold ">4.</lable>
                        </div>
                        <input
                          type="text"
                          className="input font-semibold bg-white border-none border-gray-300 rounded-lg text-center text-lg shadow-xl w-full focus:border-blue-500 focus:ring-1 focus:ring-blue-500 outline-none"
                          placeholder="A"
                          id="questions"
                        />
                      </div>
                      <div className=" px-2 mx-3 py-2 flex w-[70px]">
                        <div className="w-[30px]">
                          <lable className="text-xl font-semibold ">5.</lable>
                        </div>
                        <input
                          type="text"
                          className="input font-semibold bg-white border-none border-gray-300 rounded-lg text-center text-lg shadow-xl w-full focus:border-blue-500 focus:ring-1 focus:ring-blue-500 outline-none"
                          placeholder="A"
                          id="questions"
                        />
                      </div>
                      <div className=" px-2 mx-3 py-2 flex w-[70px]">
                        <div className="w-[30px]">
                          <lable className="text-xl font-semibold ">6.</lable>
                        </div>
                        <input
                          type="text"
                          className="input font-semibold bg-white border-none border-gray-300 rounded-lg text-center text-lg shadow-xl w-full focus:border-blue-500 focus:ring-1 focus:ring-blue-500 outline-none"
                          placeholder="A"
                          id="questions"
                        />
                      </div>
                      <div className=" px-2 mx-3 py-2 flex w-[70px]">
                        <div className="w-[30px]">
                          <lable className="text-xl font-semibold ">7.</lable>
                        </div>
                        <input
                          type="text"
                          className="input font-semibold bg-white border-none border-gray-300 rounded-lg text-center text-lg shadow-xl w-full focus:border-blue-500 focus:ring-1 focus:ring-blue-500 outline-none"
                          placeholder="A"
                          id="questions"
                        />
                      </div>
                      <div className=" px-2 mx-3 py-2 flex w-[70px]">
                        <div className="w-[30px]">
                          <lable className="text-xl font-semibold ">8.</lable>
                        </div>
                        <input
                          type="text"
                          className="input font-semibold bg-white border-none border-gray-300 rounded-lg text-center text-lg shadow-xl w-full focus:border-blue-500 focus:ring-1 focus:ring-blue-500 outline-none"
                          placeholder="A"
                          id="questions"
                        />
                      </div>
                      <div className=" px-2 mx-3 py-2 flex w-[70px]">
                        <div className="w-[30px]">
                          <lable className="text-xl font-semibold ">9.</lable>
                        </div>
                        <input
                          type="text"
                          className="input font-semibold bg-white border-none border-gray-300 rounded-lg text-center text-lg shadow-xl w-full focus:border-blue-500 focus:ring-1 focus:ring-blue-500 outline-none"
                          placeholder="A"
                          id="questions"
                        />
                      </div>
                      <div className=" px-2 mx-3 py-2 flex w-[70px]">
                        <div className="w-[30px]">
                          <lable className="text-xl font-semibold ">10.</lable>
                        </div>
                        <input
                          type="text"
                          className="input font-semibold bg-white border-none border-gray-300 rounded-lg text-center text-lg shadow-xl w-full focus:border-blue-500 focus:ring-1 focus:ring-blue-500 outline-none"
                          placeholder="A"
                          id="questions"
                        />
                      </div>
                    </div>
                    
                    
                  </div>
                </div>
              </article>
            </div>

            {/* View image */}
          </div>
          <div className="w-full lg:w-9/12 order-1 order-lg-2">
            {image ? (
              <div
                className="flex justify-center items-center "
                style={{ backgroundColor: "#8ABFB0" }}
              >
                <div className="">
                  <ImageNotFound />

                  <h1 className="mt-8 text-2xl font-bold tracking-tight text-gray-700 sm:text-4xl">
                    Please Select Image...
                  </h1>

                  <p className="mt-4 text-gray-600 text-center">
                    We can't find that page!!
                  </p>
                </div>
              </div>
            ) : (
              <div className="mt-10 ">
                <div
                  className="mx-auto"
                  style={{
                    position: "relative",
                    border: "2px solid gray",
                    width: "48rem",
                    height: "35rem",
                    overflow: "auto",
                  }}
                >
                  <img
                    src={images}
                    alt="Selected"
                    style={{
                      width: "48rem",
                      height: "50rem",
                    }}
                    draggable={false}
                  />

                  <>
                    {templateHeaders?.templetedata?.map((data, index) => (
                      <div
                        key={index}
                        className="border-blue-500"
                        style={{
                          border: "2px solid #007bff",
                          position: "absolute",
                          left: `${data.coordinateX}px`,
                          top: `${data.coordinateY}px`,
                          width: `${data.width}px`,
                          height: `${data.height}px`,
                        }}
                      ></div>
                    ))}
                  </>
                </div>

                <div className="flex float-right gap-4 py-6 lg:py-24 px-16 lg:px-24">
                  <button
                    onClick={() => onStartHandler("prev")}
                    className="inline-block rounded border  bg-green-700 px-8 py-2 hover:shadow-xl text-xl font-medium text-white hover:bg-green-600 focus:outline-none focus:ring "
                  >
                    Prev
                  </button>

                  <button
                    onClick={() => onStartHandler("next")}
                    className="inline-block rounded border  bg-green-700 px-8 py-2 text-xl font-medium hover:shadow-xl text-white hover:bg-green-600  focus:outline-none focus:ring "
                  >
                    Next
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>
      )}
    </>
  );
};

export default ImageChanger;
