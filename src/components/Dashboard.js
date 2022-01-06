import React, { useState, useContext, useEffect } from "react";
import "./Dashboard.css";
// import { Link } from "react-router-dom";
import 'bootstrap-icons/font/bootstrap-icons.css';
import { GraphicsCardList } from "./graphics_card/GraphicsCardList";
import { MotherboardDropdown } from "./motherboard/MotherboardDropdown";
import { Dropzone } from "./rig_build/Dropzone";
import { GraphicsCardContext } from "./graphics_card/GraphicsCardProvider";
// import { BuildAreaTotalContext } from "./rig_build/BuildAreaTotalProvider";

export const Dashboard = () => {

  // const {calculations, getCalculations} = useContext(BuildAreaTotalContext); 
  
  const {graphicsCards} = useContext(GraphicsCardContext);
  const [dropzoneSize,setDropzoneSize] = useState([]);
  const [gpuArray, setGpuArray] = useState([]);

  const [cost, setCost] = useState(0);
  const [hashrate, setHashrate] = useState(0);
  const [powerConsumption, setPowerConsumption] = useState(0);
  const [electricity, setElectricity] = useState([]);

  useEffect(() => {
    
    let costSum = 0;
    let hashrateSum = 0;
    let powerConsumptionSum = 0;
    
    gpuArray.forEach((gpu) => {
      if(gpu === 0) {
        costSum += gpu
        hashrateSum += gpu
        powerConsumptionSum += gpu
      } else {
        costSum += gpu.cost
        hashrateSum += gpu.hashrate
        powerConsumptionSum += gpu.power_consumption
      }
    })
    setCost(costSum)
    setHashrate(Math.round(hashrateSum * 100) / 100)
    setPowerConsumption(powerConsumptionSum)
    
  }, [gpuArray])

  useEffect(() => {
    const arraySize = []
    for(let i = 0; i < dropzoneSize; i++) {
      arraySize.push(0)
    }
    setGpuArray(arraySize)
    setCost(0)
    setHashrate(0)
    setPowerConsumption(0)
  }, [dropzoneSize])

  const addToArray = (e) => {
    const newArray = [...gpuArray]
    const whichDrop = +e.target.id.split('-')[2]
    newArray.splice(whichDrop,1,graphicsCards.find((gc) => gc.id === +e.target.value))
    setGpuArray(newArray)
  }

  const calculateElectricityCost = (totalWatts) => {
    const ELECTRIC_COST = 0.13;
    const electricCostArray = []
    const watts = totalWatts;
    const kwhPerMonth = ((watts*24)/1000)*30;
    const costPerDay = ((kwhPerMonth*ELECTRIC_COST)/30).toFixed(2)
    const costPerWeek = ((kwhPerMonth*ELECTRIC_COST)/4).toFixed(2)
    const costPerMonth = ((kwhPerMonth*ELECTRIC_COST)).toFixed(2)
    const costPerYear = ((kwhPerMonth*ELECTRIC_COST)*12).toFixed(2)
    electricCostArray.push(costPerDay,costPerWeek,costPerMonth,costPerYear)
    setElectricity(electricCostArray)
  }


    return (
    <>
      <main className="px-2 py-2 dashboard__container">
        
        {/* Graphics Card List */}
        <div className="graphics-cards__container">
          <h2 className="gpu-library__heading">Graphics Card Library</h2>
              <div className="graphics-cards__list">
                <GraphicsCardList/>
              </div>
        </div>
        
        <div className="build__container">
          
          <div className="build-area__container">
            <div className="build-area">
              <div className="motherboard__list">
                <MotherboardDropdown setDropzoneSize={setDropzoneSize}/>
              </div>
              <div className="build-area__dropzone">
                {/* <h1>Build Area</h1> */}
                <div className="dropzone">
                  <Dropzone dropzoneSize={dropzoneSize} addToArray={addToArray}/>
                  {/* area that will display boxes for number of gpu supported by mobo */}
                </div>
              </div>
            </div>
            
            {/* Build Area - Stat Totals */}
            <div className="build-area-totals">
              <div className="crypto-logo">
                <img className="ethereum-logo" src={require('../imgs/ethereum-logo-2.png')} alt="Build-A-Rig Logo" />
              </div>
              <div className="build-area-totals__list">
                <h4>Hardware Cost</h4>
                {/* Hardware Cost Total */}
                <div className="hardware-cost">${cost}</div>
                <h4>Hash rate</h4>
                {/* Hashrate Total */}
                <div className="hashrate">{hashrate} MH/s</div>
                <h4>Power Consumption</h4>
                {/* Power Consumption Total */}
                <div className="power-consumption">{powerConsumption} W</div>
              </div>
              <div className="save-build">
                {/* <Link to='/#' > */}
                  <button onClick={() => {
                    // function call here (fetch call would be here, then set to state)
                    calculateElectricityCost(powerConsumption)
                  }} className="ghost" id="save-build"><span>Build!<i class="bi bi-hammer build-icon"></i></span></button> 
                {/* </Link> */}
              </div>
            </div>
          </div> 

          {/* Calculations - Revenue, Electricity, Profit */}
          <div className="calculation-metrics__container">
            <div className="revenue">
              <h2>Revenue</h2>
              {/* <p>Totals for Day, Week, Month, Year:</p> */}
              <div className="revenue-metrics">
                <p> /day</p>
                <p> /week</p>
                <p> /month</p>
                <p> /year</p>
              </div>
            </div>
            <div className="electricity">
              <h2>Electricity</h2>
              {/* <p>Totals for Day, Month, Year:</p> */}
              <div className="electricity-metrics">
                <p><span>${electricity[0]}</span> /day</p>
                <p><span>${electricity[1]}</span> /week</p>
                <p><span>${electricity[2]}</span> /month</p>
                <p><span>${electricity[3]}</span> /year</p>
              </div>
            </div>
            <div className="profit">
              <h2>Profit</h2>
              {/* <p>Totals for Day, Month, Year:</p> */}
              <div className="profit-metrics">
                <p> /day</p>
                <p> /week</p>
                <p> /month</p>
                <p> /year</p>
              </div>
            </div>
          </div>
        </div>
        
      </main>
    </>
    )
}
