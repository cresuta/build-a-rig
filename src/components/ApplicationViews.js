import { Route, Routes } from "react-router-dom";
import React, { Component } from "react";
import {Dashboard} from "./Dashboard"
import { GraphicsCardProvider } from "./graphics_card/GraphicsCardProvider";
import { MotherboardProvider } from "./motherboard/MotherboardProvider";

export default class ApplicationViews extends Component {

  render() {
    return (
      <React.Fragment>
        <GraphicsCardProvider>
          <MotherboardProvider>
              <Routes>
                <Route path="/" element={<Dashboard />} />            
              </Routes>
          </MotherboardProvider>
        </GraphicsCardProvider>
      </React.Fragment>
    );
  }
}