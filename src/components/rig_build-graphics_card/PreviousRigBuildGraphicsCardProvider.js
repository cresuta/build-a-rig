import React, { createContext, useState } from "react"

export const PreviousRigBuildGraphicsCardContext = createContext();

export const PreviousRigBuildGraphicsCardProvider = (props) => {

    const [rigBuildsGraphicsCards, setRigBuildsGraphicsCards] = useState([]);

    const getRigBuildsGraphicsCards = () => {
        return fetch("http://localhost:8088/rigBuilds_graphicsCards")
        .then(res => res.json())
        .then(setRigBuildsGraphicsCards)
    }

    const getRigBuildsGraphicsCardsById = (id) => {
        return fetch(`http://localhost:8088/rigBuilds_graphicsCards/${id}`)
        .then(res => res.json())
        .then(setRigBuildsGraphicsCards)
    }

    return (
        <PreviousRigBuildGraphicsCardContext.Provider value={{
            rigBuildsGraphicsCards,getRigBuildsGraphicsCards,getRigBuildsGraphicsCardsById
        }}>
            {props.children}
        </PreviousRigBuildGraphicsCardContext.Provider>
    )
}