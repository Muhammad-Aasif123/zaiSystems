import React from "react";
import ScrollAnimation from "react-animate-on-scroll";

const callToActionData = {
  title: "Ready to start creating a standard website?",
  subtitle: "Finest choice for your home & office",
  btnText: "Purchase Doob",
};
const experties = [
  {
    img: "/images/icons/blue-img-01.jpg",
    head: " ANALYTICS",
    para: ` Google Analytics is a web analytics service offered by
         Google that tracks and reports website traffic, currently as
         a platform inside the Google Marketing Platform brand.`,
  },
  {
    img: "/images/icons/blue-img-02.jpg",
    head: " DATABASE",
    para: ` A database is an organized collection of data, generally
    stored and accessed electronically from a computer system.`,
  },
  {
    img: "/images/icons/blue-img-03.jpg",
    head: " DEVELOPER TOOLS",
    para: `  AWS CodeCommit, AWS CodeBuild, AWS CodeDeploy, AWS
    CodePipeline, AWS CodeStar`,
  },
  {
    img: "/images/icons/blue-img-04.jpg",
    head: " STORAGE",
    para: `  Storage is a process through which digital data is saved
    within a data storage device by means of computing
    technology.`,
  },
  {
    img: "/images/icons/blue-img-05.jpg",
    head: " COMPUTE AND SERVERLESS",
    para: ` Serverless computing is a cloud computing execution model in
    which the cloud provider allocates machine resources on
    demand, taking care of the servers on behalf of their
    customers.
 `,
  },
  {
    img: "/images/icons/blue-img-06.jpg",
    head: " GOVERNANCE",
    para: `  Governance is the way rules, norms and actions are
    structured, sustained , regulated and held accountable.`,
  },
  {
    img: "/images/icons/blue-img-07.jpg",
    head: " NETWORKING AND SECURITY",
    para: `  Network security is the process of taking physical and
    software preventative measures to protect the underlying
    networking infrastructure from unauthorized access`,
  },
  {
    img: "/images/icons/blue-img-08.jpg",
    head: " AI AND ML",
    para: `   AWS Comprehend, AWS Sagemaker, TensorFlow on AWS, AWS Lex`,
  },
];
const CalltoActionOne = () => {
  return (
    <div
      className="rn-callto-action clltoaction-style-default bg_image bg_image_fixed"
      style={{
        backgroundImage: `url(${process.env.PUBLIC_URL}/images/bg/bg-image-1.jpg)`,
      }}
      data-black-overlay="7"
    >
      <div className="container">
        <h4 className="text-center pb-5">SAMPLE OF OUR SERVICES EXPERTISE</h4>
        <div className="row">
          {experties.map((val) => (
            <div className="col-lg-4">
              <div className="inner">
                <div className="content">
                  <ScrollAnimation
                    animateIn="fadeInUp"
                    animateOut="fadeInOut"
                    animateOnce={true}
                  >
                    {/* <h2 className="title">{callToActionData.title}</h2> */}
                    <div className="text-center p-2">
                      <div className="w-100 imgIcon">
                        <img
                          src={val.img}
                          style={{ width: "60px", objectFit: "cover" }}
                        />

                        <h5 className="pt-3"> {val.head} </h5>
                        <p style={{ marginTop: "-18px" }}> {val.para} </p>
                      </div>
                    </div>
                  </ScrollAnimation>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
export default CalltoActionOne;
