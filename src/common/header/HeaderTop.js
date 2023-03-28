import React from "react";
import {
  FiFacebook,
  FiTwitter,
  FiInstagram,
  FiLinkedin,
  FiChevronRight,
  FiMapPin,
  FiPhone,
} from "react-icons/fi";
import { Link } from "react-router-dom";

const HeaderTop = () => {
  return (
    <div className="header-top-bar">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-lg-4 col-md-12 col-12">
            <div className="header-left">
              <p>
                <a>
                  Building The Future With Tech
                  {/* <FiChevronRight /> */}
                </a>
              </p>
            </div>
          </div>
          <div className="col-lg-8 col-md-12 col-12">
            <div className="header-right">
              <div className="address-content">
                <p>
                  <FiMapPin />
                  <span>Lahore, Pakistan</span>
                </p>
                <p>
                  <FiPhone />
                  <span>
                    <a>0334-6906960</a>
                  </span>
                </p>
              </div>
              <div className="social-icon-wrapper">
                <ul className="social-icon social-default icon-naked">
                  <li>
                    <Link to="https://www.facebook.com/zaisystems">
                      <FiFacebook />
                    </Link>
                  </li>
                  <li>
                    <Link to="https://join.skype.com/invite/X73G9PKqIGfJ">
                      <FiTwitter />
                    </Link>
                  </li>
                  <li>
                    <Link to="https://instagram.com/zaisystems?utm_medium=copy_link">
                      <FiInstagram />
                    </Link>
                  </li>
                  <li>
                    <Link to="https://www.linkedin.com/company/zai-systems-smc-private-limited/?viewAsMember=true">
                      <FiLinkedin />
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeaderTop;
