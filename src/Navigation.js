import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./Navigation.css";

export default class Navigation extends Component {
  render() {
    return (
      <header>
        <ul className="navigation-items">
          <li className="navigation-item">
            <Link to="/">Auckland</Link>
          </li>
          <li className="navigation-item">
            <Link to="/colombia">Colombia</Link>
          </li>
          <li className="navigation-item">
            <Link to="/sydney">Sydney</Link>
          </li>
          <li className="navigation-item">
            <Link to="/miami">Miami</Link>
          </li>
        </ul>
      </header>
    );
  }
}
