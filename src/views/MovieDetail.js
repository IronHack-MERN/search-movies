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
    const { Title, Poster, Actors, Metascore, Plot } = this.state.movie;
    return (
        
      <div className="columns is-mobile">
        <div className="card">
          <div className="card-image">
            <figure>
              <img src={Poster} alt="poster-movie" />
            </figure>
          </div>
          <div className="card-content">
            <div className="media-content">
              <p className="title is-4">{Title}</p>
              <p className="subtitle is-6">{Actors}</p>
            </div>
          </div>
          <div className="content">
            {Metascore}
            {Plot}
            <time dateTime="2016-1-1">11:09 PM - 1 Jan 2016</time>
          </div>
          <div>
            <ButtonBackToHome/>
          </div>
        </div>
      </div>
        
     
    );
  }
}

export default MovieDetail;
