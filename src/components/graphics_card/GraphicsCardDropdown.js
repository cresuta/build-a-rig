import React, { useContext, useEffect } from "react";
import { GraphicsCardContext } from "./GraphicsCardProvider";
import { GraphicsCardOption } from "./GraphicsCard";

export const GraphicsCardDropdown = () => {

  const {graphicsCards, getGraphicsCards} = useContext(GraphicsCardContext);
    
  useEffect(() => {
      getGraphicsCards()
  }, [])

  return (
    <>
      <select
        class="form-select gpu-dropdown bg-dark text-white border border-dark"
        aria-label="Default select example"
      >
        <option value="0">Pick A GPU</option>
            {graphicsCards.map((gpu) => {
                return <GraphicsCardOption key={gpu.id} gpu={gpu} />;
            })}
      </select>
    </>
  );
};