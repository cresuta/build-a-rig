import React, { createContext, useState } from "react";

export const BuildAreaTotalContext = createContext();

export const BuildAreaTotalProvider = (props) => {
  const [ethData, setEthData] = useState([]);

  const getEthData = () => {
    return fetch(`https://api.minerstat.com/v2/coins?list=ETH`)
      .then((res) => res.json())
      .then(setEthData);
  };

  return (
    <BuildAreaTotalContext.Provider
      value={{
        ethData,
        getEthData,
      }}
    >
      {props.children}
    </BuildAreaTotalContext.Provider>
  );
};
