import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

const NewsCard = (props) => {
  return (
    <div className="card">
      <img src={props.urlToImage} className="card-img-top" alt={props.title} />
      <div className="card-body">
        <div className="card-title">
          <a href={props.url} target="_blank">
            {props.title}
          </a>
        </div>
        <div className="card-text">{props.description}</div>
      </div>

      <div className="card-footer text-muted">
        By {props.author}
        <br />
        {props.publishedAt}
      </div>
    </div>
  );
};

NewsCard.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  urlToImage: PropTypes.string,
};

export default NewsCard;
