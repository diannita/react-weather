import React, { Component } from "react";
import { Route } from "react-router-dom";
import Weather from "./Weather";

export default class App extends Component {
  render() {
    return (
      <div>
        <Route
          exact={true}
          path="/"
          render={() => (
            <div className="App">
              <Weather city="Auckland" />
            </div>
          )}
        />
        <Route
          exact={true}
          path="/colombia"
          render={() => (
            <div className="App">
              <Weather city="Colombia" />
            </div>
          )}
        />
        <Route
          exact={true}
          path="/sydney"
          render={() => (
            <div className="App">
              <Weather city="Sydney" />
            </div>
          )}
        />
        <Route
          exact={true}
          path="/miami"
          render={() => (
            <div className="App">
              <Weather city="Miami" />
            </div>
          )}
        />
      </div>
    );
  }
}
