import React, {useContext, useEffect} from "react"
import { GraphicsCardContext } from "./GraphicsCardProvider"
import { GraphicsCard } from "./GraphicsCard"
import "./GraphicsCard.css";

export const GraphicsCardList = () => {

    const {graphicsCards, getGraphicsCards} = useContext(GraphicsCardContext);
    
    useEffect(() => {
        getGraphicsCards()
    }, [])

    console.log(graphicsCards)

    return (
        <>
        {
            graphicsCards.map(gpu => {
                return (
                     <GraphicsCard key={gpu.id} gpu={gpu} />
                )
            })
        }   
        </>
    )
}