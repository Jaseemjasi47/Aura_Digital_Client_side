import React, { useEffect, useState } from "react";
import Loading from "../Components/Loading/Loading";
import { Link } from "react-router-dom";
import "./UserProfile.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Footer from "../Components/Footer";
import NotSigned from "../Components/UserProfile/NotSigned";
import {
  faBox,
  faHeart,
  faCartShopping,
  faHeadset,
  faUser,
  faLocationDot,
  faStore,
  faCopy,
  faCircleQuestion,
  faComments,
  faPenToSquare,
  faAngleRight,
} from "@fortawesome/free-solid-svg-icons";

function UserProfile() {
  useEffect(() => {
    window.scrollTo(0, 0); // Scroll to the top when component mounts
  }, []);
  const [Login, setLogin] = useState(true);

  const onHandleLogin = ()=> {
    setLogin(false);
  };

  return (
    <div className="bg-gray">
      {Login ? (
        <>
          <div className="bg-white my-3">
            <div className="px-2 my-1">Hello! username</div>
            <div className="user-menu center py-2">
            <Link to={"/orders"} className="link user-menu-box">
                <FontAwesomeIcon icon={faBox} className="px-1" />
                Orders
              </Link>
              <Link to={"/wishlist"} className="link user-menu-box">
                <FontAwesomeIcon icon={faHeart} className="px-1" />
                Wishlist
              </Link>
              <Link to={"/cart"} className="link user-menu-box">
                <FontAwesomeIcon icon={faCartShopping} className="px-1" />
                Cart
              </Link>
              <Link to={"/cart"} className="link user-menu-box">
                <FontAwesomeIcon icon={faHeadset} className="px-1" />
                Help Center
              </Link>
            </div>
          </div>
          <div className="bg-white my-2">
            <div className="pt-2">
              <h5 className="px-1">Account Settings</h5>
              <Link to={"/edit-profile"}  className="border-top user-options link">
                <div>
                  <FontAwesomeIcon icon={faUser} className="px-1" />
                  Edit Profile{" "}
                </div>
                <div>
                  <FontAwesomeIcon icon={faAngleRight} className="px-2" />
              </div>
                </Link>
                <Link to={"/address"}  className="border-top user-options link">
                <div>
                  <FontAwesomeIcon icon={faLocationDot} className="px-1" />
                  Saved Address
                </div>
                <div>
                  <FontAwesomeIcon icon={faAngleRight} className="px-2" />
                </div>
                </Link>
            </div>
          </div>

          <div className="bg-white my-2">
            <div className="pt-2">
              <h5 className="px-1">My Activity</h5>
              <div className=" border-top user-options">
                <div>
                  <FontAwesomeIcon icon={faPenToSquare} className="px-1" />
                  Reviews
                </div>
                <div>
                  <FontAwesomeIcon icon={faAngleRight} className="px-2" />
                </div>
              </div>
              <div className="user-options">
                <div>
                  <FontAwesomeIcon icon={faComments} className="px-1" />
                  Questions & Answers
                </div>
                <div>
                  <FontAwesomeIcon icon={faAngleRight} className="px-2" />
                </div>
              </div>
            </div>
          </div>

          <div className="bg-white my-2">
            <div className="pt-2">
              <h5 className="px-1">Earn with GoBuyGet</h5>
              <div className="user-options border-top">
                <div>
                  <FontAwesomeIcon icon={faStore} className="px-1" />
                  Sell on GoBuyGet
                </div>
                <div>
                  <FontAwesomeIcon icon={faAngleRight} className="px-2" />
                </div>
              </div>
            </div>
          </div>

          <div className="bg-white my-2">
            <div className="pt-2">
              <h5 className="px-1">Feedback & Information</h5>
              <div className="border-top user-options">
                <div>
                  <FontAwesomeIcon icon={faCopy} className="px-1" />
                  Terms, Policies and Licenses
                </div>
                <div>
                  <FontAwesomeIcon icon={faAngleRight} className="px-2" />
                </div>
              </div>
              <div className="user-options">
                <div>
                  <FontAwesomeIcon icon={faCircleQuestion} className="px-1" />
                  Browse FAQs
                </div>
                <div>
                  <FontAwesomeIcon icon={faAngleRight} className="px-2" />
                </div>
              </div>
            </div>
          </div>

          <div className="remove-all-btn" onClick={onHandleLogin}> Log Out </div>
        </>
      ) : (
        <NotSigned />
      )}
      <Footer />
    </div>
  );
}

export default UserProfile;
