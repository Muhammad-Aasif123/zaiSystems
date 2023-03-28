import React from "react";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";

const TabTwo = () => {
  return (
    <div>
      <div className="row">
        <div className="col-lg-12">
          <Tabs>
            <div className="row row--30 align-items-center">
              <div className="col-lg-5">
                <img
                  className="radius-small"
                  src="./images/tab/tabs-00.jpg"
                  alt="Corporate React Template"
                />
              </div>
              <div className="col-lg-7 mt_md--40 mt_sm--40">
                <div className="rn-default-tab style-two">
                  <div className="tab-button-panel">
                    <TabList className="tab-button">
                      <Tab>
                        <div className="rn-tab-button">
                          <button>Partner</button>
                        </div>
                      </Tab>
                      <Tab>
                        <div className="rn-tab-button">
                          <button>Approach</button>
                        </div>
                      </Tab>
                      <Tab>
                        <div className="rn-tab-button">
                          <button>Deliver</button>
                        </div>
                      </Tab>
                    </TabList>
                  </div>

                  <div className="tab-content-panel">
                    <TabPanel>
                      <div className="rn-tab-content">
                        <div className="inner">
                          <h5>
                            <span className="icon flaticon-idea"></span>
                          </h5>
                          <h3>Partner With Clients</h3>
                          <p>
                            Our priority is not only providing professional
                            services and solutions but becoming a true
                            technology partner.
                          </p>
                        </div>
                      </div>
                    </TabPanel>

                    <TabPanel>
                      <div className="rn-tab-content">
                        <div className="inner">
                          <h3>Client-Centric Approach</h3>
                          <p>
                            We carefully analyze each client’s case to
                            understand their needs and objectives to deliver a
                            reliable and efficient solution.
                          </p>
                        </div>
                      </div>
                    </TabPanel>

                    <TabPanel>
                      <div className="rn-tab-content">
                        <div className="inner">
                          <h3>Deliver Maximum Value</h3>
                          <p>
                            Our fundamental corporate values stem from
                            understanding that our success is tied to the
                            success of our clients.
                          </p>
                        </div>
                      </div>
                    </TabPanel>
                  </div>
                </div>
              </div>
            </div>
          </Tabs>
        </div>
      </div>
    </div>
  );
};

export default TabTwo;
