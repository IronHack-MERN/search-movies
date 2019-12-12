import React, { Component } from "react";
import PropTypes from "prop-types";

class Movie extends Component {
  static propTypes = {
    title: PropTypes.string,
    year: PropTypes.string,
    poster: PropTypes.string
  };

  render() {
    console.log('las props', this.props)
    const { poster, title, year } = this.props;
    return (
      <div classNameName="card">
        <div classNameName="card-image">
          <figure className="image is-4by3">
            <img
              src={poster}
              alt={title}
            />
          </figure>
        </div>
        <div className="card-content">
          <div className="media">
            <div className="media-content">
              <p className="title is-4">{title}</p>
              <p className="subtitle is-6">{year}</p>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Movie;
