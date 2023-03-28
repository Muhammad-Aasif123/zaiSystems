import React from "react";
import SEO from "../../common/SEO";
import Layout from "../../common/Layout";
import SectionTitle from "../sectionTitle/SectionTitle";
import ServiceOne from "./ServiceOne";
import ServiceFour from "./ServiceFour";
import Separator from "../separator/Separator";
import ServiceSix from "./ServiceSix";
import { Link } from "react-router-dom";
import CalltoActionFive from "../calltoaction/CalltoActionFive";

const Service = () => {
  return (
    <>
      <SEO title="Service || Doob - React Business  Template" />
      <Layout>
        {/* Start Slider area  */}
        <div
          className="slider-area slider-style-5 bg-overlay-solid height-850 bg_image"
          data-black-overlay="3"
          style={{
            backgroundImage: `url(${process.env.PUBLIC_URL}/images/bg/bg-image-13.jpg)`,
          }}
        >
          <div className="container">
            <div className="row">
              <div className="col-lg-12">
                <div className="inner text-start">
                  <h4 className="subtitle">About Services</h4>
                  <h1 className="title display-one">
                    Our Wide Range <br />
                    Of Services
                  </h1>
                  <div className="button-group mt--40 mt_sm--20">
                    <Link className="btn-default" to="/contact">
                      Contact Us
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* End Slider area  */}
        <div className="main-content">
          {/* Start Service Area  */}
          <div className="rn-service-area rn-section-gap">
            <div className="container">
              <div className="row">
                <div className="col-lg-12">
                  <SectionTitle
                    textAlign="text-center"
                    radiusRounded=""
                    subtitle="What we can do for you"
                    title="Services provide for you."
                  />
                </div>
              </div>
              <ServiceOne
                serviceStyle="service__style--1 bg-color-blackest radius mt--25"
                textAlign="text-center"
              />
            </div>
          </div>
          {/* End Service Area  */}

          <Separator />
          {/* Start Service Area  */}
          <div className="rn-service-area rn-section-gap">
            <div className="container">
              <div className="row">
                <div className="col-lg-12">
                  <SectionTitle
                    textAlign="text-center"
                    radiusRounded=""
                    subtitle="Services"
                    title="Our standard approach is to help your business find the
                    right serviceto use"
                  />
                </div>
              </div>
              <ServiceFour
                serviceStyle="service__style--1 icon-circle-style with-working-process"
                textAlign="text-center"
              />
            </div>
          </div>
          {/* End Service Area  */}

          <Separator />

          {/* Start Service Area  */}
          <div className="rn-service-area rn-section-gap">
            <div className="container">
              <div className="row">
                <div className="col-lg-12">
                  <SectionTitle
                    textAlign="text-center"
                    radiusRounded=""
                    subtitle="What we can do for you"
                    title="Why SMBs, Ecommerce And Web Agencies Fully Rely On Zai Systems As Their Sole Digital Partner?"
                  />
                </div>
              </div>
              <ServiceSix
                serviceStyle="service__style--1 icon-circle-style"
                textAlign="text-center"
              />
            </div>
          </div>
          {/* End Service Area  */}

          {/* Start Elements Area  */}
          <div className="rwt-callto-action-area rn-section-gapBottom">
            <div className="wrapper">
              <CalltoActionFive />
            </div>
          </div>
          {/* End Elements Area  */}
        </div>
      </Layout>
    </>
  );
};

export default Service;
