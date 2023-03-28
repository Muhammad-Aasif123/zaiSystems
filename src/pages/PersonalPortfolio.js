import React from "react";
import { Link } from "react-router-dom";
import { FiArrowRight, FiCheck } from "react-icons/fi";
import SEO from "../common/SEO";
import HeaderOne from "../common/header/HeaderOne";
import FooterTwo from "../common/footer/FooterTwo";
import Copyright from "../common/footer/Copyright";
import AboutFive from "../elements/about/AboutFive";
import SectionTitle from "../elements/sectionTitle/SectionTitle";
import PortfolioOne from "../elements/portfolio/PortfolioOne";

import Separator from "../elements/separator/Separator";

import BlogList from "../components/blog/itemProp/BlogList";
import BlogClassicData from "../data/blog/BlogList.json";
import BlogPropTwo from "../components/blog/itemProp/BlogPropTwo";
import { Breadcrumb } from "react-bootstrap";
import HeaderTop from "../common/header/HeaderTop";
import CalltoActionFive from "../elements/calltoaction/CalltoActionFive";
var BlogListData = BlogClassicData.slice(0, 9);

const PersonalPortfolio = () => {
  return (
    <>
      <SEO title="Personal Portfolio" />
      <main className="page-wrapper">
        <HeaderTop />
        <HeaderOne
          btnStyle="btn-small round btn-icon"
          HeaderSTyle="header-transparent"
        />

        {/* Start Slider Area  */}
        <div
          className="slider-perosonal-portfolio height-750 bg_image"
          data-black-overlay="1"
          style={{
            backgroundImage: `url(${process.env.PUBLIC_URL}/images/bg/bg-image-11.png)`,
            backgroundColor: "#000",
            backgroundPosition: "760px 100px",
            backgroundSize: "auto",
          }}
        >
          <div className="container">
            <div className="row row--30 align-items-center">
              <div className="col-12">
                <div className="inner text-center">
                  <h1 className="title">
                    Hey! I'm <br />{" "}
                    <span className="theme-gradient">Owais khan</span>
                  </h1>
                  <div className="button-group mt--30">
                    <Link
                      className="btn-default round btn-border btn-large"
                      to="#"
                    >
                      Contact Me
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* End Slider Area  */}

        <AboutFive />

        <Breadcrumb
          title="The Easiest Way To Create Website <br /> Quick Copy & Make site."
          rootUrl="/"
          parentUrl="Home"
          currentUrl="Blog List View"
        />

        <div className="main-content">
          {/* Start Blog Area  */}
          <div className="rn-blog-area rn-section-gap">
            <div className="container">
              <div className="row mt_dec--30">
                <BlogPropTwo
                  column="col-lg-6 mt--30"
                  StyleVarProp="box-card-style-default card-list-view"
                />
              </div>
            </div>
          </div>
          {/* End Blog Area  */}
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
export default PersonalPortfolio;
