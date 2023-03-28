import SectionTitle from "../elements/sectionTitle/SectionTitle";
import PortfolioOne from "../elements/portfolio/PortfolioOne";
import BlogList from "../components/blog/itemProp/BlogList";
import Separator from "../elements/separator/Separator";
import FooterTwo from "../common/footer/FooterTwo";
import Copyright from "../common/footer/Copyright";
import HeaderOne from "../common/header/HeaderOne";

import { FiArrowRight } from "react-icons/fi";
import { Link } from "react-router-dom";
import SEO from "../common/SEO";
import React from "react";
import { courseImg } from "../data/Courses";
import HeaderTop from "../common/header/HeaderTop";
import CalltoActionFive from "../elements/calltoaction/CalltoActionFive";

// var BlogListData = BlogClassicData.slice(0, 9);

const InternationalConsulting = () => {
  return (
    <>
      <SEO title="Courses" />
      <main className="page-wrapper">
        <HeaderTop />
        <HeaderOne
          btnStyle="btn-small btn-icon"
          HeaderSTyle="header-transparent"
        />

        {/* Start Slider Area  */}
        <div
          className="slider-area slider-style-1 variation-default height-850 bg_image"
          data-black-overlay="5"
          style={{
            backgroundImage: `url(${process.env.PUBLIC_URL}/images/bg/bg-image-18.jpg)`,
          }}
        >
          <div className="container">
            <div className="row">
              <div className="col-lg-12">
                <div className="inner text-center">
                  <h1 className="title display-one">
                    Courses <br />{" "}
                    <span className="theme-gradient">Business</span> &
                    <span className="theme-gradient">Consulting</span>.
                  </h1>
                  <p className="description text-center">
                    Choose the right subject matter.
                  </p>
                  <div className="button-group">
                    <Link
                      className="btn-default btn-medium btn-border btn-icon"
                      to="/contact"
                    >
                      Contact Us
                      <i className="icon">
                        <FiArrowRight />
                      </i>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* End Slider Area  */}

        <div className="main-content">
          <div className="rwt-portfolio-area rn-section-gap">
            <div className="container">
              <div className="row">
                <div className="col-lg-12">
                  <SectionTitle
                    textAlign="text-center"
                    radiusRounded=""
                    subtitle="Courses"
                    title="Research the topic extensively.!"
                    description=""
                  />
                </div>
              </div>
              <PortfolioOne Column="col-lg-4 col-md-6 mt--30 portfolio" />
            </div>
          </div>
        </div>

        <Separator />

        <Separator />
        <div className="blog-area rn-section-gap">
          <div className="container">
            <div className="row">
              <div className="col-lg-12">
                <SectionTitle
                  textAlign="text-center"
                  radiusRounded=""
                  subtitle="our Courses"
                  title="We Provide These All Courses"
                  description=""
                />
              </div>
            </div>
            <div className="row row--15 mt--10">
              {courseImg.map((item) => (
                <div
                  key={item.id}
                  className="col-lg-4 col-md-6 col-sm-12 col-12 mt--30"
                >
                  <BlogList StyleVar="box-card-style-default" data={item} />
                </div>
              ))}
            </div>
          </div>
        </div>
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

export default InternationalConsulting;
