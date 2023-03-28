import React from "react";
import { Link } from "react-router-dom";
import ScrollAnimation from "react-animate-on-scroll";

const ServiceList = [
  {
    image: "/images/service/galery-image-01.png",
    title: "Web and Mobile",
    description:
      "We develop unique and fully customized web and mobile applications...",
  },
  {
    image: "https://www.kindpng.com/picc/m/248-2484394_transparent-ecommerce-logo-png-png-download.png" ,
    title: "E-commerce",
    description:
      "Through our honed engagement process we are able to add value and enrich your ecommerce...",
  },
  {
    image: "https://www.pragmatyxs.com/wp-content/uploads/2015/09/support-24-7.jpg",
    title: "24 Hours of Work Support",
    description:
      "COPC, Six Sigma Certified Customer Support Team at Zai Systems is available 24 hours a day...",
  },
];
const ServiceFive = ({ textAlign, serviceStyle }) => {
  return (
    <div className="row row--15 service-wrapper">
      {ServiceList.map((val, i) => (
        <div className="col-lg-4 col-md-6 col-sm-12 col-12" key={i}>
          <ScrollAnimation
            animateIn="fadeInUp"
            animateOut="fadeInOut"
            animateOnce={true}
          >
            <div className={`service ${serviceStyle} ${textAlign}`}>
              <div className="inner">
                <div className="content">
                  <h4 className="title">
                    <Link
                      to="#service"
                      dangerouslySetInnerHTML={{ __html: val.title }}
                    ></Link>
                  </h4>
                  <p
                    className="description"
                    dangerouslySetInnerHTML={{ __html: val.description }}
                  ></p>
                </div>
                <div className="image">
                  <img  src={`${val.image}`} alt="card Images" />
                </div>
              </div>
            </div>
          </ScrollAnimation>
        </div>
      ))}
    </div>
  );
};
export default ServiceFive;
