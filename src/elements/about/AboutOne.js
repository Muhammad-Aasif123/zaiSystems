import React from "react";
import Slider from "react-slick";
import Typed from "react-typed";

const AboutOne = () => {
  return (
    <div className="rwt-about-area rn-section-gap">
      <div className="container">
        <div className="row row--30 align-items-center">
          <div className="col-lg-5">
            <div className="thumbnail">
              <img
                className="w-100"
                src="./images/about/about-1.jpg"
                alt="About Images"
              />
            </div>
          </div>

          <div className="col-lg-7 mt_md--40 mt_sm--40">
            <div className="content">
              <div className="section-title">
                <h2 className="title">
                  Welcome To <br />
                  <Typed
                    className="theme-gradient"
                    strings={["Zai Systems."]}
                    typeSpeed={80}
                    backSpeed={5}
                    backDelay={1000}
                    loop
                  />
                </h2>
                <p className="text-justify">
                  If you are worried about your new business then no need to
                  worry because Zai Systems have ways out for all of your
                  problems.
                </p>
                <p className="text-justify">
                  Zai Systems has a powerful combination of business experience
                  and technological expertise providing clients
                  best-in-className solutions, in software development projects.
                  Zai Systems delivers high-quality, cost-effective, full
                  lifecycle solutions for all sorts of development projects
                </p>
                <p>
                  <span style={{ color: "#fff" }}>Owais Ahmad Khan, CEO</span>{" "}
                  <br />A chief executive officer (CEO) is the highest-ranking
                  executive of a firm. CEOs act as the company's public face and
                  make major corporate decisions.
                </p>
                <div className="read-more-btn mt--40">
                  <a className="btn-default" href="#">
                    <span>More About Us</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutOne;
