import React from "react";
import { FiActivity, FiCast, FiMap } from "react-icons/fi";
import { Link } from "react-router-dom";
import ScrollAnimation from "react-animate-on-scroll";

const ServiceList = [
  {
    icon: <FiActivity />,
    title: "User Experience Design",
    description:
      "We focus on what engages and delights users and combine it with what is technologically feasible and economically viable within a product.",
  },
  {
    icon: <FiCast />,
    title: "Managed Cloud Services",
    description:
      "We help businesses manage their cloud infrastructures as well as architecture, develop and deploy on the AWS cloud by leveraging our demonstrated skills.",
  },
  {
    icon: <FiMap />,
    title: "DevOps",
    description:
      "We know what it takes to deliver robust, secure, high-performance, and enterprise-grade applications and products  and expertise in the cloud services domain.",
  },
  {
    icon: <FiActivity />,
    title: "Web and Mobile",
    description:
      "We develop unique and fully customized web and mobile applications. We have a creative team capable of adopting different styles for various business...",
  },
  {
    icon: <FiCast />,
    title: "E-commerce",
    description:
      "Through our honed engagement process we are able to add value and enrich your ecommerce propositions at every step of the project life cycle for both...",
  },
  {
    icon: <FiMap />,
    title: "Bespoke IT Solutions for Business",
    description:
      "Our IT Solutions and Services give you access to our proficiency in advanced technologies and proven practices along the entire IT life.",
  },
  {
    icon: <FiActivity />,
    title: "Data Analytics",
    description:
      "Data should help you run your business better. That’s why we take a business-led approach to data analytics, to help you create sustained business insight.",
  },
  {
    icon: <FiCast />,
    title: "Business Intelligence",
    description:
      "To drive your business forward you need fast and accurate reporting, swift implementation of processes and answers to simple questions.",
  },
  {
    icon: <FiMap />,
    title: "Information Strategy",
    description:
      "Information Strategy brings together everything that can have an impact on or be impacted by data analytics.",
  },
];

const ServiceOne = ({ textAlign, serviceStyle }) => {
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
              <div className="icon">{val.icon}</div>
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
export default ServiceOne;
