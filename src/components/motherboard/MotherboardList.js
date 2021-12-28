import React, {useContext, useEffect} from "react"
import { MotherboardContext } from "./MotherboardProvider"
import { MotherboardCard } from "./MotherboardCard";

export const MotherboardList = () => {
    
    const {motherboards, getMotherboards} = useContext(MotherboardContext);

    useEffect(() => {
        getMotherboards()
    }, [])

    return (
        <>
        {
            motherboards.map(mobo => {
                return <MotherboardCard key={mobo.id} mobo={mobo} />
            })
        }
        </>
    )
}