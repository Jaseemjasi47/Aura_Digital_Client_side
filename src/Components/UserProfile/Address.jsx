import { faPlus } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { Link } from "react-router-dom";

function Address() {
  return (
    <div>
      <div className="bg p-2 white">My Addresses</div>
      <Link to={'/add-address'} className="link">
      <div className="bg-white p-2 mb-3">
        <FontAwesomeIcon icon={faPlus} className="px-2" />
        Add a new address
        </div>
      </Link>
      <div className="bg-white my-4 px-2 pt-2 border-top">
        <div className="rem8 ">
          Username<span className="s-btn rem5 mx-1">Home</span>
        </div>
        <div className="rem7 py-1">
          <div>address of the user</div>
          <div>pincode-666666</div>
        </div>
        <div className="rem8">9876543210</div>
        <div className="d-flex justify-content-around rem7 mt-2 border-top">
          <div className="p-2">Remove</div>
          <div className="border-right"></div>
          <div className="p-2">
            Edit<span className="px-3"></span>
          </div>
        </div>
      </div>

      <div className="bg-white my-4 px-2 pt-2 border-top">
        <div className="rem8 ">
          Username<span className="s-btn rem5 mx-1">Work</span>
        </div>
        <div className="rem7 py-1">
          <div>address of the user</div>
          <div>pincode-666666</div>
        </div>
        <div className="rem8">9876543210</div>
        <div className="d-flex justify-content-around rem7 mt-2 border-top">
          <div className="p-2">Remove</div>
          <div className="border-right"></div>
          <div className="p-2">
            Edit<span className="px-3"></span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Address;
