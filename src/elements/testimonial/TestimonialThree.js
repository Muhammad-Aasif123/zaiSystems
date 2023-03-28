import React from "react";
import Slider from "react-slick";
import { slickDot } from "../../utils/script";

const TestimonialData = [
  {
    form: "Poland",
    description: `Excellent communication, follow thru and very dedicated! Complete ease working with
    Zai Systems and his team. All are organized and very efficient with their processes.`,
    name: "Chandra Keyser",
    subtitle: "CO-FOUNDER",
    image: "testimonial-dark-01.jpg",
  },
  {
    form: "Germany",
    description: `Amazing company to work with. They were extremely knowledgeable and did an amazing 
    job on our website design and conversion to the Shopify platform. They were very patient 
    with us and were very fair in price. Very very happy with the outcome!`,
    name: "Ryan Donnelly",
    subtitle: "App Developer",
    image: "testimonial-dark-02.jpg",
  },
  {
    form: "USA",
    description: `I worked with Zaisystem on multiple projects and continue to come back to them.
    They are professional, personable and deliver a great project. They work well with my project feedback,
     often times able to read between the lines of what I am saying, and are very timely with their turnaround 
     times. `,

    name: "Jason Galli",
    subtitle: "App Developer",
    image: "testimonial-dark-03.jpg",
  },
];
const TestimonialThree = ({ teamStyle }) => {
  return (
    <div className="row">
      <div className="col-lg-12">
        <Slider
          className="slick-space-gutter--15 rn-slick-dot rn-slick-arrow mb--60"
          {...slickDot}
        >
          {TestimonialData.map((data, index) => (
            <div key={index} className={`testimonial-style-two ${teamStyle}`}>
              <div className="row align-items-center row--20">
                <div className="order-2 order-md-1 col-lg-6 col-md-8 offset-lg-1">
                  <div className="content mt_sm--40">
                    <span className="form">{data.form}</span>
                    <p className="description">{data.description}</p>
                    <div className="client-info">
                      <h4 className="title">{data.name}</h4>
                      <h6 className="subtitle">{data.subtitle}</h6>
                    </div>
                  </div>
                </div>
                <div className="order-1 order-md-2 col-lg-4 col-md-4">
                  <div className="thumbnail">
                    <img
                      className="w-100"
                      src={`./images/testimonial/${data.image}`}
                      alt="Corporate React Template"
                    />
                  </div>
                </div>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};
export default TestimonialThree;
