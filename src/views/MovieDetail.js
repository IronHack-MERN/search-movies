import React, { Component } from "react";
import ButtonBackToHome from "../components/ButtonBackToHome";

const API_KEY = "454df520";

class MovieDetail extends Component {
  state = {
    movie: {}
  };

  _fetchMovie({ id }) {
    fetch(`http://www.omdbapi.com/?apikey=${API_KEY}&i=${id}`)
      .then(res => res.json())
      .then(movie => {
        this.setState({ movie });
      });
  }

  _goBack() {
    window.history.back();
  }

  componentDidMount() {
    const { id } = this.props.match.params;
    this._fetchMovie({ id });
  }

  render() {
    const {
      Title,
      Poster,
      Actors,
      Metascore,
      Plot,
      Language,
      Country,
      Type,
      Genre,
      Director,
      Year
    } = this.state.movie;
    return (
      <div className="card-detail">
        <p className="title">{Title}</p>
        <div className="card-image">
          <figure>
            <img src={Poster} alt="poster-movie" />
          </figure>
        </div>
        <div className="card-content">
          <div className="media-content">
            <p className="subtitle is-6">{Plot}</p>
          </div>
        </div>
        <div className="content">
          <p className="subtitle is-6">
            {Actors} <br/>
            {Language} | {Country} <br/>
            {Genre} | {Type}
          </p>
          <p className="subtitle is-6">
            Director: {Director} -<time dateTime="2016-1-1"> Year: {Year}</time>
          </p>
        </div>
        <div>
          <ButtonBackToHome />
        </div>
      </div>
    );
  }
}

export default MovieDetail;
