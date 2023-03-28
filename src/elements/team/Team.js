import React from "react";
import SEO from "../../common/SEO";
import Layout from "../../common/Layout";
import Separator from "../separator/Separator";
import BreadcrumbOne from "../breadcrumb/BreadcrumbOne";
import SectionTitle from "../sectionTitle/SectionTitle";
import TeamOne from "./TeamOne";

import TeamThree from "./TeamThree";

const Team = () => {
  return (
    <>
      <SEO title="Team || Doob - React Business  Template" />
      <Layout>
        <BreadcrumbOne
          title="Our Experts Team"
          rootUrl="/"
          parentUrl="Home"
          currentUrl="Team"
        />
        <div className="main-content">
          {/* Start Elements Area  */}
          <div className="rwt-team-area rn-section-gap">
            <div className="container">
              <div className="row">
                <div className="col-lg-12 mb--15">
                  <SectionTitle
                    textAlign="text-center"
                    radiusRounded=""
                    subtitle="Our Experts."
                    title="Team Style Three"
                    description=""
                  />
                </div>
              </div>
              <TeamThree
                column="col-lg-3 col-md-6 col-12 mt--30"
                teamStyle="team-style-two"
              />
            </div>
          </div>
          {/* End Elements Area  */}
        </div>
      </Layout>
    </>
  );
};
export default Team;
