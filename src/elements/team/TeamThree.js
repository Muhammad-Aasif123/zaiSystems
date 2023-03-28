import React from "react";
import { FiFacebook, FiTwitter, FiInstagram, FiLinkedin } from "react-icons/fi";
import { Link } from "react-router-dom";
import ScrollAnimation from "react-animate-on-scroll";

const teamData = [
  {
    image: "team-01.jpg",
    name: "Huzaifa Ali",
    designation: "Developer",
  },
  {
    image: "team-11.jpeg",
    name: "Mishal Riasat",
    designation: "Developer",
  },
  {
    image: "team-15.jpeg",
    name: "Muhammad saeed",
    designation: " Developer",
  },
  {
    image: "team-14.jpg",
    name: "Fatima Alvi",
    designation: "Developer",
  },
  {
    image: "team-09.webp",
    name: "Sami Ahmad",
    designation: "Developer",
  },

  {
    image: "team-04.jpg",
    name: "M Furqan Latif",
    designation: "Web Developer",
  },

  {
    image: "team-05.webp",
    name: "Aiman Atif",
    designation: "Developer",
  },
  {
    image: "team-06.webp",
    name: "Muhammad Nadeem",
    designation: "Developer",
  },
  {
    image: "team-07.webp",
    name: "Rashid Farid",
    designation: "Developer",
  },
  {
    image: "team-08.jpg",
    name: "Muhammad Saad",
    designation: "Developer",
  },
  {
    image: "team-10.jpg",
    name: "Waqas Mughal",
    designation: "Developer",
  },

  {
    image: "team-12.jpeg",
    name: "Abdullah Asif",
    designation: " Developer",
  },
  {
    image: "team-13.jpg",
    name: "Talha Nasir",
    designation: "Developer",
  },

  {
    image: "team-16.jpg",
    name: "Kumail raza",
    designation: " Developer",
  },
  {
    image: "team-17.jpg",
    name: "Ubaid shah nawaz",
    designation: " Developer",
  },
];

const TeamThree = ({ column, teamStyle }) => {
  return (
    <div className="row row--30">
      {teamData.map((data, index) => (
        <div className={`${column}`} key={index}>
          <ScrollAnimation
            animateIn="fadeInUp"
            animateOut="fadeInOut"
            animateOnce={true}
          >
            <div className={`rn-team ${teamStyle}`}>
              <div className="inner">
                <figure className="thumbnail">
                  <img
                    src={`./images/team/${data.image}`}
                    alt="Corporate React Template"
                  />
                </figure>
                <figcaption className="content">
                  <h2 className="title">{data.name}</h2>
                  <h6 className="subtitle theme-gradient">
                    {data.designation}
                  </h6>
                </figcaption>
              </div>
            </div>
          </ScrollAnimation>
        </div>
      ))}
    </div>
  );
};

export default TeamThree;
