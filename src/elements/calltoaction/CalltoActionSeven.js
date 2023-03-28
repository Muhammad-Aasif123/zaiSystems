import React from "react";
import ScrollAnimation from "react-animate-on-scroll";
import { FiArrowRight } from "react-icons/fi";
import Logo from "../logo/Logo";

import footerOne from "../../data/footer/footerOne.json";
import { FiFacebook, FiTwitter, FiInstagram, FiLinkedin } from "react-icons/fi";
import { Link } from "react-router-dom";
const footerIntemFive = footerOne[5];

const callToActionData = {
  title: "Ready to start creating a standard website?",
  subtitle:
    "Zai Systemsis a software company for those professionals who seek passion in the world of IT. Zai Systems integrates technology and human potential to provide intelligent business solutions for entrepreneurs and enterprises.",
  btnText: "Purchase Doob",
};

const CalltoActionSeven = () => {
  return (
    <div className="rn-callto-action clltoaction-style-default style-7">
      <div className="container">
        <div className="row row--0 align-items-center content-wrapper">
          <div className="col-lg-12 col-md-12">
            <div className="inner">
              <div className="content text-start">
                <Logo
                  image={`${process.env.PUBLIC_URL}/images/logo/logo.png`}
                  image2={`${process.env.PUBLIC_URL}/images/logo/logo-dark.png`}
                />
                <ScrollAnimation
                  animateIn="fadeInUp"
                  animateOut="fadeInOut"
                  animateOnce={true}
                >
                  <p className="subtitle text-content-justify pt-4">
                    {callToActionData.subtitle}
                  </p>
                </ScrollAnimation>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default CalltoActionSeven;
