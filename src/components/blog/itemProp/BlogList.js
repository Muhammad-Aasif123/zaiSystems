import React from "react";
import { slugify } from "../../../utils";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

const BlogList = ({ data, StyleVar }) => {
  return (
    <div className={`rn-card ${StyleVar}`}>
      <div className="inner">
        <div className="thumbnail">
          <img src={`${process.env.PUBLIC_URL}/${data.img}`} alt="Blog Image" />
        </div>
        <div className="content">
          <h5 className="title">{data.link}</h5>
          <h6>{data.ref}</h6>
        </div>
      </div>
    </div>
  );
};
BlogList.propTypes = {
  data: PropTypes.object,
};
export default BlogList;
