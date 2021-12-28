import { Route, Routes } from "react-router-dom";
import React, { Component } from "react";
import {BuildArea} from "./BuildArea"
import { GraphicsCardProvider } from "./graphics_card/GraphicsCardProvider";

export default class ApplicationViews extends Component {

  render() {
    return (
      <React.Fragment>
        <GraphicsCardProvider>
              <Routes>
                <Route path="/" element={<BuildArea />} />            
              </Routes>
        </GraphicsCardProvider>
      </React.Fragment>
    );
  }
}