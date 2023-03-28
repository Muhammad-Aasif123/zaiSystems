import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import PageScrollTop from "./components/pageToTop/PageScrollTop";
import Business from "./pages/Business";
import Marketing from "./pages/Marketing";
import PersonalPortfolio from "./pages/PersonalPortfolio";
import InternationalConsulting from "./pages/InternationalConsulting";
import AboutUs from "./pages/AboutUs";
import Service from "./elements/service/Service";
import Portfolio from "./elements/portfolio/Portfolio";
import PortfolioDetails from "./pages/PortfolioDetails";
import Team from "./elements/team/Team";
import Contact from "./elements/contact/Contact";
import BlogListView from "./components/blog/BlogListView";
import BlogDetails from "./pages/BlogDetails";
import Error from "./pages/Error";
import "./assets/scss/style.scss";

const App = () => {
  return (
    <Router>
      <PageScrollTop>
        <Switch>
          <Route
            path={`${process.env.PUBLIC_URL + "/business"}`}
            exact
            component={Business}
          />
          <Route
            path={`${process.env.PUBLIC_URL + "/"}`}
            exact
            component={Marketing}
          />
          <Route
            path={`${process.env.PUBLIC_URL + "/personal-portfolio"}`}
            exact
            component={PersonalPortfolio}
          />
          <Route
            path={`${process.env.PUBLIC_URL + "/international-consulting"}`}
            exact
            component={InternationalConsulting}
          />

          <Route
            path={`${process.env.PUBLIC_URL + "/blog-list-view"}`}
            exact
            component={BlogListView}
          />
          <Route
            path={`${process.env.PUBLIC_URL + "/blog-details/:id"}`}
            exact
            component={BlogDetails}
          />

          <Route
            path={`${process.env.PUBLIC_URL + "/service"}`}
            exact
            component={Service}
          />
          <Route
            path={`${process.env.PUBLIC_URL + "/team"}`}
            exact
            component={Team}
          />
          <Route
            path={`${process.env.PUBLIC_URL + "/contact"}`}
            exact
            component={Contact}
          />
          <Route
            path={`${process.env.PUBLIC_URL + "/about-us"}`}
            exact
            component={AboutUs}
          />

          <Route
            path={`${process.env.PUBLIC_URL + "/appreciation"}`}
            exact
            component={Error}
          />

          <Route
            path={`${process.env.PUBLIC_URL + "/portfolio"}`}
            exact
            component={Portfolio}
          />
          <Route
            path={`${process.env.PUBLIC_URL + "/portfolio-details/:id"}`}
            exact
            component={PortfolioDetails}
          />
        </Switch>
      </PageScrollTop>
    </Router>
  );
};

export default App;
