import { Route, Routes } from "react-router-dom";
import React, { Component } from "react";
import {BuildArea} from "./BuildArea"


export default class ApplicationViews extends Component {

  render() {
    return (
      <React.Fragment>
              <Routes>
                <Route path="/" element={<BuildArea />} />            
              </Routes>
      </React.Fragment>
    );
  }
}