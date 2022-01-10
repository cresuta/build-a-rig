import React, { useContext, useEffect } from "react";
import { GraphicsCardContext } from "../graphics_card/GraphicsCardProvider";
import { MotherboardContext } from "../motherboard/MotherboardProvider";
import { BuildAreaTotalContext } from "../rig_build/BuildAreaTotalProvider";
import { useNavigate } from "react-router-dom";
import Accordion from "react-bootstrap/Accordion";
import { PreviousRigBuildCard } from "./PreviousRigBuildCard";

export const PreviousRigBuildsList = () => {

    // Need to get all rig builds that were saved
    // Loop through all rig builds and return each PreviousRigBuildCard
    // Display these previous rig builds in a React Bootstrap accordion, which will be built in PreviousRigBuildCard
    // Sort each previous rig build by date

  return (
    <>
      <div className="previous-rig-builds__heading">
        <h2>Previous Rig Builds</h2>
      </div>
      <div className="rig-builds">
        {rigBuilds.map((rigBuild) => {
            // all the mapping/finding will be done in here
          return <PreviousRigBuildCard rigBuild={rigBuild} gpuArray={gpuArray}/>;
        })}
      </div>
    </>
  );
};
