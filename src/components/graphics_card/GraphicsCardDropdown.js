import React, { useContext, useEffect, useState } from "react";
import { GraphicsCardContext } from "./GraphicsCardProvider";
import { GraphicsCardOption } from "./GraphicsCard";
import { useParams } from 'react-router-dom';

export const GraphicsCardDropdown = () => {

  const {graphicsCards, getGraphicsCardById} = useContext(GraphicsCardContext);

  const [graphicsCard, setGraphicsCard] = useState({});
  const [isLoading, setIsLoading] = useState(true);

  const {graphicsCardId} = useParams();
    
  useEffect(() => {
      if(graphicsCardId) {
        getGraphicsCardById()
        .then(graphicsCard => {
            setGraphicsCard(graphicsCard)
            setIsLoading(false)
        })
      } else {
          setIsLoading(true)
      }
   
  }, [])

  const handleControlledDropdownChange = (e) => {
      const newGraphicsCard = {...graphicsCard}
      newGraphicsCard[e.target.id] = e.target.value
      setGraphicsCard(newGraphicsCard)
  }

  return (
    <>
      <select
        onChange={handleControlledDropdownChange}
        class="form-select gpu-dropdown bg-dark text-white border border-dark"
        aria-label="Default select example"
      >
        <option value="0">Pick A GPU</option>
            {graphicsCards.map((gpu) => {
                return <GraphicsCardOption key={gpu.id} id={gpu.id} gpu={gpu} />;
            })}
      </select>
    </>
  );
};