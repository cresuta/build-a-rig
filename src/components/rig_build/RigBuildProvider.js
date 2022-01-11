import React, { useState, createContext } from "react";

export const RigBuildContext = createContext();

export const RigBuildProvider = (props) => {
    
    const [rigBuilds,setRigBuilds] = useState([]);

    const getRigBuilds = () => {
        return fetch(`http://localhost:8088/rigBuilds?_expand=motherboard&userId=${localStorage.build_a_rig_user}`)
        .then(res => res.json())
        .then(setRigBuilds)
    }

    const getRigBuildById = (id) => {
        return fetch(`http://localhost:8088/rigBuilds/${id}?_expand=users&_expand=motherboards`)
        .then(res => res.json())
    }

    const saveRigBuild = rigBuild => {
        return fetch("http://localhost:8088/rigBuilds", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(rigBuild)
        })
        .then(res => res.json())
    }

    const deleteRigBuildById = (id) => {
        return fetch(`http://localhost:8088/rigBuilds/${id}`, {
            method: "DELETE"
        })
        .then(getRigBuilds)
    }

    const updateRigBuild = rigBuild => {
        return fetch(`http://localhost:8088/rigBuilds/${rigBuild.id}`, {
          method: "PUT",
          headers: {
            "Content-Type": "application/json"
          },
          body: JSON.stringify(rigBuild)
        })
          .then(getRigBuilds)
      }

      return (
          <RigBuildContext.Provider value={{
              rigBuilds, getRigBuilds, getRigBuildById, saveRigBuild, deleteRigBuildById, updateRigBuild
          }}>
              {props.children}
          </RigBuildContext.Provider>
      )
}