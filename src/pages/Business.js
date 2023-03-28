import React from "react";
import SEO from "../common/SEO";
import Separator from "../elements/separator/Separator";
import AboutThree from "../elements/about/AboutThree";
import BlogClassicData from "../data/blog/BlogList.json";
import FooterTwo from "../common/footer/FooterTwo";
import Copyright from "../common/footer/Copyright";
import HeaderOne from "../common/header/HeaderOne";
import HeaderTop from "../common/header/HeaderTop";
import CalltoActionFive from "../elements/calltoaction/CalltoActionFive";
import webAnimation from "../data/webAnimation.json";
import Lottie from "react-lottie";
var BlogListData = BlogClassicData.slice(0, 3);

const Business = () => {
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: webAnimation,
  };
  return (
    <>
      <SEO title="FAQs" />
      <main className="page-wrapper">
        <HeaderTop />
        <HeaderOne btnStyle="btn-small" HeaderSTyle="header-not-transparent" />
        {/* Start Slider Area  */}
        <div className="slider-area slider-style-3 height-650">
          <div className="container">
            <div className="row row--30 align-items-center">
              <div className="order-2 order-lg-1 col-lg-5 mt_md--50 mt_sm--50 mt_lg--30">
                <div className="inner text-start">
                  <h1 className="title theme-gradient">FAQS</h1>
                  <p className="description">How Can I Help You ?</p>
                </div>
              </div>
              <div className="order-1 order-lg-2 col-lg-7">
                {/* <div className="text-center">
                  <img
                    src="./images/about/about-2.png"
                    alt="Banner Images"
                    className="w-100"
                  />
                </div> */}
                <Lottie options={defaultOptions} height={500} width={600} />
              </div>
            </div>
          </div>
        </div>
        {/* End Slider Area  */}
        <Separator />
        <AboutThree />
        {/* Start Elements Area  */}
        <div className="rwt-callto-action-area rn-section-gapBottom">
          <div className="wrapper">
            <CalltoActionFive />
          </div>
        </div>
        {/* End Elements Area  */}
        <FooterTwo />
        <Copyright />
      </main>
    </>
  );
};
export default Business;
