import React from "react";

function AddAddress() {
  return (
    <div>
      <div className="bg p-2 white">Add delivery address</div>
      <div className="form my-3">
        <div className="p-2">
          {/* <div className="sub-title">Full Name</div> */}
          <input type="text" placeholder="Full Name(Required)" name="fullname" className="input-field rem8" />
        </div>
        <div className="p-2">
          <input type="text" placeholder="Phone Number(Required)" name="Number" className="input-field rem8" />
        </div>

        <div className="p-2">
          <input type="text" placeholder="Pincode(Required)" name="Pincode" className="input-field rem8" />
        </div>

        <div className="p-2">
          <input type="text" placeholder="State(Required)" name="State" className="input-field rem8" />
        </div>
        <div className="p-2">
          <input type="text" placeholder="City(Required)" name="City" className="input-field rem8" />
        </div>

        <div className="p-2">
          <input type="text" placeholder="House No., Building Name(Required)" name="Property" className="input-field rem8" />
        </div>
        <div className="p-2">
          <input type="text" placeholder="Road name, Area, Colony(Required)" name="Area" className="input-field rem8" />
        </div>

        <div className="p-2">
          <input type="text" placeholder="Nearby Famous Shop/Mall/Landmark" name="Landmark" className="input-field rem8" />
        </div>

        <div className="p-2">
        <div className="sub-title">
            Type of address
        </div>
        <div>
        <span className="s-btn rem5 mx-1">Home</span>
        <span className="s-btn rem5 mx-1">Work</span>
        </div>
        </div>
        <div className="center my-3">
        <div className="p-btn ">Save Address</div>
        </div>

      </div>
    </div>
  );
}

export default AddAddress;
