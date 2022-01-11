import React, { useContext, useEffect } from "react";
import { GraphicsCardContext } from "../graphics_card/GraphicsCardProvider";
import { RigBuildContext } from "../rig_build/RigBuildProvider";
import { PreviousRigBuildCard } from "./PreviousRigBuildCard";
import { PreviousRigBuildGraphicsCardContext } from "./PreviousRigBuildGraphicsCardProvider";
import Accordion from "react-bootstrap/Accordion";
import "./PreviousRigBuild.css";

export const PreviousRigBuildsList = () => {
  const { rigBuilds, getRigBuilds } = useContext(RigBuildContext);
  const { graphicsCards, getGraphicsCards } = useContext(GraphicsCardContext);
  const { rigBuildsGraphicsCards, getRigBuildsGraphicsCards } = useContext(
    PreviousRigBuildGraphicsCardContext
  );

  useEffect(() => {
    getRigBuilds();
  }, []);

  useEffect(() => {
    getGraphicsCards();
  }, []);

  useEffect(() => {
    getRigBuildsGraphicsCards();
  }, []);

  // Sort each previous rig build by date

  return (
    <>
      <h2 className="previous-rig-builds__heading">Previous Rig Builds</h2>
      <Accordion
        defaultActiveKey="0"
        flush
        className="previous-rig-builds-accordion"
      >
        {rigBuilds.map((rigBuild) => {
          let relatedGraphicsCards = rigBuildsGraphicsCards.filter(
            (rbgc) => rbgc.rigBuildId === rigBuild.id
          );
          relatedGraphicsCards = relatedGraphicsCards.map((rgc) => {
            return graphicsCards.find((gpu) => gpu.id === rgc.graphicsCardId);
          });
          return (
            <PreviousRigBuildCard
              key={rigBuild.id}
              rigBuild={rigBuild}
              gpuArray={relatedGraphicsCards}
            />
          );
        })}
      </Accordion>
    </>
  );
};
