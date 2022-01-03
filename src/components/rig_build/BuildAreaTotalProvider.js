import React, { createContext, useState } from "react";

export const BuildAreaTotalContext = createContext();

export const BuildAreaTotalProvider =(props) => {

    const [calculations, setCalculations] = useState([])
    
    const getCalculations = (hashrate, powerConsumption) => {
        return fetch(`https://www.coincalculators.io/api?name=ethereum&hashrate=${hashrate}&power=${powerConsumption}&powercost=0.1`)
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

