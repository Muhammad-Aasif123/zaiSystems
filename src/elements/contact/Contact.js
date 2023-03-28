import React from "react";
import SEO from "../../common/SEO";
import Layout from "../../common/Layout";
import BreadcrumbOne from "../breadcrumb/BreadcrumbOne";
import SectionTitle from "../sectionTitle/SectionTitle";
import ContactOne from "./ContactOne";
import { FiArrowRight } from "react-icons/fi";
import Typed from "react-typed";
import { Link } from "react-router-dom";
import Separator from "../separator/Separator";
const Contact = () => {
  return (
    <>
      <SEO title="Contact || Doob - React Business  Template" />
      <Layout>
        {/* Start Slider Area  */}
        <div className="slider-area slider-style-1 bg-transparent variation-2 height-750">
          <div className="container">
            <div className="row">
              <div className="col-lg-7 order-2 order-lg-1 mt_md--40 mt_sm--40">
                <div className="inner text-start">
                  <h1 className="title theme-gradient display-two">
                    Contact Us
                    {/* <br />
                    <Typed
                      strings={["IT Services.", "Developement", "Software"]}
                      typeSpeed={80}
                      backSpeed={5}
                      backDelay={1000}
                      loop
                    /> */}
                  </h1>
                  <p className="description w-75">
                   If you have any questions or queries a member of our staff will always be happy to help.Feel
                   free to contact us by telephone or email and we will be sure to get back to you as soon as possible.
                  </p>
                  {/* <div className="button-group">
                    <Link
                      className="btn-default btn-medium btn-border round btn-icon"
                      to="/about-us"
                    >
                      About Us
                      <i className="icon">
                        <FiArrowRight />
                      </i>
                    </Link>
                  </div> */}
                </div>
              </div>
              <div className="col-lg-5 order-1 order-lg-2">
                <div className="thumbnail">
                  <img src="https://c8.alamy.com/comp/2F9N6A8/businessman-pointing-to-contact-us-sign-on-virtual-screen-2F9N6A8.jpg" alt="Banner Images" />
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* End Slider Area  */}
        <Separator />
        <div className="main-content">
          {/* Start Contact Area  */}
          <div className="rwt-contact-area rn-section-gap">
            <div className="container">
              <div className="row">
                <div className="col-lg-12 mb--40">
                  <SectionTitle
                    textAlign="text-center"
                    radiusRounded=""
                    subtitle="Contact Form"
                    title="Our Contact Address Here."
                    description=""
                  />
                </div>
              </div>
              <ContactOne />
            </div>
          </div>
          {/* End Contact Area  */}
        </div>
      </Layout>
    </>
  );
};
export default Contact;
