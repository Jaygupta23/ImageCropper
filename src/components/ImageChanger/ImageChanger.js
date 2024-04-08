import React, { useState, useRef, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import ImageNotFound from "../ImageNotFound/ImageNotFound";
import { MdDelete } from "react-icons/md";
import "../../App.css";
import imageChange from "../../assets/Screenshot 2024-03-28 150535.png";
import { GrCaretNext, GrCaretPrevious } from "react-icons/gr";

const ImageChanger = () => {
  const [image, setImage] = useState(null);
  const [selection, setSelection] = useState(null);
  const [dragStart, setDragStart] = useState(null);
  // const [selectedOption, setSelectedOption] = useState("");
  const [inputField, setInputField] = useState("");
  const [allSelectedData, setAllSelectedData] = useState([]);
  const [popUp, setPopUp] = useState(true);
  const imageRef = useRef(null);

  const location = useLocation();
  const navigate = useNavigate();

  const { imageURL } = location.state ? location.state : "";
  useEffect(() => {
    setImage(imageURL);
  }, []);

  // Function to handle mouse down event for drag selection
  // const handleMouseDown = (e) => {
  //   const boundingRect = imageRef.current.getBoundingClientRect();
  //   const offsetX = e.clientX - boundingRect.left;
  //   const offsetY = e.clientY - boundingRect.top;
  //   setDragStart({ x: offsetX, y: offsetY });
  // };

  // Function to handle mouse up event for drag selection
  // const handleMouseUp = () => {
  //   if (dragStart) {
  //     setDragStart(null);
  //     // Remove event listener for mousemove when dragging ends
  //   }
  // };
  // // Function to handle mouse move event for drag selection
  // const handleMouseMove = (e) => {
  //   if (!e.buttons || !dragStart) {
  //     return;
  //   }

  //   const boundingRect = imageRef?.current.getBoundingClientRect();
  //   const offsetX = e.clientX - boundingRect.left;
  //   const offsetY = e.clientY - boundingRect.top;

  //   setSelection({
  //     x: Math.min(dragStart.x, offsetX),
  //     y: Math.min(dragStart.y, offsetY),
  //     width: Math.abs(offsetX - dragStart.x),
  //     height: Math.abs(offsetY - dragStart.y),
  //   });
  // };

  // Function to submit drag selection and name of options like -> Roll Number , or Subject
  const onSelectedHandler = () => {
    if (inputField) {
      const newObj = {
        ...selection,
        id: Math.random().toString(),
        name: inputField,
      };

      setAllSelectedData((prev) => [...prev, newObj]);

      setInputField("");
      setSelection(null);
      setDragStart(null);
    } else {
      alert("Please select option!");
    }
  };
  const onclickHandler = () => {
    setPopUp(false);
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
        <div className="flex h-[100vh]">
          {/* LEFT SECTION  */}

          <div className="flex flex-1 flex-col justify-between border-e bg-slate-300">
            <div className="px-4 py-6">
              <ul className="my-14 space-y-1 ">
                {/* <li
                style={{ marginTop: "40px" }}
                className="block w-full rounded-lg bg-gray-100 px-4 py-2 text-sm font-medium  mb-5"
              >
                <div className="overflow-x-auto">
                  <table className="mt-3 table border-collapse border border-slate-400 min-w-full divide-y-2 divide-gray-200 bg-white text-sm rounded-lg">
                    <thead className="ltr:text-left rtl:text-right">
                      <tr>
                        <th className="text-center whitespace-nowrap px-4 py-2 font-semibold text-lg text-gray-100">
                          Field
                        </th>
                        <th className="text-center whitespace-nowrap px-4 py-2 font-semibold text-lg text-gray-100">
                          Delete
                        </th>
                      </tr>
                    </thead>

                    <tbody className="divide-y divide-gray-200">
                      {allSelectedData &&
                        allSelectedData?.map((data) => (
                          <tr key={data.id} className="odd:bg-gray-50">
                            <td className="whitespace-nowrap px-4 py-2 text-center font-semibold text-md text-gray-900">
                              {data.name}
                            </td>
                            <td className="whitespace-nowrap px-4 py-2 text-center font-semibold text-md text-gray-900">
                              <MdDelete className="mx-auto text-red-500 text-xl" />
                            </td>
                          </tr>
                        ))}
                    </tbody>
                  </table>
                </div>
              </li> */}

                {/* Form Field Area */}

                <div className=" bg-gradient-to-b from-white to-gray-100 rounded-3xl px-4 pt-1 pb-4 border-1 border-gray shadow-md mb-10 mx-2">
                  <form action="" className="form">
                    <h1 className="text-2xl font-semibold my-3 text-gray-600">
                      Student Data
                    </h1>
                    <div>
                      <input
                        required=""
                        className="input w-full font-semibold bg-white  border-none rounded-xl p-3 mb-3 shadow-xl   focus:border-blue-500 focus:ring-1 focus:ring-blue-500 outline-none"
                        type="text"
                        name=""
                        placeholder="Name.."
                      />
                    </div>
                    <input
                      required=""
                      className="input w-full font-semibold bg-white border-none rounded-xl p-3 mb-3 shadow-xl   focus:border-blue-500 focus:ring-1 focus:ring-blue-500 outline-none focus:outline-none"
                      type="text"
                      name="feildData"
                      placeholder="School Name.."
                    />
                    <input
                      required=""
                      className="input w-full font-semibold bg-white border-none rounded-xl p-3 mb-3 shadow-xl   focus:border-blue-500 focus:ring-1 focus:ring-blue-500 outline-none focus:outline-none"
                      type="text"
                      name="feildData"
                      placeholder="Roll No.."
                    />
                    <input
                      required=""
                      className="input w-full font-semibold bg-white border-none rounded-xl p-3 mb-3 shadow-xl   focus:border-blue-500 focus:ring-1 focus:ring-blue-500 outline-none focus:outline-none"
                      type="text"
                      name="feildData"
                      placeholder="Questions.."
                    />
                    <input
                      required=""
                      className="input w-full font-semibold bg-white border-none rounded-xl p-3 mb-3 shadow-xl   focus:border-blue-500 focus:ring-1 focus:ring-blue-500 outline-none focus:outline-none"
                      type="text"
                      name="feildData"
                      placeholder="Image.."
                    />
                  </form>
                </div>

                {/* Save Template */}
                <div className="flex justify-end gap-2 me-2">
                  <a
                    className=" group flex rounded-lg border border-indigo-600 bg-teal-600  py-1  transition-colors hover:bg-teal-700 focus:outline-none focus:ring"
                    href="#"
                    // onClick= {() => (
                    //   navigate("/")
                    // )}
                  >
                    <span className=" font-medium text-lg flex text-white transition-colors group-hover:text-indigo-600 group-active:text-indigo-500 mx-3">
                      Prev
                    </span>
                  </a>
                  <a
                    className=" group flex rounded-lg border border-indigo-600 bg-teal-600  py-1  transition-colors hover:bg-teal-700 focus:outline-none focus:ring"
                    href="#"
                    // onClick= {() => (
                    //   navigate("/")
                    // )}
                  >
                    <span className=" font-medium text-lg flex text-white transition-colors group-hover:text-indigo-600 group-active:text-indigo-500 mx-3">
                      Next
                    </span>
                  </a>
                </div>
              </ul>
            </div>
          </div>

          {/* RIGHT SECTION  */}

          {
            // !image ? (
            //   <div className="flex justify-center items-center bg-gray-400 w-[70%]">
            //     <div className="">
            //       <ImageNotFound />

            //       <h1 className="mt-8 text-2xl font-bold tracking-tight text-gray-700 sm:text-4xl">
            //         Please Select Image...
            //       </h1>

            //       <p className="mt-4 text-gray-600 text-center">
            //         We can't find that page!!
            //       </p>
            //     </div>
            //   </div>
            // ) : (
            <div className="w-[65%] bg-slate-500 pb-2">
              <div className="mx-auto max-w-screen-xl px-2 lg:pt-2 sm:px-6 lg:px-8">
                <ul className="mt-2 flex justify-center pt-6 py-4">
                  <li className="w-[65%]">
                    {
                      <div
                        style={{
                          position: "relative",
                          border: "2px solid gray",
                        }}
                      >
                        <img
                          ref={imageRef}
                          src={imageChange}
                          alt="Selected"
                          draggable={false}
                          style={{
                            width: "100%",
                            height: "810px",
                            cursor: "crosshair",
                          }}
                          // onMouseDown={handleMouseDown}
                          // onMouseUp={handleMouseUp}
                          // onMouseMove={handleMouseMove}
                          // draggable={false}
                          data-bs-toggle="modal"
                          data-bs-target="#exampleModal"
                        />
                        {selection && (
                          <>
                            <div
                              className="border-blue-500"
                              style={{
                                border: "2px solid #007bff",
                                position: "absolute",
                                left: selection.x,
                                top: selection.y,
                                width: selection.width,
                                height: selection.height,
                              }}
                            ></div>
                            <div
                              className="modal fade"
                              id="exampleModal"
                              tabIndex="-1"
                              aria-labelledby="exampleModalLabel"
                              aria-hidden="true"
                            >
                              <div className="modal-dialog modal-dialog-centered">
                                <div className="modal-content px-3 py-2">
                                  <div className="modal-header">
                                    <h1
                                      className="modal-title fs-5 fw-semibold text-gray-600"
                                      id="exampleModalLabel"
                                    >
                                      Add Field Entity..
                                    </h1>
                                    <button
                                      type="button"
                                      className="btn-close"
                                      data-bs-dismiss="modal"
                                      aria-label="Close"
                                      onClick={() => setSelection("")}
                                    ></button>
                                  </div>
                                  <div className="modal-body flex justify-between my-2">
                                    <input
                                      required=""
                                      className="input w-[72%] font-semibold bg-white text-lg focus:border-1 rounded-xl px-3 py-2  shadow-xl   focus:border-blue-500 focus:ring-1 focus:ring-blue-500 outline-none"
                                      type="text"
                                      name="field"
                                      placeholder="Field.."
                                      value={inputField}
                                      onChange={(e) =>
                                        setInputField(e.target.value)
                                      }
                                    />
                                    <button
                                      type="button"
                                      data-bs-dismiss="modal"
                                      className="btn bg-teal-600 hover:bg-teal-500 text-white font-semibold"
                                      onClick={onSelectedHandler}
                                    >
                                      Save Field
                                    </button>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </>
                        )}
                      </div>
                    }
                  </li>
                </ul>
              </div>
            </div>
            // )
          }
        </div>
      )}
    </>
  );
};

export default ImageChanger;
