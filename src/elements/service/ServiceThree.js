import React from "react";
import { Link } from "react-router-dom";
import ScrollAnimation from "react-animate-on-scroll";

const ServiceList = [
  {
    image: "/images/service/icon-01.png",
    title: "Drive To Inspire",
    description:
      "We work hard to make every day count. We recognize that the route to success lies is in the small detail.",
  },
  {
    image: "/images/service/icon-02.png",
    title: "Team Work",
    description:
      "Out collective culture of resilience and perseverance is a key attribute to overcome all challenges.",
  },
  {
    image: "/images/service/icon-03.png",
    title: "Customer Focus",
    description:
      "“Customer is King” is not just a catch phrase for us, it is our way of life, our clients are witness to it.",
  },
];
const ServiceThree = ({ textAlign, serviceStyle }) => {
  return (
    <div className="row row--15 service-wrapper">
      {ServiceList.map((val, i) => (
        <div className="col-lg-4 col-md-6 col-sm-6 col-12" key={i}>
          <ScrollAnimation
            animateIn="fadeInUp"
            animateOut="fadeInOut"
            animateOnce={true}
          >
            <div className={`service ${serviceStyle} ${textAlign}`}>
              <div className="inner">
                <div className="image">
                  <img src={`${val.image}`} alt="card Images" />
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
            </div>
          </ScrollAnimation>
        </div>
      ))}
    </div>
  );
};
export default ServiceThree;
