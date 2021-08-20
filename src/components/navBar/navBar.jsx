import React from "react";
import TopBar from "../topBar/topBar";
import Jlogo from "../../img/logo/JLogo.JPG";

const navBar = () => {
    return (
    <header className="header-style3 header-custom">
    <TopBar />
     <div className="navbar-default">
       <div className="container" style={{maxWidth: "100%"}}>
         <div className="row align-items-center">
           <div className="col-12">
             <div menu_area alt-font>
               {/* nav bar start  */}
               <nav className="navbar navbar-expand-lg navbar-light p-0 d-flex justify-content-between">
                 {/* logo start */}
                 <div className="navbar-header navbar-header-custom">
                   <a
                     href="/"
                     className="navbar-brand xs-width-145px d-inline-block mr-lg-0"
                   >
                     <img src={Jlogo} alt="logo" id="logo" />
                     {/* <img src={TempLogo} alt="logo"  id="logo"/> */}
                     {/* <img src={Logo} alt="logo"  id="logo"/> */}
                   </a>
                 </div>
                 {/* logo end */}

                 {/* menu start */}
                 <ul className="navbar-nav ml-auto" id="nav">
                   <li>
                     <a href="/">Services</a>
                   </li>
                   <li>
                     <a href="/">Testimonials</a>
                   </li>
                   <li>
                     <a href="/">Gallery</a>
                   </li>
                   <li className="ml-2">
                     <a href="/" className="butn appointment">
                       <i className="fas fa-calendar-day mr-1 align-middle display-28"></i>
                       <span className="alt-font align-middle d-none d-xxl-inline-block">
                         Book Now
                       </span>
                     </a>
                   </li>
                 </ul>
                 {/* menu end */}
                 {/* attri nav start */}
                 {/* <div className="attr-nav">
                   <ul>
                     <li className="dropdown">
                       <a href="/">
                         <i className="fas fa-shopping-cart"></i>
                         <span className="badge bg-primary">3</span>
                       </a>
                     </li>
                   </ul>
                 </div> */}
                 {/* attri nav end */}
               </nav>
               {/* nav bar end  */}
             </div>
           </div>
         </div>
       </div>
     </div>
     {/* can add modal here for the appointment button */}
   </header>
    )}

export default navBar;