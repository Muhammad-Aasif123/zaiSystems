import React from "react";
import { FiActivity, FiCast, FiMap } from "react-icons/fi";
import { Link } from "react-router-dom";
import ScrollAnimation from "react-animate-on-scroll";
const smbData = [
  {
    image: "./images/icons/am_icon3-1.png",
    title: "Top Rated Digital Agency",
    description: `Top Rated Web Design & Digital Agency over the internet
          with 97% client retention rate. Zai Systems team is named
          as "Hard working" "Quick" "intell...`,
  },
  {
    image: "/images/icons/am_icon4.png",
    title: "Certified Web Specialists",
    description: `W3C, ITIL Certified Specialists at Zai Systems have worked
          with 50+ Technologies and tens of diverse business
          industries to get you all the experience requ...`,
  },
  {
    image: "/images/icons/ico-01-1.png",
    title: "24 Hours of Work Support",
    description: ` COPC, Six Sigma Certified Customer Support Team at Zai
          Systems is available 24 hours a day according to GMT and
          US EST timezones. We're always here when yo...`,
  },
  {
    image: "/images/icons/am_icon2.png",
    title: " Affordable Transparent Prices",
    description: ` Super Affordable Prices with 100% transparency that makes
          it easier for SMEs and Web Agencies to easily sub-contract
          work. We never over charge our custo...`,
  },
  {
    image: "/images/icons/am_icon5.png",
    title: "Ability to take up any load",
    description: `Zai Systems team work under controlled project management
          system which enables our customers to sub-contract any
          amount of work load. We have all the resou...`,
  },
  {
    image: "/images/icons/am_icon6.png",
    title: "Proven Code Standards",
    description: `Zai Systems code standards are proven and being utilized
          by web companies globally. Code produced by the developers
          is tested for W3C & Search Engine param...`,
  },
];

const ServiceSix = ({ textAlign, serviceStyle }) => {
  return (
    <div className="row row--15 service-wrapper">
      {smbData.map((val, i) => (
        <div className="col-lg-4 col-md-6 col-sm-6 col-12" key={i}>
          <ScrollAnimation
            animateIn="fadeInUp"
            animateOut="fadeInOut"
            animateOnce={true}
          >
            <div className={`service ${serviceStyle} ${textAlign}`}>
              <div className="icon">
                <img src={val.image} alt="Image not found" />
              </div>
              <div className="content">
                <h4 className="title w-600">
                  <Link
                    to="#service"
                    dangerouslySetInnerHTML={{ __html: val.title }}
                  ></Link>
                </h4>
                <p
                  className="description b1 color-gray mb--0"
                  dangerouslySetInnerHTML={{ __html: val.description }}
                ></p>
              </div>
            </div>
          </ScrollAnimation>
        </div>
      ))}
    </div>
  );
};

export default ServiceSix;
