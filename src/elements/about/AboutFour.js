import React from "react";
import VideoTwo from "../video/VideoTwo";
import { FiCheck } from "react-icons/fi";

const PopupData = [
  {
    id: "01",
    image: "./images/bg/bg-image-4.jpg",
    popupLink: ["https://www.youtube.com/watch?v=BBQ8Lyy6cGc"],
  },
];

const AboutFour = ({ image }) => {
  return (
    <div className="about-area about-style-4 rn-section-gap">
      <div className="container">
        <div className="row row--40 align-items-center">
          <div className="col-lg-6 mt_md--40 mt_sm--40">
            <div className="content">
              <div className="inner">
                <h3 className="title">
                  Our Business Philosophy <br />
                  <strong>Corporate Business.</strong>
                </h3>
                <ul className="feature-list">
                  <li>
                    <div className="icon">
                      <FiCheck />
                    </div>
                    <div className="title-wrapper">
                      <h4 className="title">
                        A good traveler has no fixed plans
                      </h4>
                      <p className="text">
                        We combine proven methodologies, business domain
                        knowledge, and technology expertise to deliver beyond
                        client’s expectations. The largest communications
                        company in the world bundled their many
                        telecommunications services—cellular and web
                        connectivity, entertainment, and premium content, for
                        example—into a larger, crystallizing concept that we can
                        all understand and relate to: connection.
                      </p>
                    </div>
                  </li>
                  <li>
                    <div className="icon">
                      <FiCheck />
                    </div>
                    <div className="title-wrapper">
                      <h4 className="title">Who are we?</h4>
                      <p className="text">
                        Zaisystem is the leading technology company that was
                        established in 2017. It excels in software development,
                        e-commerce, and cloud-based solutions. The company was
                        formed with the aim to provide end-to-end solutions to
                        the people. Zaisystem innovative and research-based
                        approach enables it to deliver excellence and financial
                        growth for its customers.
                      </p>
                    </div>
                  </li>
                </ul>
                <div className="about-btn mt--30">
                  <a className="btn-default" href="#">
                    About Our Doob
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-6">
            {PopupData.map((item) => (
              <div className="video-btn" key={item.id}>
                <VideoTwo imagename={`${image}`} galleryItem={item} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutFour;
