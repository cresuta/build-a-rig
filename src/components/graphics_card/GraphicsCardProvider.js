import React, { createContext, useState } from "react";

export const GraphicsCardContext = createContext();

export const GraphicsCardProvider = (props) => {
  const [graphicsCards, setGraphicsCards] = useState([]);

  const getGraphicsCards = () => {
    return fetch("http://localhost:8088/graphicsCards")
      .then((res) => res.json())
      .then(setGraphicsCards);
  };

  const getGraphicsCardById = (id) => {
    return fetch(`http://localhost:8088/graphicsCards/${id}`).then((res) =>
      res.json()
    );
  };

  return (
    <GraphicsCardContext.Provider
      value={{
        graphicsCards,
        getGraphicsCards,
        getGraphicsCardById,
      }}
    >
      {props.children}
    </GraphicsCardContext.Provider>
  );
};
