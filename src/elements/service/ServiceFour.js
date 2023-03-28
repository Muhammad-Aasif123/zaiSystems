import React from "react";
import { Link } from "react-router-dom";
import ScrollAnimation from "react-animate-on-scroll";

const ServiceList = [
  {
    icon: "1",
    title: "Discussion",
    description:
      "We meet customers in set place to discuss the details about needs and demands before.",
  },
  {
    icon: "2",
    title: "Concepts Initiatives",
    description:
      "Our experts come up with all kinds of ideas and initiatives for delivering the best.",
  },
  {
    icon: "3",
    title: "Testing Trying",
    description:
      "After agreeing on the ideas and plans, we will conduct meetings as scheduled and give comments.",
  },
  {
    icon: "4",
    title: "Execute install",
    description:
      "Once the final plan is approved, everything will be conducted according to the agreed contract.",
  },
];

const ServiceFour = ({ textAlign, serviceStyle }) => {
  return (
    <div className="row row--15 service-wrapper">
      {ServiceList.map((val, i) => (
        <div className="col-lg-3 col-md-6 col-sm-6 col-12" key={i}>
          <ScrollAnimation
            animateIn="fadeInUp"
            animateOut="fadeInOut"
            animateOnce={true}
          >
            <div className={`service ${serviceStyle} ${textAlign}`}>
              <div className="icon">
                <div className="line"></div>
                {val.icon}
              </div>
              <div className="content">
                <h4 className="title">
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
export default ServiceFour;
