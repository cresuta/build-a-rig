import React, { createContext, useState } from "react"

export const MotherboardContext = createContext();

export const MotherboardProvider = (props) => {

    const [motherboards, setMotherboards] = useState([])

    const getMotherboards = () => {
        return fetch("http://localhost:8088/motherboards")
        .then(res => res.json())
        .then(setMotherboards)
    }

    const getMotherboardById = (id) => {
        return fetch(`http://localhost:8088/motherboards/${id}`)
        .then(res => res.json())
    }

    return (
        <MotherboardContext.Provider value={{
            motherboards, getMotherboards, getMotherboardById
        }}>
            {props.children}
        </MotherboardContext.Provider>
    )
}