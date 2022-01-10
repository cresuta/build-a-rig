import React from "react"
import "./PreviousRigBuild.css"

export const PreviousRigBuildCard = ({rigBuild, gpuArray}) => {
    // Each rigBuild passed in should have access to all info (mobo selected, gpu's selected, calculation totals, etc)
    // Each previous rig build card should be a react bootstrap accordion
    // When accordion is closed, rig build date should only be shown (maybe at ethereum logo, as future iterations of the app would have different coins)
    // When accordion is opened, rig build should have a similar look/feel 
    console.log(rigBuild)
    return (
        <>
        <p>Rig Build - {rigBuild.date}</p>
        <div>GPU Array - {gpuArray.map(gpu => {
            return <p>{gpu.name}</p>
        })}</div>
        </>
    )
}
