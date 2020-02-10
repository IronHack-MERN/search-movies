import React, { Component } from "react";
import '../css/Nav.css';

class Nav extends Component {
  render() {
    return (
      <div>
        <nav class="menu">
          <ul>
          <li>
              <a href="#">Contact</a>
            </li>
           
            <li>
              <a href="#">About</a>
            </li>
            <li>
              <a class="active" href="#">Home</a>
            </li>
           
          </ul>
        </nav>


      </div>
    );
  }
}

export default Nav;
