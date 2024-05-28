import React, { useState } from "react";
import "../Navbar/navbar.css";
import { Link } from "react-router-dom";
import logo from "../images/logo1.png";
// import yuth from '../../HomePage/images/yemp.jpg'
import yuth from "../../HomePage/images/yuth.png";

const Navbar = () => {
  const [open, setOpen] = useState(false);

  const click = () => {
    setOpen(!open);
  };
  return (
    <>
      <nav
        style={{
          width: "100%",
          zIndex: "1",
          background: "#2f4f4ff2",
          top: "0",
          position: "fixed",
          padding: "1rem 1rem",
        }}
        class="navbar navbar-expand-lg"
      >
        <div className="navmain">
          <div style={{textAlign:'center', display:'flex'}}>
          <Link className="logo" to={"/"}>
            <img width="115%" src={logo} alt="logo" />
          </Link>
            {/* <h2 style={{color:'white', fontWeight:'500', margin:'0'}}>प्रोत्साहन टीम</h2> */}
          </div>
          <button
            class="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
            onClick={click}>
            <span class="navbar-toggler-icon"></span>
          </button>
        </div>
        <div
          style={{ display: "flex", justifyContent: "end", border: "none" }}
          class="container-fluid"
        >
          <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul
              style={{ justifyContent: "space-between" }}
              class="navbar-nav me-auto mb-2 mb-lg-0 m-auto"
            >
              <li class="nav-item">
                <Link
                  class="nav-link active"
                  aria-current="page"
                  to={"/"}
                  onClick={click}
                >
                  Home
                </Link>
              </li>
              <li class="nav-item dropdown">
                <Link
                  class="nav-link dropdown-toggle"
                  to={"#"}
                  id="navbarDropdown"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  About Us
                </Link>
                <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
                  <li>
                    <Link class="dropdown-item" to="/aimAndObjective">
                      Aim and objective
                    </Link>
                  </li>
                  <li>
                    <Link class="dropdown-item" to={"/join-us"}>
                      Join Us
                    </Link>
                  </li>
                  <li>
                    <Link class="dropdown-item" to="/ourTeam">
                      Our Team
                    </Link>
                  </li>
                  <li>
                    <Link class="dropdown-item" to={"/contact-detail"}>
                      Contact Detail
                    </Link>
                  </li>
                </ul>
              </li>
              <li class="nav-item">
                <Link class="nav-link" to="/presedentMessage">
                  President's Message
                </Link>
              </li>
              <li class="nav-item dropdown">
                <Link
                  class="nav-link dropdown-toggle"
                  to={"#"}
                  id="navbarDropdown"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Our Focus
                </Link>
                <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
                  <li>
                    <Link class="dropdown-item" to="/health-care-awareness">
                      Health Care Awareness
                    </Link>
                  </li>
                  <li>
                    <Link class="dropdown-item" to={"#"}>
                      Global Warming
                    </Link>
                    <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
                      <li>
                        <Link class="dropdown-item" to="/aimAndObjective">
                          Aim and objective
                        </Link>
                      </li>
                      <li>
                        <Link class="dropdown-item" to={"/join-us"}>
                          Join Us
                        </Link>
                      </li>
                      <li>
                        <Link class="dropdown-item" to="/ourTeam">
                          Our Team
                        </Link>
                      </li>
                      <li>
                        <Link class="dropdown-item" to={"/contact-detail"}>
                          Contact Detail
                        </Link>
                      </li>
                    </ul>
                  </li>
                  <li>
                    <Link class="dropdown-item" to="/trafic-sence">
                      Traffic Sence
                    </Link>
                  </li>
                  <li>
                    <Link class="dropdown-item" to="/consumer-awareness">
                      Consumer Awareness
                    </Link>
                  </li>
                  <li>
                    <Link class="dropdown-item" to="/consumer-awareness">
                      Rain Harvesting
                    </Link>
                  </li>
                </ul>
              </li>
              <li class="nav-item dropdown">
                <Link
                  class="nav-link dropdown-toggle"
                  to={"#"}
                  id="navbarDropdown"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  News And Views
                </Link>
                <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
                  <li>
                    <Link class="dropdown-item" to={"/events"}>
                      Events
                    </Link>
                  </li>
                  <li>
                    <Link class="dropdown-item" to="/press-release">
                      Press Release
                    </Link>
                  </li>
                  <li>
                    <Link class="dropdown-item" to="/photo">
                      Photo Gallery
                    </Link>
                  </li>
                </ul>
              </li>
              <li class="nav-item dropdown">
                <Link
                  class="nav-link dropdown-toggle"
                  to={"#"}
                  id="navbarDropdown"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Faq
                </Link>
                <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
                  <li>
                    <Link class="dropdown-item" to="/about-Global-Warming">
                      About Global Warming
                    </Link>
                  </li>
                  <li>
                    <Link class="dropdown-item" to="/about-Organ-Donating">
                      About Organ Donating
                    </Link>
                  </li>
                </ul>
              </li>
              <li class="nav-item">
                <Link to={"/contact-detail"} class="nav-link">
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>
        </div>
        <div>
          <div className="d-flex justify-content-center yuth">
            <img width='70%' src={yuth} alt="" />
          </div>
          <div className="d-flex">
            <Link style={{ marginRight: "10px" }} to={"/employeForm"}>
              <button className="button" style={{ background: "green" }}>
                Employer Zone
              </button>
            </Link>
            <Link to={"/employeDetail"}>
              <button className="button" style={{ background: "green" }}>
                Employee Zone
              </button>
            </Link>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
