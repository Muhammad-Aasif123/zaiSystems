import React from "react";
import SEO from "../common/SEO";
import HeaderOne from "../common/header/HeaderOne";
import { Link } from "react-router-dom";
import { FiArrowRight } from "react-icons/fi";
import AdvanceTabOne from "../elements/advancetab/AdvanceTabOne";
import Separator from "../elements/separator/Separator";
import SectionTitle from "../elements/sectionTitle/SectionTitle";
import FooterTwo from "../common/footer/FooterTwo";
import AboutOne from "../elements/about/AboutOne";
import CircleProgress from "../elements/progressbar/CircleProgress";
import TravelAgency from "./TravelAgency";
import TeamOne from "../elements/team/TeamOne";
import Copyright from "../common/footer/Copyright";
import TestimonialThree from "../elements/testimonial/TestimonialThree";
import ServiceFive from "../elements/service/ServiceFive";
import Slider from "react-slick";
import { BannerActivation } from "../utils/script";
import HeaderTop from "../common/header/HeaderTop";
import CalltoActionFive from "../elements/calltoaction/CalltoActionFive";
import { ReactNavbar } from "overlay-navbar";

const BannerData = [
  {
    image: "/images/bg/bg-image-6.png",
    title: "ZaiSystems",
    description: `ZaiSystems speciality teams create cost-effective innovative
                    custom solutions to mett your challenges`,
  },
  {
    image: "/images/bg/bg-image-14.jpg",
    title: "Creative Agency.",
    description: `ZaiSystems speciality teams create cost-effective innovative
                    custom solutions to mett your challenges`,
  },
  {
    image: "/images/bg/bg-image-15.jpg",
    title: "Startup Agency.",
    description: `ZaiSystems speciality teams create cost-effective innovative
                    custom solutions to mett your challenges`,
  },
];
const options = {
  burgerColor: "#800000",
  burgerColorHover: "#fff",
  // logo,
  logoWidth: "20vmax",
  navColor1: "black",
  logoHoverSize: "10px",
  logoHoverColor: "#eb4034",
  link1Text: "Home",
  link2Text: "Products",
  link3Text: "Contact",
  link4Text: "About",
  link1Url: "/",
  link2Url: "/products",
  link3Url: "/contact",
  link4Url: "/about",
  link1Size: "1.3vmax",
  link1Color: "white",
  nav1justifyContent: "flex-end",
  nav2justifyContent: "flex-end",
  nav3justifyContent: "flex-start",
  nav4justifyContent: "flex-start",
  link1ColorHover: "#eb4034",
  link1Margin: "1vmax",
  profileIconUrl: "/",
  profileIconColor: "rgba(35, 35, 35,0.8)",
  searchIconColor: "rgba(35, 35, 35,0.8)",
  cartIconColor: "rgba(35, 35, 35,0.8)",
  profileIconColorHover: "#fff",
  searchIconColorHover: "#eb4034",
  cartIconColorHover: "#eb4034",
  cartIconMargin: "1vmax",
};

const Marketing = () => {
  return (
    <>
      <SEO title="Home" />
      <main className="page-wrapper">
        {/* <ReactNavbar {...options} /> */}
        <HeaderTop />
        <HeaderOne
          btnStyle="btn-small round btn-icon"
          // HeaderSTyle="header-not-transparent"
          HeaderSTyle="header-transparent"
        />

        {/* Start Slider Area  */}
        {/* <div className="slider-area slider-style-1 bg-transparent variation-2 height-750">
          <div className="container">
            <div className="row">
              <div className="col-lg-8 order-2 order-lg-1 mt_md--40 mt_sm--40">
                <div className="inner text-start">
                  <h1 className="title theme-gradient display-two">
                    We Give a Wide Range For
                    <br />
                    <Typed
                      strings={["IT Services.", "Developement", "Software"]}
                      typeSpeed={80}
                      backSpeed={5}
                      backDelay={1000}
                      loop
                    />
                  </h1>
                  <p className="description">
                    ZaiSystems speciality teams create cost-effective innovative
                    custom solutions to mett your challenges
                  </p>
                  <div className="button-group">
                    <Link
                      className="btn-default btn-medium btn-border round btn-icon"
                      to="/about-us"
                    >
                      About Us
                      <i className="icon">
                        <FiArrowRight />
                      </i>
                    </Link>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 order-1 order-lg-2">
                <div className="thumbnail">
                  <img src="./images/main.png" alt="Banner Images" />
                </div>
              </div>
            </div>
          </div>
        </div> */}
        {/* End Slider Area  */}

        {/* Start Slider Area  */}
        <Slider
          className="slider-area slider-style-4 slider-dot rn-slick-dot rn-slick-arrow"
          {...BannerActivation}
        >
          {BannerData.map((data, index) => (
            <div key={index} className="single-slide">
              <div
                className="height-850 bg-overlay bg_image"
                style={{
                  backgroundImage: `url(${process.env.PUBLIC_URL} ${data.image})`,
                }}
              >
                <div className="container">
                  <div className="row row--30 align-items-center">
                    <div className="order-2 order-lg-1 col-lg-7">
                      <div className="inner text-start">
                        <h1
                          className="title"
                          dangerouslySetInnerHTML={{ __html: data.title }}
                        ></h1>
                        <p
                          className="description"
                          dangerouslySetInnerHTML={{ __html: data.description }}
                        ></p>
                        <div className="button-group mt--30">
                          <a
                            className="btn-default"
                            target="_blank"
                            href="https://themeforest.net/checkout/from_item/33571911?license=regular"
                          >
                            PURCHASE NOW
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </Slider>
        {/* End Slider Area  */}

        {/* Start Service Area  */}
        <div className="rwt-tab-area rn-section-gap">
          <div className="container">
            <div className="row mb--40">
              <div className="col-lg-12">
                <SectionTitle
                  textAlign="text-center"
                  radiusRounded=""
                  subtitle="Company"
                  title="Our Business Stratagy Here."
                  description=""
                />
              </div>
            </div>
            <AboutOne />
          </div>
        </div>

        {/* End Service Area  */}

        <Separator />
        {/* Start Elements Area  */}
        <div className="rwt-advance-tab-area rn-section-gap">
          <div className="container">
            <div className="row mb--40">
              <div className="col-lg-12">
                <SectionTitle
                  textAlign="text-center"
                  radiusRounded=""
                  subtitle="COURSES"
                  title="Our Courses"
                  description=""
                />
              </div>
            </div>
            <AdvanceTabOne />
          </div>
        </div>

        {/* End Elements Area  */}
        <Separator />

        {/* Start Service Area  */}
        <div className="rn-service-area rn-section-gap">
          <div className="container">
            <div className="row">
              <div className="col-lg-12">
                <SectionTitle
                  textAlign="text-center"
                  radiusRounded=""
                  subtitle="About Our Company."
                  title="Services provide for you."
                />
              </div>
            </div>
            <ServiceFive serviceStyle="gallery-style" textAlign="text-start" />
            <div className="  mt-5  text-center">
              <Link
                className="btn-default btn-medium btn-border round btn-icon"
                to="/service"
              >
                Read More
                <i className="icon">
                  <FiArrowRight />
                </i>
              </Link>
            </div>
          </div>
        </div>
        {/* End Service Area  */}

        <Separator />
        <div className="rwt-elements-area rn-section-gap">
          <div className="container">
            <div className="row mb--25">
              <div className="col-lg-10 offset-lg-1">
                <SectionTitle
                  textAlign="text-start"
                  radiusRounded=""
                  subtitle="Experties"
                  title="EXPERTS IN"
                  description=""
                />
              </div>
            </div>
            <div className="col-lg-10 offset-lg-1 mt--10">
              <CircleProgress />
            </div>
          </div>
        </div>

        {/* Start Brand Area  */}
        <TravelAgency />

        {/* End Brand Area  */}

        {/* Start Elements Area  */}
        <div className="rwt-team-area rn-section-gap">
          <div className="container">
            <div className="row">
              <div className="col-lg-12">
                <SectionTitle
                  textAlign="text-center"
                  radiusRounded=""
                  subtitle="Our Experts."
                  title="Our Expert Team."
                  description=""
                />
              </div>
            </div>
            <TeamOne
              column="col-lg-4 col-md-6 col-12 mt--30"
              teamStyle="team-style-default"
            />
          </div>
        </div>
        {/* End Elements Area  */}
        <Separator />

        <div className="rwt-elements-area rn-section-gap">
          <div className="container">
            <div className="row mb--20">
              <div className="col-lg-12">
                <SectionTitle
                  textAlign="text-center"
                  radiusRounded=""
                  subtitle="Client Feedback"
                  title="Testimonial."
                />
              </div>
            </div>
            <TestimonialThree teamStyle="" />
          </div>
        </div>
        {/* End Elements Area  */}
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

export default Marketing;
