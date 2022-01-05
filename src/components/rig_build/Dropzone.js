import React from "react";
import "./Dropzone.css";
import { GraphicsCardDropdown } from "../graphics_card/GraphicsCardDropdown";

export const Dropzone = ({dropzoneSize, addToArray}) => {

    const motherboards = []
    // console.log(`Dropzone size: ${dropzoneSize}`)
    
    for (let i = 0; i < dropzoneSize; i++) {
        motherboards.push("")  
    }

    // console.log(`Motherboard array length: ${motherboards.length}`)
     return (
        motherboards.map((dropzoneSpot,i) => {
            console.log(`${typeof dropzoneSpot}`)
            return (
                <div className="dropzone gpu-slot">
                    GPU {i}
                    <GraphicsCardDropdown index={i} addToArray={addToArray}/>
                </div> 
            ) 
        }) 
    )
}