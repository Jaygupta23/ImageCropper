import React, { useState, useRef, useEffect } from "react";
import { useLocation } from "react-router-dom";
import ImageUploader from "../ImageUploader/ImageUploader";
import ImageNotFound from "../ImageNotFound/ImageNotFound";

const ImageScanner = () => {
  const [image, setImage] = useState(null);
  const [selection, setSelection] = useState(null);
  const [dragStart, setDragStart] = useState(null);
  const [selectedOption, setSelectedOption] = useState("");
  const [allSelectedData, setAllSelectedData] = useState([]);
  const imageRef = useRef(null);

  const location = useLocation();

  const { imageURL } = location.state ? location.state : "";
  useEffect(() => {
    setImage(imageURL);
  }, []);

  // Function to handle image selection
  const handleImageChange = (e) => {
    if (e.target.files[0]) {
      const file = e.target.files[0];
      const reader = new FileReader();

      reader.onload = () => {
        setImage(reader.result);
      };

      reader?.readAsDataURL(file);
    }
    setSelection(null);
  };

  // Function to handle mouse down event for drag selection
  const handleMouseDown = (e) => {
    const boundingRect = imageRef.current.getBoundingClientRect();
    const offsetX = e.clientX - boundingRect.left;
    const offsetY = e.clientY - boundingRect.top;
    setDragStart({ x: offsetX, y: offsetY });
  };

  // Function to handle mouse up event for drag selection
  const handleMouseUp = () => {
    if (dragStart) {
      setDragStart(null);
      // Remove event listener for mousemove when dragging ends
    }
  };
  // Function to handle mouse move event for drag selection
  const handleMouseMove = (e) => {
    if (!e.buttons || !dragStart) {
      return;
    }

    const boundingRect = imageRef?.current.getBoundingClientRect();
    const offsetX = e.clientX - boundingRect.left;
    const offsetY = e.clientY - boundingRect.top;

    setSelection({
      x: Math.min(dragStart.x, offsetX),
      y: Math.min(dragStart.y, offsetY),
      width: Math.abs(offsetX - dragStart.x),
      height: Math.abs(offsetY - dragStart.y),
    });
  };
  // Function to reset drag selection
  const onResetHandler = () => {
    setDragStart(null);
    setSelection(null);
  };

  // Function to submit drag selection and name of options like -> Roll Number , or Subject
  const onSelectedHandler = () => {
    if (selectedOption) {
      const newObj = {
        ...selection,
        id: Math.random().toString(),
        name: selectedOption,
      };

      setAllSelectedData((prev) => [...prev, newObj]);

      setSelectedOption("");
      setSelection(null);
      setDragStart(null);
    } else {
      alert("Please select option!");
    }
  };

  return (
    <div className="flex">
      {/* LEFT SECTION  */}
      <div className="flex w-[35%]">
        <div className="flex h-screen w-16 flex-col justify-between border-e bg-white">
          <div>
            <div className="inline-flex size-16 items-center justify-center">
              <span className="grid size-10 place-content-center rounded-lg bg-gray-100 text-xs text-gray-600 font-bold">
                SCAN
              </span>
            </div>

            <div className="border-t border-gray-100">
              <div className="px-2">
                <div className="py-4">
                  <button className="t group relative flex justify-center rounded bg-blue-50 px-2 py-1.5 text-blue-700">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="size-5 opacity-75"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth="2"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"
                      />
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                      />
                    </svg>
                    <span className="invisible absolute start-full top-1/2 ms-4 -translate-y-1/2 rounded bg-gray-900 px-2 py-1.5 text-xs font-medium text-white group-hover:visible">
                      General
                    </span>
                  </button>
                </div>

                <ul className="space-y-1 border-t border-gray-100 pt-4">
                  <li>
                    <button className="group relative flex justify-center rounded px-2 py-1.5 text-gray-500 hover:bg-gray-50 hover:text-gray-700">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="size-5 opacity-75"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        strokeWidth="2"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
                        />
                      </svg>

                      <span className="invisible absolute start-full top-1/2 ms-4 -translate-y-1/2 rounded bg-gray-900 px-2 py-1.5 text-xs font-medium text-white group-hover:visible">
                        Teams
                      </span>
                    </button>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <div className="sticky inset-x-0 bottom-0 border-t border-gray-100 bg-white p-2">
            <form action="#">
              <button
                type="submit"
                className="group relative flex w-full justify-center rounded-lg px-2 py-1.5 text-sm text-gray-500 hover:bg-gray-50 hover:text-gray-700"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="size-5 opacity-75"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1"
                  />
                </svg>

                <span className="invisible absolute start-full top-1/2 ms-4 -translate-y-1/2 rounded bg-gray-900 px-2 py-1.5 text-xs font-medium text-white group-hover:visible">
                  Logout
                </span>
              </button>
            </form>
          </div>
        </div>
        <div className="flex h-screen flex-1 flex-col justify-between border-e bg-white">
          <div className="px-4 py-6">
            <ul className="mt-14 space-y-1">
            
              <li>
                <details className="group [&_summary::-webkit-details-marker]:hidden mt-7">
                  <summary className="flex cursor-pointer items-center justify-between rounded-lg px-4 py-2 text-gray-500 bg-gray-100 hover:text-gray-700">
                    {selection && (
                      <div className="w-72 flex gap-4">
                        <select
                          onChange={(e) => setSelectedOption(e.target.value)}
                          name="selectedFields"
                          id="selectedFields"
                          className="rounded-lg border-gray-300 text-gray-700 sm:text-sm px-4 py-2 w-full bg-white shadow-sm focus:outline-none focus:border-blue-500"
                        >
                          <option value="">Please select</option>
                          <option value="Subjects">Subjects</option>
                          <option value="Roll Number">Roll Numbers</option>
                          <option value="Series">Series</option>
                        </select>
                        <button
                          onClick={onSelectedHandler}
                          className="inline-block rounded border border-green-600 px-6 py-2 text-sm font-medium text-white bg-green-400 hover:bg-green-600  focus:outline-none focus:ring active:bg-indigo-500"
                        >
                          Submit
                        </button>
                      </div>
                    )}
                  </summary>
                </details>
              </li>
              <li
                style={{ marginTop: "40px" }}
                className="block w-full rounded-lg bg-gray-100 px-4 py-2 text-sm font-medium text-gray-700"
              >
                <div className="overflow-x-auto">
                  <table className="min-w-full divide-y-2 divide-gray-200 bg-white text-sm">
                    <thead className="ltr:text-left rtl:text-right">
                      <tr>
                        <th className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">
                          Name
                        </th>
                        <th className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">
                          width
                        </th>
                        <th className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">
                          height
                        </th>
                        <th className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">
                          x-coordinate
                        </th>
                        <th className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">
                          y-coordinate
                        </th>
                      </tr>
                    </thead>

                    <tbody className="divide-y divide-gray-200">
                      {allSelectedData &&
                        allSelectedData?.map((data) => (
                          <tr key={data.id} className="odd:bg-gray-50">
                            <td className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">
                              {data.name}
                            </td>
                            <td className="whitespace-nowrap px-4 py-2 text-gray-700">
                              {data.width}
                            </td>
                            <td className="whitespace-nowrap px-4 py-2 text-gray-700">
                              {data.height}
                            </td>
                            <td className="whitespace-nowrap px-4 py-2 text-gray-700">
                              {data.x}
                            </td>
                            <td className="whitespace-nowrap px-4 py-2 text-gray-700">
                              {data.y}
                            </td>
                          </tr>
                        ))}
                    </tbody>
                  </table>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* RIGHT SECTION  */}

      {!image ? (
        <div className="flex justify-center items-center bg-gray-400 w-full">
          <div className="">
            <ImageNotFound />

            <h1 className="mt-8 text-2xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              Please Select Image...
            </h1>

            <p className="mt-4 text-gray-500 text-center">We can't find that page!!</p>
          </div>
        </div>
      ) : (
        <div className="w-[65%] bg-gray-400">
          <section>
            <div className="mx-auto max-w-screen-xl px-2 py-2 sm:px-6 sm:py-6 lg:px-8">
              <header className="text-center">
                <h1 className="text-2xl mb-6 font-bold text-white sm:text-3xl">
                  Selected Image
                </h1>
              </header>
              <ul className="mt-2 flex justify-center items-center">
                <li>
                  <div>
                    {image && (
                      <div
                        style={{
                          position: "relative",
                          border: "2px solid gray",
                        }}
                      >
                        <img
                          ref={imageRef}
                          src={image}
                          alt="Selected"
                          style={{
                            width: "750px",
                            height: "750px",
                            cursor: "crosshair",
                          }}
                          onMouseDown={handleMouseDown}
                          onMouseUp={handleMouseUp}
                          onMouseMove={handleMouseMove}
                          draggable={false}
                        />
                        {selection && (
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
                        )}
                      </div>
                    )}
                  </div>
                </li>
              </ul>
            </div>
          </section>
        </div>
      )}
    </div>
  );
};

export default ImageScanner;
