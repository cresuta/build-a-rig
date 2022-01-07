import { Route, Routes } from "react-router-dom";
import React, { Component } from "react";
import {Dashboard} from "./Dashboard"
import { GraphicsCardProvider } from "./graphics_card/GraphicsCardProvider";
import { MotherboardProvider } from "./motherboard/MotherboardProvider";
import { BuildAreaTotalProvider } from "./rig_build/BuildAreaTotalProvider";
import { RigBuildProvider } from "./rig_build/RigBuildProvider";

export default class ApplicationViews extends Component {

  render() {
    return (
      <React.Fragment>
        <GraphicsCardProvider>
          <MotherboardProvider>
            <BuildAreaTotalProvider>
              <RigBuildProvider>
              <Routes>
                <Route path="/" element={<Dashboard />} />            
              </Routes>
              </RigBuildProvider>
            </BuildAreaTotalProvider>
          </MotherboardProvider>
        </GraphicsCardProvider>
      </React.Fragment>
    );
  }
}