/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable jsx-a11y/img-redundant-alt */
/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable react/jsx-no-comment-textnodes */
import React, { Component } from "react";
export class NewsItem extends Component {
  render() {
    const { title, description, imageUrl, newsUrl } = this.props;
    return (
      <div className="my-4">
        <div
          className="card "
          style={{
            width: "21rem",
            boxShadow:
              "rgba(50, 50, 93, 0.25) 0px 13px 27px -5px, rgba(0, 0, 0, 0.3) 0px 8px 16px -8px",
          }}
        >
          <img
            className="card-img-top "
            style={{ width: "20.92rem", height: "15rem" }}
            src={!imageUrl ? "https://tinyurl.com/3pdx9awy" : imageUrl}
          />

          <div className="card-body">
            <h5
              className="card-title"
              style={{ width: "17.7rem", height: "3rem" }}
            >
              {title}...
            </h5>
            <p
              className="card-text"
              style={{ width: "17.7rem", height: "5rem" }}
            >
              {description} ...{" "}
            </p>
            <a
              href={newsUrl}
              rel="noreferrer"
              target="_blank"
              className="btn btn-primary"
            >
              Read More
            </a>
          </div>
        </div>
      </div>
    );
  }
}

export default NewsItem;
