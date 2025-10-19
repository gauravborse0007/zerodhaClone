// import React from 'react';
// import { Link } from 'react-router-dom';
// function Navbar() {
//     return (
//         <nav class="navbar navbar-expand-lg border-bottom sticky-top  navbar-light bg-white">
//             <div class="container p-2">
//                 <Link class="navbar-brand" to={'/'}>
//                     <img src='\media\images\logo.svg' style={{ width: "25%" }} />
//                 </Link>
//                 <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
//                     <span class="navbar-toggler-icon"></span>
//                 </button>
//                 <div class="collapse navbar-collapse" id="navbarSupportedContent">
//                     <form class="d-flex" role="search">
//                         <ul class="navbar-nav mb-lg-0">
//                             <li class="nav-item">
//                                 <Link class="nav-link active" aria-current="page" to={'/signup'}>Signup</Link>
//                             </li>
//                             <li class="nav-item">
//                                 <Link class="nav-link active" aria-current="page" to={'/about'}>About</Link>
//                             </li>
//                             <li class="nav-item">
//                                 <Link class="nav-link active" to={'/products'}>Product</Link>
//                             </li>
//                             <li class="nav-item">
//                                 <Link class="nav-link active" to={'/pricing'} >Pricing</Link>
//                             </li>
//                             <li class="nav-item">
//                                 <Link class="nav-link active" to={'/support'}>Support</Link>
//                             </li>
//                             <i class="fa fa-bars" aria-hidden="true" style={{margin:"13px 40px"}}></i>
//                         </ul>

//                     </form>
//                 </div>
//             </div>
//         </nav>
//     );
// }

// export default Navbar;

// import React, { useState } from "react";
// import { Link } from "react-router-dom";

// function Navbar() {
//   const [showImages, setShowImages] = useState(false);

//   const handleBarClick = () => {
//     setShowImages(!showImages); // toggle images on/off
//   };

//   const handleImageClick = (imgNumber) => {
//     console.log(`Image ${imgNumber} clicked`);
//     // Example: if you want to open dashboard on image 1
//     if (imgNumber === 1) {
//       window.location.href = "http://localhost:3002"; // or your dashboard route
//     }
//   };

//   return (
//     <nav className="navbar navbar-expand-lg border-bottom sticky-top navbar-light bg-white">
//       <div className="container p-2">
//         <Link className="navbar-brand" to={"/"}>
//           <img src="/media/images/logo.svg" style={{ width: "25%" }} alt="Logo" />
//         </Link>

//         <button
//           className="navbar-toggler"
//           type="button"
//           onClick={handleBarClick}
//         >
//           <span className="navbar-toggler-icon"></span>
//         </button>

//         <div className="collapse navbar-collapse" id="navbarSupportedContent">
//           <ul className="navbar-nav mb-lg-0 ms-auto">
//             <li className="nav-item">
//               <Link className="nav-link active" to={"/signup"}>Signup</Link>
//             </li>
//             <li className="nav-item">
//               <Link className="nav-link active" to={"/about"}>About</Link>
//             </li>
//             <li className="nav-item">
//               <Link className="nav-link active" to={"/products"}>Product</Link>
//             </li>
//             <li className="nav-item">
//               <Link className="nav-link active" to={"/pricing"}>Pricing</Link>
//             </li>
//             <li className="nav-item">
//               <Link className="nav-link active" to={"/support"}>Support</Link>
//             </li>
//             <i
//               className="fa fa-bars"
//               aria-hidden="true"
//               style={{ margin: "13px 40px", cursor: "pointer" }}
//               onClick={handleBarClick}
//             ></i>
//           </ul>
//         </div>
//       </div>

//       {/* Show images when bar is clicked */}
//       {showImages && (
//         <div
//           style={{
//             position: "absolute",
//             top: "80px",
//             right: "140px",
//             background: "white",
//             border: "1px solid #ddd",
//             borderRadius: "10px",
//             padding: "10px",
//             boxShadow: "0 4px 10px rgba(0,0,0,0.1)",
//             display: "flex",
//             gap: "10px",
//             zIndex: 10,
//           }}
//         >
//           <img
//             src="/media/images/logo.png"
//             alt="Image 1"
//             style={{height:"50px", width: "60px", cursor: "pointer", paddingTop:"8px", paddingRight:"2px" }}
//             onClick={() => handleImageClick(1)}
//             />
//           <img
//             src="/media/images/zerodha-console-icon-filled.png"
//             alt="Image 3"
//             style={{ width: "60px", cursor: "pointer" }}
//             onClick={() => handleImageClick(3)}
//           />
//           <img
//             src="/media/images/zerodha-coin-icon-unplated.png"
//             alt="Image 2"
//             style={{ width: "65px", cursor: "pointer", paddingLeft:"2px"  }}
//             onClick={() => handleImageClick(2)}
//           />
//         </div>
//       )}
//     </nav>
//   );
// }

// export default Navbar;


import React, { useState } from "react";
import { Link } from "react-router-dom";

function Navbar() {
  const [showImages, setShowImages] = useState(false);

  const handleBarClick = () => {
    setShowImages(!showImages);
  };

  const handleImageClick = (imgNumber) => {
    if (imgNumber === 1) {
      window.location.href = "http://localhost:3000"; // Example: open dashboard
    } else {
      alert(`You clicked image ${imgNumber}`);
    }
  };

  // Image data with labels
  const images = [
    { src: "/media/images/logo.png", label: "kite"},
    { src: "/media/images/zerodha-console-icon-filled.png", label: "console" },
    { src: "/media/images/zerodha-coin-icon-unplated.png", label: "coin" },
  ];

  return (
    <nav className="navbar navbar-expand-lg border-bottom sticky-top navbar-light bg-white">
      <div className="container p-2">
        <Link className="navbar-brand" to={"/"}>
          <img src="/media/images/logo.svg" style={{ width: "25%" }} alt="Logo" />
        </Link>

        <button
          className="navbar-toggler"
          type="button"
          onClick={handleBarClick}
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav mb-lg-0 ms-auto">
            <li className="nav-item">
              <Link className="nav-link active" to={"/signup"}>Signup</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link active" to={"/about"}>About</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link active" to={"/products"}>Product</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link active" to={"/pricing"}>Pricing</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link active" to={"/support"}>Support</Link>
            </li>
            <i
              className="fa fa-bars"
              aria-hidden="true"
              style={{ margin: "13px 40px", cursor: "pointer" }}
              onClick={handleBarClick}
            ></i>
          </ul>
        </div>
      </div>

      {/* Image dropdown */}
      {showImages && (
        <div
          style={{
            position: "absolute",
            top: "80px",
            right: "140px",
            background: "white",
            border: "1px solid #ddd",
            borderRadius: "10px",
            padding: "15px 20px",
            boxShadow: "0 4px 10px rgba(0,0,0,0.1)",
            display: "flex",
            gap: "20px",
            zIndex: 10,
          }}
        >
          {images.map((item, index) => (
            <div
              key={index}
              style={{ textAlign: "center", cursor: "pointer" }}
              onClick={() => handleImageClick(index + 1)}
            >
              <img
                src={item.src}
                alt={item.label}
                style={{
                  width: "60px",
                  height: "60px",
                  objectFit: "cover",
                  borderRadius: "8px",
                }}
              />
              <p style={{ fontSize: "14px", marginTop: "5px" }}>{item.label}</p>
            </div>
          ))}
        </div>
      )}
    </nav>
  );
}

export default Navbar;
