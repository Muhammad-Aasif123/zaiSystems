import React from "react";
import HeaderOne from "./header/HeaderOne";
import FooterTwo from "./footer/FooterTwo";
import Copyright from "./footer/Copyright";
import HeaderTop from "./header/HeaderTop";
import CalltoActionFive from "../elements/calltoaction/CalltoActionFive";

const Layout = ({ children }) => {
  return (
    <>
      <main className="page-wrapper">
        <HeaderTop />
        <HeaderOne
          btnStyle="btn-small round btn-icon"
          HeaderSTyle="header-not-transparent"
        />
        {children}
        {/* Start Elements Area  */}
        <div className="rwt-callto-action-area rn-section-gapBottom">
          <div className="wrapper">
            <CalltoActionFive />
          </div>
        </div>
        {/* End Elements Area  */}
        <FooterTwo />
        <Copyright />
      </main>
    </>
  );
};
export default Layout;
