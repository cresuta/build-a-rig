import React, { createContext, useState } from "react";

export const PreviousRigBuildGraphicsCardContext = createContext();

export const PreviousRigBuildGraphicsCardProvider = (props) => {
  const [rigBuildsGraphicsCards, setRigBuildsGraphicsCards] = useState([]);

  const getRigBuildsGraphicsCards = () => {
    return fetch("http://localhost:8088/rigBuildsGraphicsCards")
      .then((res) => res.json())
      .then(setRigBuildsGraphicsCards);
  };

  const getRigBuildsGraphicsCardsById = (id) => {
    return fetch(`http://localhost:8088/rigBuildsGraphicsCards/${id}`)
      .then((res) => res.json())
      .then(setRigBuildsGraphicsCards);
  };

  const deleteRigBuildsGraphicsCards = (id) => {
    return fetch(`http://localhost:8088/rigBuildsGraphicsCards/${id}`, {
      method: "DELETE",
    }).then(getRigBuildsGraphicsCards);
  };

  return (
    <PreviousRigBuildGraphicsCardContext.Provider
      value={{
        rigBuildsGraphicsCards,
        getRigBuildsGraphicsCards,
        getRigBuildsGraphicsCardsById,
        deleteRigBuildsGraphicsCards,
      }}
    >
      {props.children}
    </PreviousRigBuildGraphicsCardContext.Provider>
  );
};
