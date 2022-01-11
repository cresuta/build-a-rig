import React, { useContext } from "react";
import { GraphicsCardContext } from "./GraphicsCardProvider";
import { GraphicsCardOption } from "./GraphicsCard";

export const GraphicsCardDropdown = ({ addToArray, index }) => {
  const { graphicsCards } = useContext(GraphicsCardContext);

  return (
    <>
      <select
        onChange={addToArray}
        class="form-select gpu-dropdown bg-dark text-white border border-dark"
        aria-label="Default select example"
        id={`gpu-drop-${index}`}
      >
        <option value="0">Pick A GPU</option>
        {graphicsCards.map((gpu) => {
          return (
            <GraphicsCardOption
              value={gpu.id}
              key={gpu.id}
              id={gpu.id}
              gpu={gpu}
            />
          );
        })}
      </select>
    </>
  );
};
