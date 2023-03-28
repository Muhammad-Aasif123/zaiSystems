import React from "react";
import CountUp from "react-countup";
import TrackVisibility from "react-on-screen";

const Data = [
  {
    countNum: 350,
    countTitle: "Delivered Projects",
  },
  {
    countNum: 10,
    countTitle: "Year Experience",
  },
  {
    countNum: 150,
    countTitle: "Delighted Clients",
  },
  {
    countNum: 150,
    countTitle: "Team members",
  },
  {
    countNum: 3,
    countTitle: "Global Offices",
  },
  {
    countNum: 95,
    countTitle: "Client Retention Rate",
  },
];
const CounterUpFour = ({ textALign, counterStyle, column }) => {
  return (
    <div className="row">
      {Data.map((data, index) => (
        <div className={`${column}`} key={index}>
          <div className={`count-box ${counterStyle} ${textALign}`}>
            <TrackVisibility once>
              {({ isVisible }) =>
                isVisible && (
                  <div className="count-number">
                    {isVisible ? <CountUp end={data.countNum} /> : 0}
                  </div>
                )
              }
            </TrackVisibility>
            <h5 className="counter-title">{data.countTitle}</h5>
          </div>
        </div>
      ))}
    </div>
  );
};
export default CounterUpFour;
