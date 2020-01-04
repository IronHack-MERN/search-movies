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
        console.log({movie})
        this.setState({ movie })
      });
  }

  componentDidMount() {
    const {id} = this.props.match.params;
    this._fetchMovie({ id });
  }

  render() {
    const { Title, Poster, Actors, Metascore, Plot } = this.state.movie;
    return (
      <div>
        <h1>{Title}</h1>
        <img src={Poster}/>
        <h3>{Actors}</h3>
        <span>{Metascore}</span>
        <p>{Plot}</p>
      </div>
    );
  }
}

export default MovieDetail;
