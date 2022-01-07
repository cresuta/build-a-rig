import React, { useState, useContext, useEffect } from "react";
import "./Dashboard.css";
import 'bootstrap-icons/font/bootstrap-icons.css';
import { GraphicsCardList } from "./graphics_card/GraphicsCardList";
import { MotherboardDropdown } from "./motherboard/MotherboardDropdown";
import { Dropzone } from "./rig_build/Dropzone";
import { GraphicsCardContext } from "./graphics_card/GraphicsCardProvider";
import { BuildAreaTotalContext } from "./rig_build/BuildAreaTotalProvider";

export const Dashboard = () => {

  const {ethData, getEthData} = useContext(BuildAreaTotalContext); 
  
  const {graphicsCards} = useContext(GraphicsCardContext);
  const [dropzoneSize,setDropzoneSize] = useState([]);
  const [gpuArray, setGpuArray] = useState([]);

  const [cost, setCost] = useState(0);
  const [hashrate, setHashrate] = useState(0);
  const [powerConsumption, setPowerConsumption] = useState(0);

  const [electricity, setElectricity] = useState([]);
  const [revenue, setRevenue] = useState([]);
  const [profit, setProfit] = useState([]);

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

  useEffect(() => {
    getEthData()
  }, [])

  const addToArray = (e) => {
    const newArray = [...gpuArray]
    const whichDrop = +e.target.id.split('-')[2]
    newArray.splice(whichDrop,1,graphicsCards.find((gc) => gc.id === +e.target.value))
    setGpuArray(newArray)
  }

  const calculateElectricityCost = (totalWatts) => {
    const ELECTRIC_COST = 0.13;
    const electricCostArray = []

    const kwhPerMonth = ((totalWatts*24)/1000)*30;
    const costPerDay = ((kwhPerMonth*ELECTRIC_COST)/30).toFixed(2)
    const costPerWeek = ((kwhPerMonth*ELECTRIC_COST)/4).toFixed(2)
    const costPerMonth = ((kwhPerMonth*ELECTRIC_COST)).toFixed(2)
    const costPerYear = ((kwhPerMonth*ELECTRIC_COST)*12).toFixed(2)

    electricCostArray.push(costPerDay,costPerWeek,costPerMonth,costPerYear)
    setElectricity(electricCostArray)
  }

  const calculateRevenue = (totalHashrate) => {
    const SECONDS_PER_DAY = 86400;
    const ETH_BLOCK_TIME = 13;
    const revenueArray = [];

    const rigBuildHashrateShare = ((totalHashrate/((ethData[0].network_hashrate)/1000000)));
    const dailyBlockReward = ((ethData[0].reward_block) * (SECONDS_PER_DAY/ETH_BLOCK_TIME));
    const dailyEth = (rigBuildHashrateShare * dailyBlockReward);
   
    const dailyRevenueUSD = ((ethData[0].price) * dailyEth).toFixed(2);
    const weeklyRevenueUSD = (((ethData[0].price) * dailyEth) * 4).toFixed(2);
    const monthlyRevenueUSD = (((ethData[0].price) * dailyEth) * 30).toFixed(2);
    const yearlyRevenueUSD = (((ethData[0].price) * dailyEth) * 365).toFixed(2);

    revenueArray.push(dailyRevenueUSD,weeklyRevenueUSD,monthlyRevenueUSD,yearlyRevenueUSD);
    setRevenue(revenueArray);
  }

  // const calculateProfit = (revenueArray,electricityArray) => {
  //   console.log(`revenue array - ${revenueArray}`)
  //   console.log(`electricity array - ${electricityArray}`)
  //   const profitArray = [];
    
  //   const dailyProfit = revenueArray[0] - electricityArray[0];
  //   const weeklyProfit =  revenueArray[1] - electricityArray[1];
  //   const monthlyProfit =  revenueArray[2] - electricityArray[2];
  //   const yearlyProfit =  revenueArray[3] - electricityArray[3];

  //   profitArray.push(dailyProfit,weeklyProfit,monthlyProfit,yearlyProfit);
  //   setProfit(profitArray)
  // }

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
                <div className="hardware-cost">${cost}</div>
                <h4>Hash rate</h4>
                {/* Hashrate Total */}
                <div className="hashrate">{hashrate} MH/s</div>
                <h4>Power Consumption</h4>
                {/* Power Consumption Total */}
                <div className="power-consumption">{powerConsumption} Watts</div>
              </div>
              <div className="save-build">
                {/* <Link to='/#' > */}
                  <button onClick={() => {
                    // function call here (fetch call would be here, then set to state)
                    calculateRevenue(hashrate);
                    calculateElectricityCost(powerConsumption);
                    // calculateProfit(revenue,electricity);
                  }} className="ghost" id="save-build"><span>Build!<i class="bi bi-hammer build-icon"></i></span></button> 
                {/* </Link> */}
              </div>
            </div>
          </div> 

          {/* Calculations - Revenue, Electricity, Profit */}
          <div className="calculation-metrics__container">
            <div className="revenue">
              <h2>Revenue</h2>
              <div className="revenue-metrics">
                <p><span>${revenue[0]}</span> /day</p>
                <p><span>${revenue[1]}</span> /week</p>
                <p><span>${revenue[2]}</span> /month</p>
                <p><span>${revenue[3]}</span> /year</p>
              </div>
            </div>
            <div className="electricity">
              <h2>Electricity Costs</h2>
              <div className="electricity-metrics">
                <p><span>${electricity[0]}</span> /day</p>
                <p><span>${electricity[1]}</span> /week</p>
                <p><span>${electricity[2]}</span> /month</p>
                <p><span>${electricity[3]}</span> /year</p>
              </div>
            </div>
            <div className="profit">
              <h2>Profit<span>(revenue - electric cost)</span></h2>
              <div className="profit-metrics">
                <p><span>${(revenue[0]-electricity[0]).toFixed(2)}</span> /day</p>
                <p><span>${(revenue[1]-electricity[1]).toFixed(2)}</span> /week</p>
                <p><span>${(revenue[2]-electricity[2]).toFixed(2)}</span> /month</p>
                <p><span>${(revenue[3]-electricity[3]).toFixed(2)}</span> /year</p>
              </div>
            </div>
          </div>
        </div>
        
      </main>
    </>
    )
}
