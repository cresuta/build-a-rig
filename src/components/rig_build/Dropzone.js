import React from "react";
import "./Dropzone.css";


export const Dropzone = ({dropzoneSize}) => {
    
    const motherboards = []
    for (let i = 0; i < dropzoneSize; i++) {
        motherboards.push("")  
    }
    
    // motherboards.map(mobo => {
    //     if (mobo.num_of_cards_supported === 19) {
    //         // display 19 boxes in "build area"
    //     } else if (mobo.num_of_cards_supported === 13) {
    //         // display 13 boxes in "build area"
    //     } else if (mobo.num_of_cards_supported === 12) {
    //          // display 12 boxes in "build area"
    //     } else {
    //         // display 6 boxes in "build area"
    //     }
    // })
    
    return ( 

        // <div>{motherboards.map(x => {
        //     console.log(motherboards.length)
        //     let sum = 1
        //     return sum
        // })}</div>

        motherboards.map(() => {
            return <div className="gpu-slot">GPU Slot</div>
        })
        
    )
}