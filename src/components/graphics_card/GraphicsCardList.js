import React, {useContext, useEffect} from "react"
import { GraphicsCardContext } from "./GraphicsCardProvider"
import { GraphicsCard } from "./GraphicsCard"
import "./GraphicsCard.css"
// import { useNavigate } from "react-router-dom"


export const GraphicsCardList = () => {

    const {graphicsCards, getGraphicsCards} = useContext(GraphicsCardContext);
    // const navigate = useNavigate();

    useEffect(() => {
        getGraphicsCards()
    }, [])

    return (
        <>

            {
            graphicsCards.map(gpu => {
                return <GraphicsCard key={gpu.id} gpu={gpu} />
            })
            }
            
           
        </>
    )
}