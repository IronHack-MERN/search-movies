import React, { Component } from "react";
import {Link} from "react-router-dom";

class ButtonBackToHome extends Component {
  render() {
    return (
      <div>
        <Link className="button is-info" to="/">
          Home
        </Link>
      </div>
    );
  }
}

export default ButtonBackToHome;
