import React from "react";
import "./Dropzone.css";

export const Dropzone = ({dropzoneSize}) => {
    
    const motherboards = []
    
    for (let i = 0; i < dropzoneSize; i++) {
        motherboards.push("")  
    }
    
    return ( 

        motherboards.map((mobo,i) => {
            return (
                <div className="dropzone gpu-slot">GPU {i}</div> 
            )  
        }) 
    )
}