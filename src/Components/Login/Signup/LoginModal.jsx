import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmark } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";

function LoginModal() {
    const [modalOpen, setModalOpen] = useState(true);
    const location = useLocation();


  const closeModal = () => {
    setModalOpen(false);

    const timer = setTimeout(() => {
      setModalOpen(true);
    }, 15000);

    return () => clearTimeout(timer);
  };

  useEffect(() => {
    const restrictedPaths = ["/login", "/signup", "/account"];
    if (restrictedPaths.includes(location.pathname)) {
      closeModal();
    } 
    else {
    //   setModalOpen(true);
    }
  }, [location, closeModal]);

  return (
    <>
      {" "}
      {modalOpen && (
        <div className="lm-container">
          <h3>Login</h3>
          <div className="py-3">
            Get access to your Orders, Wishlist and Recommendations
          </div>
          <div className="lm-right">
            <form>
              <div className="form-outline mb-4">
                <input
                  type="email"
                  id="form3Example3"
                  className="form-control"
                />
                <label className="form-label" htmlFor="form3Example3">
                  Email address
                </label>
              </div>

              <div className="form-outline mb-4">
                <input
                  type="password"
                  id="form3Example4"
                  className="form-control"
                />
                <label className="form-label" htmlFor="form3Example4">
                  Password
                </label>
              </div>

              <div type="submit" className="login-btn mb-4">
                Sign In
              </div>
            </form>
            <div>I Don't have a account, </div>
              <Link to="/signup">Create new Account?</Link>
          </div>
          <div className="lm-close" onClick={closeModal}>
            <FontAwesomeIcon icon={faXmark} />
          </div>
        </div>
      )}
    </>
  );
}

export default LoginModal;
