import React from "react";
import Loading from "../Components/Loading/Loading";
import { Link } from 'react-router-dom';
import "./UserProfile.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser, faEnvelope } from '@fortawesome/free-regular-svg-icons';
import { faWhatsapp } from '@fortawesome/free-brands-svg-icons';

function UserProfile() {
  return (
      <div className="gray-section pt-5">
        Hello! Nice to meet you
        <div className="sub-title">You are currently not signed in</div>
      <div className="center my-2 sub-white-section">
      <Link  to="/login" className="font-dec">
      <div className="login-signup"><FontAwesomeIcon icon={faUser} className="mx-2" />Login/Signup</div>
      </Link>
      </div>
      <div className="gray-section">
      REACH OUT TO US
      <div className="sub-white-section">
        <h3>We're Always Here To Help</h3>
        <div className="curve-border-b">
        <div className="sub-title">
          HELP CENTER
        </div>
          <div className="link-help"><FontAwesomeIcon icon={faWhatsapp} className="mx-2 green" />whatsapp</div>
          </div>
        <div className="curve-border-b">
        <div className="sub-title">
          EMAIL SUPPORT
          </div>
          <div className="link-help"> <FontAwesomeIcon icon={faEnvelope} className="mx-2" />caregobuyget@gmail.com</div>
      </div>
        </div>
      </div>
    </div>
    // <div>
    //   <Loading/>
    // </div>
  );
}

export default UserProfile;
