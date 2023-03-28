import React from "react";
import { Link } from "react-router-dom";
import CalltoActionSeven from "../../elements/calltoaction/CalltoActionSeven";
import footerOne from "../../data/footer/footerOne.json";
import ScrollTop from "./ScrollTop";
import { FiFacebook, FiTwitter, FiInstagram, FiLinkedin } from "react-icons/fi";

const footerIntem = footerOne[0];
const footerIntemOne = footerOne[1];
const footerIntemTwo = footerOne[2];
const footerIntemThree = footerOne[3];
const footerIntemFour = footerOne[4];
const footerIntemFive = footerOne[5];

const indexOneLink = footerIntemOne.quicklink;
const indexTwoLink = footerIntemTwo.quicklink;
const indexThreeLink = footerIntemThree.quicklink;
const indexFourLink = footerIntemFour.quicklink;

const FooterTwo = () => {
  const handleClick = (name, website) => {
    // document.location();
    // console.log(document.location.href);
    // const process = window.confirm(`You are leaving towards ${name}.com`);
    // console.log(process);
    // if (process) {
    window.open(website);
    // }
  };
  return (
    <>
      <footer className="rn-footer footer-style-default variation-two">
        {/* <CalltoActionSeven /> */}
        <div className="footer-top">
          <div className="container">
            <div className="row">
              <div className="col-12 p-4">
                <div className="text-center">
                  <img
                    loading="lazy"
                    src="/images/logo/locations.png"
                    alt="Image Not Found"
                    // className="w-100"
                  />
                </div>
              </div>

              <div className="col-lg-4 col-md-6 col-sm-6 col-12">
                <div>
                  <div className="inner">
                    <CalltoActionSeven />
                  </div>
                </div>
              </div>
              {/* End Single Widget  */}
              {/* Start Single Widget  */}
              <div className="col-lg-2 col-md-6 col-sm-6 col-12">
                <div className="rn-footer-widget">
                  <h4 className="title">{footerIntemOne.title}</h4>
                  <div className="inner pt-3">
                    <ul className="footer-link link-hover">
                      {indexOneLink.map((data, index) => (
                        <li key={index}>
                          <Link to={`${data.url}`}>{data.text}</Link>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
              {/* End Single Widget  */}

              {/* Start Single Widget  */}
              <div className="col-lg-3 col-md-6 col-sm-6 col-12">
                <div className="rn-footer-widget">
                  <div className="widget-menu-top">
                    <h4 className="title">{footerIntemTwo.title}</h4>
                    <div className="inner pt-3">
                      <ul className="footer-link link-hover">
                        {indexTwoLink.map((data, index) => (
                          <li key={index}>
                            <Link to={`${data.url}`}>{data.text}</Link>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
              {/* End Single Widget  */}

              {/* Start Single Widget  */}
              <div className="col-lg-3 col-md-6 col-sm-6 col-12">
                <div className="rn-footer-widget">
                  <h4 className="title"> Follow Us</h4>
                  <div className="inner pt-3">
                    <ul className="social-icon social-default justify-content-start">
                      <li>
                        <Link
                          onClick={() =>
                            handleClick(
                              "facebook",
                              "https://www.facebook.com/zaisystems"
                            )
                          }
                        >
                          <FiFacebook />
                        </Link>
                      </li>
                      <li>
                        <Link
                          onClick={() =>
                            handleClick(
                              "skype",
                              "https://join.skype.com/invite/X73G9PKqIGfJ"
                            )
                          }
                        >
                          <FiTwitter />
                        </Link>
                      </li>
                      <li>
                        <Link
                          onClick={() =>
                            handleClick(
                              "Instagram",
                              "https://instagram.com/zaisystems?utm_medium=copy_link"
                            )
                          }
                        >
                          <FiInstagram />
                        </Link>
                      </li>
                      <li>
                        <Link
                          onClick={() =>
                            handleClick(
                              "linkedin",
                              "https://www.linkedin.com/company/zai-systems-smc-private-limited/?viewAsMember=true"
                            )
                          }
                        >
                          <FiLinkedin />
                        </Link>
                      </li>
                    </ul>
                    <h6 className="pt-4">Opening Hours</h6>
                    <p>
                      Monday-saturday. <br /> 9:00am to 6:00pm
                    </p>
                  </div>
                </div>
              </div>
              {/* End Single Widget  */}
            </div>
          </div>
        </div>
      </footer>
      <ScrollTop />
    </>
  );
};

export default FooterTwo;
