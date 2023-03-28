import React from "react";
import SEO from "../common/SEO";
import Slider from "react-slick";
import { BannerActivation } from "../utils/script";
import BlogClassicData from "../data/blog/BlogList.json";
var BlogListData = BlogClassicData.slice(0, 3);

const BannerData = [
  {
    image: "/images/bg/bg-image-7.webp",
    title: "Quadient Inspire Services",
    heading: "Your Custom CCM Development Partner",
    description:
      "Zai Systems has partnered with Quadient to provide its clients best in class CCM Development Services.",
  },
  {
    image: "/images/bg/project7.webp",
    title: "Development Teams",
    heading: "Technical Resources When You Need Them.",
    description:
      "Zai Systems provides cost-effective onsite & virtual staffing solutions by building strong relationships and connecting people",
  },
  {
    image: "/images/bg/bg-image-9.webp",
    title: "Process Automation",
    heading: "Innovative Automation Techniques at your Finger Tips",
    description:
      "We expertise in Robotic Process Automation, Process Mining, Webscraping and Document Processing.",
  },
  {
    image: "/images/bg/bg-image-8.webp",
    title: "CallMiner Solutions",
    heading: "The CallMiner one-stop-shop",
    description: `Zai Systems is a certified CallMiner strategic partner helping customers leverage all the platform’s capabilities.`,
  },
  {
    image: "/images/bg/project8.webp",
    title: "Legacy Migration",
    heading: "Migrate VFP, VB6 and Classic ASP Applications To .NET",
    description:
      "Zai Systems is your migration partner in converting legacy applications for security, performance & competitive advantages.",
  },
];

const PopupData = [
  {
    id: "01",
    image: "./images/portfolio/portfolio-01.jpg",
    popupLink: [
      "./images/portfolio/portfolio-01.jpg",
      "https://www.youtube.com/watch?v=ctsT5Y-InqE&ab_channel=Rainbow-Themes",
      "./images/portfolio/portfolio-03.jpg",
      "./images/portfolio/portfolio-04.jpg",
      "https://www.youtube.com/watch?v=ctsT5Y-InqE&ab_channel=Rainbow-Themes",
      "./images/portfolio/portfolio-05.jpg",
    ],
  },
  {
    id: "02",
    image: "./images/portfolio/portfolio-02.jpg",
    popupLink: [
      "https://www.youtube.com/watch?v=ctsT5Y-InqE&ab_channel=Rainbow-Themes",
    ],
  },
  {
    id: "03",
    image: "./images/portfolio/portfolio-03.jpg",
    popupLink: ["./images/portfolio/portfolio-03.jpg"],
  },
  {
    id: "04",
    image: "./images/portfolio/portfolio-04.jpg",
    popupLink: ["./images/portfolio/portfolio-04.jpg"],
  },
  {
    id: "05",
    image: "./images/portfolio/portfolio-04.jpg",
    popupLink: [
      "https://www.youtube.com/watch?v=ctsT5Y-InqE&ab_channel=Rainbow-Themes",
    ],
  },
  {
    id: "06",
    image: "./images/portfolio/portfolio-05.jpg",
    popupLink: ["./images/portfolio/portfolio-05.jpg"],
  },
];

const TravelAgency = () => {
  return (
    <>
      <SEO title="Travel Agency" />
      <main className="page-wrapper">
        {/*
                <HeaderOne btnStyle="btn-small" HeaderSTyle="header-transparent" /> */}

        {/* Start Slider Area  */}
        <Slider
          className="slider-area slider-style-4 slider-dot rn-slick-dot rn-slick-arrow"
          {...BannerActivation}
        >
          {BannerData.map((data, index) => (
            <div key={index} className="single-slide">
              <div
                className="height-750 bg_image"
                data-black-overlay="5"
                style={{
                  backgroundImage: `url(${process.env.PUBLIC_URL} ${data.image})`,
                }}
              >
                <div className="container">
                  <div className="row row--30 align-items-center">
                    <div className="col-12">
                      <div className="inner text-center">
                        <h6
                          className="title"
                          dangerouslySetInnerHTML={{ __html: data.title }}
                        ></h6>
                        <h6>{data.heading}</h6>
                        <p
                          className="description"
                          dangerouslySetInnerHTML={{ __html: data.description }}
                        ></p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </Slider>
        {/* End Slider Area  */}
      </main>
    </>
  );
};

export default TravelAgency;
