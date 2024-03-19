import React from "react";
import Loading from "../Components/Loading/Loading";

function UserProfile() {
  return (
    // <div>
    //   {/* <div className="align-items-center text-center">
    //     <Link to='/login'>
    //   You are not Logged In, Please Login here
    //   </Link>
    //   </div> */}
    //   <section className="h-100 ">
    //     <div className="container my-2 h-100">
    //       <div className="row d-flex justify-content-center align-items-center h-100">
    //         <div className="col col-lg-9 col-xl-7">
    //           <div className="card">
    //             <div
    //               className="rounded-top text-white bg"
    //               style={{ height: "50px" }}
    //             >
    //               <div className="d-flex m-2 ">
    //                 <h5>Hello, username</h5>
    //                 <button
    //                   type="button"
    //                   className="btn btn-outline-dark mx-3"
    //                   data-mdb-ripple-color="dark"
    //                   style={{ zIndex: 1 }}
    //                 >
    //                   Edit profile
    //                 </button>
    //               </div>
    //             </div>
    //             <div
    //               className="p-4 text-black"
    //               style={{ backgroundColor: "#f8f9fa" }}
    //             >
    //               <div className="d-flex justify-content-end text-center py-1">
    //                 <div className="px-2">
    //                   <p className="mb-1 h5">10</p>
    //                   <p className="small text-muted mb-0 ">Your Orders</p>
    //                 </div>
    //                 <div className="px-2">
    //                   <p className="mb-1 h5">4</p>
    //                   <p className="small text-muted mb-0">In Cart</p>
    //                 </div>
    //                 <div className="px-2">
    //                   <p className="mb-1 h5">4</p>
    //                   <p className="small text-muted mb-0">In Cart</p>
    //                 </div>
    //                 <div className="px-2">
    //                   <p className="mb-1 h5">4</p>
    //                   <p className="small text-muted mb-0">In Cart</p>
    //                 </div>
    //               </div>
    //             </div>
    //             <div className="card-body p-4 text-black">
    //               <div className="mb-5">
    //                 <p className="lead fw-normal mb-1">Address</p>
    //                 <div className="p-4" style={{ backgroundColor: "#f8f9fa" }}>
    //                   <p className="font-italic mb-1">Web Developer</p>
    //                   <p className="font-italic mb-1">Lives in New York</p>
    //                   <p className="font-italic mb-0">Photographer</p>
    //                   <div>
    //                     {/* Serif Fonts */}
    //                     <div className="ff-serif">Times New Roman</div>
    //                     <div className="ff-georgia">Georgia</div>
    //                     <div className="ff-baskerville">Baskerville</div>
    //                     <div className="ff-cambria">Cambria</div>
    //                     <div className="ff-garamond">Garamond</div>

    //                     {/* Sans-serif Fonts */}
    //                     <div className="ff-sans-serif">Arial</div>
    //                     <div className="ff-helvetica">Helvetica</div>
    //                     <div className="ff-verdana">Verdana</div>
    //                     <div className="ff-roboto">Roboto</div>
    //                     <div className="ff-open-sans">Open Sans</div>
    //                     <div className="ff-nunito">Nunito</div>

    //                     {/* Monospace Fonts */}
    //                     <div className="ff-monospace">Courier New</div>
    //                     <div className="ff-consolas">Consolas</div>
    //                     <div className="ff-monaco">Monaco</div>
    //                     <div className="ff-inconsolata">Inconsolata</div>
    //                     <div className="ff-source-code-pro">
    //                       Source Code Pro
    //                     </div>

    //                     {/* Cursive/Script Fonts */}
    //                     <div className="ff-cursive">Brush Script</div>
    //                     <div className="ff-lobster">Lobster</div>
    //                     <div className="ff-snell-roundhand">
    //                       Snell Roundhand
    //                     </div>
    //                     <div className="ff-lucida-calligraphy">
    //                       Lucida Calligraphy
    //                     </div>
    //                     <div className="ff-kunstler-script">
    //                       Kunstler Script
    //                     </div>

    //                     {/* Fantasy Fonts */}
    //                     <div className="ff-fantasy">Impact</div>
    //                     <div className="ff-chiller">Chiller</div>
    //                     <div className="ff-papyrus">Papyrus</div>
    //                     <div className="ff-comic-sans">Comic Sans MS</div>
    //                     <div className="ff-curlz-mt">Curlz MT</div>
    //                   </div>
    //                 </div>
    //               </div>
    //               <div className="d-flex justify-content-between align-items-center mb-4">
    //                 <p className="lead fw-normal mb-0">Your Orders</p>
    //                 <p className="mb-0">
    //                   <a href="#!" className="text-muted">
    //                     Show all
    //                   </a>
    //                 </p>
    //               </div>
    //               <div className="row g-2">
    //                 <div className="col mb-2">
    //                   <img
    //                     src="https://mdbcdn.b-cdn.net/img/Photos/Lightbox/Original/img%20(112).webp"
    //                     alt="image 1"
    //                     className="w-100 rounded-3"
    //                   />
    //                 </div>
    //                 <div className="col mb-2">
    //                   <img
    //                     src="https://mdbcdn.b-cdn.net/img/Photos/Lightbox/Original/img%20(107).webp"
    //                     alt="image 1"
    //                     className="w-100 rounded-3"
    //                   />
    //                 </div>
    //               </div>
    //               <div className="row g-2">
    //                 <div className="col">
    //                   <img
    //                     src="https://mdbcdn.b-cdn.net/img/Photos/Lightbox/Original/img%20(108).webp"
    //                     alt="image 1"
    //                     className="w-100 rounded-3"
    //                   />
    //                 </div>
    //                 <div className="col">
    //                   <img
    //                     src="https://mdbcdn.b-cdn.net/img/Photos/Lightbox/Original/img%20(114).webp"
    //                     alt="image 1"
    //                     className="w-100 rounded-3"
    //                   />
    //                 </div>
    //               </div>
    //             </div>
    //           </div>
    //         </div>
    //       </div>
    //     </div>
    //   </section>
    // </div>
    <div>
      <Loading/>
    </div>
  );
}

export default UserProfile;
