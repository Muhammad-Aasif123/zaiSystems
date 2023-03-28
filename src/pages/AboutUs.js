import React from "react";
import SEO from "../common/SEO";
import HeaderOne from "../common/header/HeaderOne";
import AboutFour from "../elements/about/AboutFour";
import SectionTitle from "../elements/sectionTitle/SectionTitle";
import CounterUpFour from "../elements/counterup/CounterUpFour";
import TimelineTwo from "../elements/timeline/TimelineTwo";
import Separator from "../elements/separator/Separator";
import ServiceThree from "../elements/service/ServiceThree";
import TabTwo from "../elements/tab/TabTwo.js";
import FooterTwo from "../common/footer/FooterTwo";
import Copyright from "../common/footer/Copyright";
import AboutOne from "../elements/about/AboutOne";
import CalltoActionOne from "../elements/calltoaction/CalltoActionOne";
import TimelineOne from "../elements/timeline/TimelineOne";
import HeaderTop from "../common/header/HeaderTop";
import CalltoActionFive from "../elements/calltoaction/CalltoActionFive";
const BannerData = [
  {
    image: "/images/bg/bg-image-6.jpg",
    title: "Digital Agency.",
    description:
      "We help our clients succeed by creating brand identities, digital experiences, and print materials.",
  },
  {
    image: "/images/bg/bg-image-14.jpg",
    title: "Creative Agency.",
    description:
      "We help our clients succeed by creating brand identities, digital experiences, and print materials.",
  },
  {
    image: "/images/bg/bg-image-15.jpg",
    title: "Startup Agency.",
    description:
      "We help our clients succeed by creating brand identities, digital experiences, and print materials.",
  },
];



const AboutUs = () => {
  return (
    <>
      <SEO title="About Us" />
      <main className="page-wrapper">
        <HeaderTop />
        <HeaderOne
          btnStyle="btn-small round btn-icon"
          HeaderSTyle="header-transparent"
        />

        {/* Start Slider Area  */}

        <div
          className="slider-area slider-style-1 height-850 bg_image"
          data-black-overlay="5"
          style={{
            backgroundImage: `url(${process.env.PUBLIC_URL}/images/bg/bg-image-12.jpg)`,
          }}
        >
          <div className="container">
            <div className="row">
              <div className="col-lg-12">
                <div className="inner pt--80 text-center">
                  <div>
                    <h3 className="rn-sub-badge">
                      <span className="theme-gradient">
                        Our Company's About Details.
                      </span>
                    </h3>
                  </div>
                  <h1 className="title display-one">
                    We are a Corporate <br /> Business Agency.
                  </h1>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* End Slider Area  */}

        {/* Start Service Area  */}
        <div className="rwt-tab-area rn-section-gap">
          <div className="container">
            <AboutOne />
          </div>
        </div>
        <Separator />

        {/* Start Timeline Area  */}
        <div className="rwt-timeline-area rn-section-gap">
          <div className="container">
            <div className="row">
              <div className="col-lg-12">
                <SectionTitle
                  textAlign="text-center"
                  radiusRounded=""
                  subtitle="Timeline"
                  title="Working Process."
                />
              </div>
            </div>

            <div className="row">
              <div className="col-lg-12">
                <TimelineOne />
              </div>
            </div>
          </div>
        </div>
        {/* End Timeline Area  */}

        <Separator />

        {/* Start Service Area  */}
        <div className="rn-service-area rn-section-gap ">
          <div className="container">
            <div className="row">
              <div className="col-lg-12">
                <SectionTitle
                  textAlign="text-center"
                  radiusRounded=""
                  subtitle="About"
                  title="Our Vision & Core Values"
                  description="The top leadership at Zai Systems is determined to be the market leader of the custom software development world. Our aim is to be known for our quality service, commitment to excellence, brilliant products, and as the success enablers for our clients."
                />
              </div>
            </div>
            <ServiceThree
              serviceStyle="service__style--2"
              textAlign="text-center"
            />
          </div>
        </div>
        {/* End Service Area  */}
        <Separator />

        <div className="rwt-timeline-area rn-section-gap">
          <div className="container">
            <div className="row">
              <div className="col-lg-12">
                <SectionTitle
                  textAlign="text-center"
                  radiusRounded=""
                  subtitle="Working Process"
                  title="Why Choose Zai Systems"
                  description="Delivering results in nearly all software development scenarios, our seasoned professionals are vigilant of deadlines and committed to exceeding expectations. It is our deep attention to detail that makes us unique. You will find our experts planning for success employing creative technology solutions."
                />
              </div>
            </div>
            <div className="row">
              <div className="col-lg-10 offset-lg-1 mt--50">
                <TimelineTwo classVar="no-gradient" />
              </div>
            </div>
          </div>
        </div>

        <Separator />

        <AboutFour image="./images/about/contact-image.jpg" />

        {/* Start Elements Area  */}
        <div className="rwt-counterup-area pb--100">
          <div className="container mt_dec--30">
            <CounterUpFour
              column="col-lg-2 col-md-6 col-sm-6 col-12"
              counterStyle="counter-style-4"
              textALign="text-center"
            />
          </div>
        </div>
        {/* End Elements Area  */}
        {/* Start Elements Area  */}
        <div className="rwt-callto-action-area rn-section-gap">
          <div className="wrapper">
            <CalltoActionOne />
          </div>
        </div>
        {/* End Elements Area  */}

        {/* Start Elements Area  */}
        <div className="rwt-tab-area rn-section-gap">
          <div className="container">
            <div className="row mb--40">
              <div className="col-lg-12">
                <SectionTitle
                  textAlign="text-center"
                  radiusRounded=""
                  subtitle="BUSINESS PHILOSOPHY"
                  title="Our Business Philosophy"
                  description=""
                />
              </div>
            </div>
            <TabTwo />
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

export default AboutUs;
