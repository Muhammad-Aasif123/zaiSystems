import React from "react";
import { Link, useLocation, useParams, useNavigate } from "react-router-dom";
import { AiFillCaretDown } from "react-icons/ai";
const Nav = () => {
  // const navigate = useNavigate();
  // const id = useParams();
  // console.log(id);
  // const location = useLocation();
  // console.log(location);
  // const { pathname } = location;
  // console.log(pathname);

  return (
    <ul className="mainmenu">
      <li className="has-droupdown">
        <Link to="/">Home</Link>
      </li>

      <li className="has-droupdown">
        <Link>
          About <AiFillCaretDown />
        </Link>
        <ul className="submenu">
          <li>
            <Link to="/about-us">About us</Link>
          </li>
          <li>
            <Link to="/team">Team</Link>
          </li>
          <li>
            <Link to="/appreciation">Apperication</Link>
          </li>
        </ul>
      </li>

      <li className="with-megamenu">
        <Link to="/service">Services</Link>
      </li>

      <li className="with-megamenu">
        <Link>
          Courses <AiFillCaretDown />
        </Link>
        <div className="rn-megamenu">
          <div className="wrapper">
            <div className="row row--0">
              <div className="col-lg-4 single-mega-item">
                <ul className="mega-menu-item">
                  <h5 style={{ color: "#800000", marginLeft: "2.3rem" }}>
                    Frontend Development
                  </h5>
                  <li>
                    <Link to="/portfolio-details/9">JavaScript</Link>
                  </li>
                  <li>
                    <Link to="/portfolio-details/2">React Js</Link>
                  </li>
                  <li>
                    <Link to="/portfolio-details/7">Angular</Link>
                  </li>
                  <li>
                    <Link to="/portfolio-details/5">Vue Js</Link>
                  </li>
                </ul>
              </div>
              <div className="col-lg-4 single-mega-item">
                <ul className="mega-menu-item">
                  <h5 style={{ color: "#800000", marginLeft: "2.3rem" }}>
                    Backend Development
                  </h5>
                  <li>
                    <Link to="/team">Python (Django)</Link>
                  </li>
                  <li>
                    <Link to="/portfolio">ASP .Net</Link>
                  </li>
                  <li>
                    <Link to="/portfolio-details/10">Java</Link>
                  </li>
                  <li>
                    <Link to="/timeline">Blockchain</Link>
                  </li>
                  <li>
                    <Link to="/tab">Node js</Link>
                  </li>
                </ul>
              </div>
              <div className="col-lg-4 single-mega-item">
                <ul className="mega-menu-item">
                  <h5 style={{ color: "#800000", marginLeft: "2.3rem" }}>
                    All Courses
                  </h5>
                  <li>
                    <Link to="/international-consulting">All Courses</Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </li>

      <li className="has-droupdown">
        <Link to="/personal-portfolio">Portfolio</Link>
      </li>
      <li className="has-droupdown">
        <Link to="/business">FAQs</Link>
      </li>
      <li className="has-droupdown">
        <Link to="/contact">Contact</Link>
      </li>
    </ul>
  );
};
export default Nav;
