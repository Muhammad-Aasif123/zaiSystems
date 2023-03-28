import React from "react";
import { Link } from "react-router-dom";
import { LanguageData } from "../../data/AllData";

const PortfolioDetailsContent = ({ data }) => {
  console.log("Data", data.category);
  let { category } = data;
  const newList = LanguageData.filter((v) => v.category === category);
  // console.log(newList.listOne);
  return (
    <div className="rwt-portfolio-details rn-section-gap">
      <div className="container">
        <div className="row">
          <div className="col-lg-10 offset-lg-1">
            <div className="inner">
              <div className="details-list">
                <div className="thumbnail alignwide">
                  <img
                    className="radius w-100"
                    src={`${process.env.PUBLIC_URL}/${data.largeImage}`}
                    alt="Corporate Image"
                  />
                </div>

                <div className="row mt--40 row--30">
                  <div className="col-lg-12 mt_md--30 mt_sm--30">
                    {newList.map(
                      ({
                        para,
                        list,
                        listAud,
                        listCourse,
                        listCertificate,
                        listOne,
                        listTemp,
                        listService,
                        listRoute,
                        listTools,
                        listBenefit,
                      }) => (
                        <div className="inner-container">
                          <h3> {data.title} </h3>
                          <p>{para}</p>

                          {listOne !== undefined &&
                            listOne.map(({ para, head }) => (
                              <>
                                {head && (
                                  <h5 className="text-white mb-3">{head}</h5>
                                )}
                                <div className="evs-listgroup">
                                  <p>{para} </p>
                                </div>
                              </>
                            ))}

                          {list?.map(({ paragraph, head }) => (
                            <>
                              {head && (
                                <h5 className="text-white mb-3">{head}</h5>
                              )}
                              <div className="evs-listgroup">
                                <p>{paragraph} </p>
                              </div>
                            </>
                          ))}

                          {listAud?.map(({ para, head }) => (
                            <>
                              {head && (
                                <h5 className="text-white mt-4 mb-2">{head}</h5>
                              )}
                              <div className="evs-listgroup">
                                <p>{para} </p>
                              </div>
                            </>
                          ))}

                          {listTemp !== undefined &&
                            listTemp?.map(({ para, head }) => (
                              <>
                                {head && (
                                  <h5 className="text-white mt-4 mb-2">
                                    {head}
                                  </h5>
                                )}
                                <div className="evs-listgroup">
                                  <p>{para} </p>
                                </div>
                              </>
                            ))}
                          {listService !== undefined &&
                            listService.map(({ head, para }) => (
                              <>
                                {head && (
                                  <h5 className="text-white mt-4 mb-2">
                                    {head}
                                  </h5>
                                )}
                                <div className="evs-listgroup">
                                  <p>{para} </p>
                                </div>
                              </>
                            ))}
                          {listRoute !== undefined &&
                            listRoute.map(({ head, para }) => (
                              <>
                                {head && (
                                  <h5 className="text-white mt-4 mb-2">
                                    {head}
                                  </h5>
                                )}
                                <div className="evs-listgroup">
                                  <p>{para} </p>
                                </div>
                              </>
                            ))}
                          {listTools !== undefined &&
                            listTools.map(({ head, para }) => (
                              <>
                                {head && (
                                  <h5 className="text-white mt-4 mb-2">
                                    {head}
                                  </h5>
                                )}
                                <div className="evs-listgroup">
                                  <p>{para} </p>
                                </div>
                              </>
                            ))}
                          {listBenefit !== undefined &&
                            listBenefit.map(({ head, para }) => (
                              <>
                                {head && (
                                  <h5 className="text-white mt-4 mb-2">
                                    {head}
                                  </h5>
                                )}
                                <div className="evs-listgroup">
                                  <p>{para} </p>
                                </div>
                              </>
                            ))}

                          {listCourse !== undefined &&
                            listCourse.map(({ para, head }) => (
                              <>
                                {head && (
                                  <h5 className="text-white mt-4 mb-2">
                                    {head}
                                  </h5>
                                )}
                                <p>{para}</p>
                              </>
                            ))}
                          {listCertificate.map(({ para, head }) => (
                            <>
                              {head && (
                                <h5 className="text-white mt-4 mb-2">{head}</h5>
                              )}
                              <div className="evs-listgroup">
                                <p>{para} </p>
                              </div>
                            </>
                          ))}
                        </div>
                      )
                    )}
                  </div>
                  <div className="col-lg-12">
                    <div className="content-left">
                      <h4 className="title">{data.title}</h4>
                      <div className="single-list-wrapper">
                        <div className="single-list">
                          <label>Certificate:</label>
                          <span>{data.date}</span>
                        </div>
                        <div className="single-list">
                          <label>Duration:</label>
                          <span>{data.client}</span>
                        </div>
                        <div className="single-list">
                          <label>Category:</label>
                          <span>{data.title}</span>
                        </div>
                      </div>
                      <div className="view-btn mt--50">
                        <Link
                          className="btn-default btn-large round"
                          to={`${data.btn.link}`}
                        >
                          {data.btn.buttontext}
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PortfolioDetailsContent;
