import { Route, Routes } from "react-router-dom";
import React, { Component } from "react";
import { Dashboard } from "./Dashboard";
import { GraphicsCardProvider } from "./graphics_card/GraphicsCardProvider";
import { MotherboardProvider } from "./motherboard/MotherboardProvider";
import { BuildAreaTotalProvider } from "./rig_build/BuildAreaTotalProvider";
import { RigBuildProvider } from "./rig_build/RigBuildProvider";
import { PreviousRigBuildsList } from "./rig_build-graphics_card/PreviousRigBuildsList";
import { PreviousRigBuildGraphicsCardProvider } from "./rig_build-graphics_card/PreviousRigBuildGraphicsCardProvider";

export default class ApplicationViews extends Component {
  render() {
    return (
      <React.Fragment>
        <GraphicsCardProvider>
          <MotherboardProvider>
            <BuildAreaTotalProvider>
              <RigBuildProvider>
                <PreviousRigBuildGraphicsCardProvider>
                  <Routes>
                    <Route path="/" element={<Dashboard />} />
                    <Route
                      path="/previous-rig-builds/*"
                      element={<PreviousRigBuildsList />}
                    />
                  </Routes>
                </PreviousRigBuildGraphicsCardProvider>
              </RigBuildProvider>
            </BuildAreaTotalProvider>
          </MotherboardProvider>
        </GraphicsCardProvider>
      </React.Fragment>
    );
  }
}
