import React from "react";
import ScrollAnimation from "react-animate-on-scroll";
import {FiMail } from "react-icons/fi";
import LocalPhoneRoundedIcon from '@mui/icons-material/LocalPhoneRounded';

const callToActionData = {
  title: "0334-6906960",
  subtitle: "zaisystems@gmail.com",
  btnText: "Purchase Doob",
};

const CalltoActionFive = () => {
  return (
    <div className="rn-callto-action clltoaction-style-default style-5">
      <div className="container">
        <div className="row row--0 align-items-center content-wrapper theme-shape">
          <div className="col-lg-6">
            <div className="inner">
              <div className="content text-left">
                <h3>Get in Touch</h3>
                <p className="w-75">
                  You will find yourself working in a true partnership that
                  results in an incredible experience, and an end product that
                  is the best.
                </p>
              </div>
            </div>
          </div>
          <div className="col-lg-6">
            <div className="inner">
              <div className="content text-left d-flex">
                <ScrollAnimation
                  animateIn="fadeInUp"
                  animateOut="fadeInOut"
                  animateOnce={true}
                >
                  <div className="rn-address bg-transparent">
                    <div className="icon">
                      <FiMail />
                    </div>
                    <div className="inner">
                      <p>
                        <a href="mailto:admin@gmail.com">
                          zaisystems@gmail.com
                        </a>
                      </p>
                    </div>
                  </div>
                </ScrollAnimation>

                <ScrollAnimation
                  animateIn="fadeInUp"
                  animateOut="fadeInOut"
                  animateOnce={true}
                >
                  <div className="rn-address bg-transparent">
                    <div className="icon">
                      <LocalPhoneRoundedIcon fontSize="40px" />
                    </div>
                    <div className="inner">
                      {/* <h6 className="title"> Number</h6> */}
                      <p>
                        <a href="tel:+92334-6906960">0334-6906960</a>
                      </p>
                      {/* <p>
                      <a href="tel:+222 222 222 333">+222 222 222 333</a>
                    </p> */}
                    </div>
                  </div>
                </ScrollAnimation>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default CalltoActionFive;
