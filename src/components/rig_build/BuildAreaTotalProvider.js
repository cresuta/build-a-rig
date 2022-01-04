import React, { createContext, useState } from "react";

export const BuildAreaTotalContext = createContext();

export const BuildAreaTotalProvider =(props) => {

    const [calculations, setCalculations] = useState([])
    
    const getCalculations = () => {
        return fetch(`https://www.coincalculators.io/api?name=ethereum&hashrate=40000000&power=230&powercost=0.1&difficultytime=6`)
        .then(res => res.json())
        .then(setCalculations)
    } 
    
    return (
        <BuildAreaTotalContext.Provider value={{
            calculations, getCalculations
        }}>
            {props.children}
        </BuildAreaTotalContext.Provider>
    )
}

