import React from "react";
import "./SignUpHeader.css";
import { IoIosSearch } from "react-icons/io";

const SignUpHeader = () => {
  return (
    <>
      <div className="header">
        <div>
          <img src="images/logo.png" alt="" />
          <div className="container d-flex justify-content-center mt-2">
            <div className="input-group mb-3 " style={{ width: "35rem" }}>
              <div className="input-group-prepend">
                <span className="input-group-text" id="basic-addon1"><IoIosSearch /></span>
              </div>
              <input
                type="text"
                class="form-control"
                placeholder="Search"
                aria-label="Search"
                aria-describedby="basic-addon1"
              />
            </div>
          </div>
          <button className="button">Login / Sign Up</button>
        </div>
      </div>
    </>
  );
};

export default SignUpHeader;
