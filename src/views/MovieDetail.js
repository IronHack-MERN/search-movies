import React, { Component } from "react";
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

  _goBack(){
    window.history.back();
  }

  componentDidMount() {
    const { id } = this.props.match.params;
    this._fetchMovie({ id });
  }

  render() {
    const { Title, Poster, Actors, Metascore, Plot } = this.state.movie;
    return (
      <div>
        <button onClick={this._goBack}>Return</button>
        <h1>{Title}</h1>
        <img src={Poster} alt='poster-movie'/>
        <h3>{Actors}</h3>
        <span>{Metascore}</span>
        <p>{Plot}</p>
      </div>
    );
  }
}

export default MovieDetail;
