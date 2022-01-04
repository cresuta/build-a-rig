import { Route, Routes } from "react-router-dom";
import React, { Component } from "react";
import {Dashboard} from "./Dashboard"
import { GraphicsCardProvider } from "./graphics_card/GraphicsCardProvider";
import { MotherboardProvider } from "./motherboard/MotherboardProvider";
import { BuildAreaTotalProvider } from "./rig_build/BuildAreaTotalProvider";

export default class ApplicationViews extends Component {

  render() {
    return (
      <React.Fragment>
        <GraphicsCardProvider>
          <MotherboardProvider>
            <BuildAreaTotalProvider>
              <Routes>
                <Route path="/" element={<Dashboard />} />            
              </Routes>
            </BuildAreaTotalProvider>
          </MotherboardProvider>
        </GraphicsCardProvider>
      </React.Fragment>
    );
  }
}