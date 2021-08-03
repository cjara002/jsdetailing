import React from "react";
import Jlogo from "../../img/JLogo.JPG";


class Monster extends React.Component {
    render(){
        return(
            <React.Fragment>
                <div className="main-wrapper">
                    <header>
                        {/* bar above nav start */}
                        <div className="bg-primary d-none d-md block">
                            <div className="container">
                                <div className="row">
                                    {/* Phone and email start */}
                                    <div className="col-9">
                                        <div>
                                            <li className="border-right text-white">
                                                <i className="fas fa-phone text-white"></i>
                                                323-495-0763 
                                            </li>
                                            <li className="border-right text-white">
                                                <i className="fas fa-phone text-white"></i>
                                                needabusinessemail@gmail.com
                                            </li>
                                        </div>
                                    </div>
                                      {/* Phone and email end */}
                                      {/* Social media links start */}
                                    <div className="col-3">
                                        <div>
                                            <ul className="mb-0">
                                                <li>
                                                    <a href="/"> 
                                                      <i className="fab fa-facebook">
                                                      </i>
                                                    </a>
                                                </li> 
                                                <li>
                                                    <a href="/"> 
                                                      <i className="fab fa-twitter">
                                                      </i>
                                                    </a>
                                                </li> 
                                                <li>
                                                    <a href="/"> 
                                                      <i className="fab fa-instagram">
                                                      </i>
                                                    </a>
                                                </li> 
                                            </ul>
                                        </div>
                                    </div>  
                                      {/* Social media links end */}
                                </div>
                            </div>
                        </div>
                         {/* bar above nav start */}

                        <div className="container">
                            <div className="row align-items-center">
                                <div className="col-12">
                                    <div>
                                        {/* nav bar start  */}
                                        <nav>
                                            {/* logo start */}
                                        <div>
                                            <a href="/">
                                                <img src={Jlogo} alt="logo" />
                                            </a>
                                        </div>
                                        {/* logo end */}

                                        {/* menu start */}
                                        <ul className="navbar-nav ml-auto" style={{display: "none;"}}>
                                            <li>
                                                <a href="/">
                                                    Services
                                                </a>
                                            </li>
                                            <li>
                                                <a href="/">
                                                    Testimonials
                                                </a>
                                            </li>
                                            <li>
                                                <a href="/">
                                                    Gallery
                                                </a>
                                            </li>
                                            <li>
                                                <a href="/">
                                                    Book Now
                                                </a>
                                            </li>
                                        </ul>
                                        {/* menu end */}
                                        {/* attri nav start */}
                                        <div>
                                            <ul>
                                                <li>
                                                    <a href="/">
                                                        <i className="fas fa-shopping-cart"></i>
                                                        <span className="badge bg-primary">3</span>
                                                    </a>
                                                    <ul>
                                                        <li>demo 3 line 295</li>
                                                    </ul>
                                                </li>
                                            </ul>
                                        </div>
                                        {/* attri nav end */}
                                        </nav>
                                        {/* nav bar end  */}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </header>
                </div>
            </React.Fragment>
        )
    }
}

export default Monster;