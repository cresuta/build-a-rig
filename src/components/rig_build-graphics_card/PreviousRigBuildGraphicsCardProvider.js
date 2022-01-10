import React, { createContext, useState } from "react"

export const PreviousRigBuildGraphicsCardContext = createContext();

export const PreviousRigBuildGraphicsCardProvider = (props) => {

    const [rigBuilds,setRigBuilds] = useState([]);
    const [graphicsCards, setGraphicsCards] = useState([]);
    const [joinTable, setJoinTable] = useState([]);

    const getRigBuilds = () => {
        return fetch("http://localhost:8088/rigBuilds?_expand=motherboards")
        .then(res => res.json())
        .then(setRigBuilds)
    }

    const getGraphicsCards = () => {
        return fetch("http://localhost:8088/graphicsCards")
        .then(res => res.json())
        .then(setGraphicsCards)
    }

    const getJoinTable = () => {
        return fetch("http://localhost:8088/rigBuilds_graphicsCards?_expand=rigBuilds?_expand=graphicsCards")
        .then(res => res.json())
        .then(setJoinTable)
    }

    const getJoinTableById = (id) => {
        return fetch(`http://localhost:8088/rigBuilds_graphicsCards/${id}`)
        .then(res => res.json())
        .then(setJoinTable)
    }

    return (
        <PreviousRigBuildGraphicsCardContext.Provider value={{
            rigBuilds,getRigBuilds,graphicsCards,getGraphicsCards,joinTable,getJoinTable,getJoinTableById
        }}>
            {props.children}
        </PreviousRigBuildGraphicsCardContext.Provider>
    )
}