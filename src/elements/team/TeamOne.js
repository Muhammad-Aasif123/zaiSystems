import React from "react";
import ScrollAnimation from "react-animate-on-scroll";

const teamData = [
  {
    image: "team-01",
    name: "Huzaifa Ali",
    designation: "React Developer",
    location: "Pakistan",
    description:
      "Yes, I am a Reactjs Developer. I have a passion for Web Developement.",
  },
  {
    image: "team-02",
    name: "Taimoor Ali ",
    designation: "App Developer",
    location: "Pakistan",
    description:
      "Yes, I am a App Developerr. I have a passion for App Developement.",
  },
  {
    image: "team-03",
    name: "Mishal Khan",
    designation: "Accounts Manager",
    location: "Pakistan",
    description:
      "Yes, I am a Accounts Manager. I have a passion for Accounts Managing.",
  },
];

const TeamOne = ({ column, teamStyle }) => {
  return (
    <div className="row row--15">
      {teamData.map((data, index) => (
        <div className={`${column}`} key={index}>
          <div className={`rn-team ${teamStyle}`}>
            <ScrollAnimation
              animateIn="fadeInUp"
              animateOut="fadeInOut"
              animateOnce={true}
            >
              <div className="inner">
                <figure className="thumbnail">
                  <img
                    src={`./images/team/${data.image}.jpg`}
                    alt="Corporate React Template"
                  />
                </figure>
                <figcaption className="content">
                  <h2 className="title">{data.name}</h2>
                  <h6 className="subtitle theme-gradient">
                    {data.designation}
                  </h6>
                  <span className="team-form">
                    <img
                      src="./images/team/location.svg"
                      alt="Corporate React Template"
                    />
                    <span className="location">{data.location}</span>
                  </span>
                  <p className="description">{data.description}</p>
                </figcaption>
              </div>
            </ScrollAnimation>
          </div>
        </div>
      ))}
    </div>
  );
};

export default TeamOne;
