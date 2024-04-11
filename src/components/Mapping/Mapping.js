import React from "react";
import { FaArrowRightLong } from "react-icons/fa6";
import {useNavigate} from "react-router-dom"

const Mapping = () => {
  const navigate = useNavigate()
  const onHandleSubmit = () => {
    navigate("/changer")
  }

  return (
    <div className="py-24" style={{ backgroundColor: "#180C2E" }}>
      <h1 className="text-white text-4xl text-center mb-5">Mapping</h1>
      <div className=" flex xl:mx-32">
        <select
          className="form-select form-select-lg mb-3 text-2xl font-semibold text-center"
          aria-label="Large select example"
        >
          <option selected>Csv Header Name</option>
          <option value="1">One</option>
          <option value="2">Two</option>
          <option value="3">Three</option>
        </select>

        {/* User Typed field */}

        <select
          className="form-select form-select-lg mb-3 text-2xl offset-3 font-semibold text-center"
          aria-label="Large select example"
        >
          <option selected>User Field Name</option>
          <option value="1">One</option>
          <option value="2">Two</option>
          <option value="3">Three</option>
        </select>
      </div>
      <div className="mt-3 flex xl:mx-32">
        <select
          className="form-select form-select-lg mb-3 text-2xl font-semibold text-center"
          aria-label="Large select example"
        >
          <option selected>Csv Header Name</option>
          <option value="1">One</option>
          <option value="2">Two</option>
          <option value="3">Three</option>
        </select>

        {/* User Typed field */}

        <select
          className="form-select form-select-lg mb-3 text-2xl offset-3 font-semibold text-center"
          aria-label="Large select example"
        >
          <option selected>User Field Name</option>
          <option value="1">One</option>
          <option value="2">Two</option>
          <option value="3">Three</option>
        </select>
      </div>
      <div className="mt-3 flex xl:mx-32">
        <select
          className="form-select form-select-lg mb-3 text-2xl font-semibold text-center"
          aria-label="Large select example"
        >
          <option selected>Csv Header Name</option>
          <option value="1">One</option>
          <option value="2">Two</option>
          <option value="3">Three</option>
        </select>

        {/* User Typed field */}

        <select
          className="form-select form-select-lg mb-3 text-2xl offset-3 font-semibold text-center"
          aria-label="Large select example"
        >
          <option selected>User Field Name</option>
          <option value="1">One</option>
          <option value="2">Two</option>
          <option value="3">Three</option>
        </select>
      </div>

      <div className="mt-3 flex xl:mx-32">
        <select
          className="form-select form-select-lg mb-3 text-2xl font-semibold text-center"
          aria-label="Large select example"
        >
          <option selected>Csv Header Name</option>
          <option value="1">One</option>
          <option value="2">Two</option>
          <option value="3">Three</option>
        </select>

        {/* User Typed field */}

        <select
          className="form-select form-select-lg mb-3 text-2xl offset-3 font-semibold text-center"
          aria-label="Large select example"
        >
          <option selected>User Field Name</option>
          <option value="1">One</option>
          <option value="2">Two</option>
          <option value="3">Three</option>
        </select>
      </div>

      <div className="text-center mt-5 pt-5">
        <label
          data-bs-toggle="modal"
          data-bs-target="#exampleModal"
          className=" font-medium  text-white bg-gradient-to-r from-purple-600 to-indigo-700 rounded-xl
           shadow-md cursor-pointer select-none text-xl px-12 py-2 hover:shadow-xl active:shadow-md"
        >
          <span>Save</span>
        </label>
        <div
          className="modal fade "
          id="exampleModal"
          tabIndex="-1"
          aria-labelledby="exampleModalLabel"
          aria-hidden="true"
        >
          <div className="modal-dialog modal-dialog-centered ">
            <div className="modal-content px-3 py-2 bg-white">
              <div className="modal-header ">
                <h1
                  className="modal-title fs-5 fw-bold text-gray-500 ms-4"
                  id="exampleModalLabel"
                >
                  Mapped Data..
                </h1>
                <button
                  type="button"
                  className="btn-close text-xl"
                  data-bs-dismiss="modal"
                  aria-label="Close"
                  // onClick={() => setSelection("")}
                ></button>
              </div>
              <div className="modal-body text-lg text-gray-600 font-semibold my-2 overflow-y-auto h-[180px]">
                <p className="flex justify-evenly">
                  {" "}
                  header{" "}
                  <FaArrowRightLong className="mt-1 fs-5 text-teal-600" /> field
                </p>
                <p className="flex justify-evenly">
                  {" "}
                  header{" "}
                  <FaArrowRightLong className="mt-1 fs-5 text-teal-600" /> field
                </p>
                <p className="flex justify-evenly">
                  {" "}
                  header{" "}
                  <FaArrowRightLong className="mt-1 fs-5 text-teal-600" /> field
                </p>
                <p className="flex justify-evenly">
                  {" "}
                  header{" "}
                  <FaArrowRightLong className="mt-1 fs-5 text-teal-600" /> field
                </p>
                <p className="flex justify-evenly">
                  {" "}
                  header{" "}
                  <FaArrowRightLong className="mt-1 fs-5 text-teal-600" /> field
                </p>
                <p className="flex justify-evenly">
                  {" "}
                  header{" "}
                  <FaArrowRightLong className="mt-1 fs-5 text-teal-600" /> field
                </p>
               
               
              </div>
              <label
                className=" font-medium my-3 ms-auto me-3 text-white bg-teal-600 hover:bg-teal-500 rounded-xl
                shadow-md cursor-pointer select-none text-xl px-8 py-1 hover:shadow-xl active:shadow-md" 
                data-bs-dismiss="modal"
                onClick={onHandleSubmit}
              >
                <span>Submit</span>
              </label>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Mapping;
