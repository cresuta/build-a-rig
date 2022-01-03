import React, { useState, useContext } from "react";
import "./Dashboard.css";
// import { Link } from "react-router-dom";
import 'bootstrap-icons/font/bootstrap-icons.css';
import { GraphicsCardList } from "./graphics_card/GraphicsCardList";
import { MotherboardDropdown } from "./motherboard/MotherboardDropdown";
import { Dropzone } from "./rig_build/Dropzone";
import { GraphicsCardContext } from "./graphics_card/GraphicsCardProvider";

export const Dashboard = () => {

  const {graphicsCards} = useContext(GraphicsCardContext);
  const [dropzoneSize,setDropzoneSize] = useState(0);
  const [gpuArray, setGraphicsCards] = useState([]);

  // const [hardwareCost, setHardwareCost] = useState(0);
  // const [hashrate, setHashrate] = useState(0);
  // const [powerConsumption, setPowerConsumption] = useState(0);

  // still needs fixed, but kinda working
  const addToArray = (e) => {
    const newArray = [...gpuArray]
    setGraphicsCards(newArray.concat(graphicsCards.find((gc) => {
      return gc.id === +e.target.value
    })))
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
                <div className="hardware-cost">${gpuArray.reduce((previousCard, currentCard) => {
                  return previousCard + currentCard.cost
                }, 0)}</div>
                <h4>Hash rate</h4>
                {/* Hashrate Total */}
                <div className="hashrate">{gpuArray.reduce((previousCard, currentCard) => {
                  return previousCard + currentCard.hashrate
                }, 0)} MH/s</div>
                <h4>Power Consumption</h4>
                {/* Power Consumption Total */}
                <div className="power-consumption">{gpuArray.reduce((previousCard, currentCard) => {
                  return previousCard + currentCard.power_consumption
                }, 0)} W</div>
              </div>
              <div className="save-build">
                {/* <Link to='/#' > */}
                  <button onClick={() => {
                    let hardwareCost = gpuArray.reduce((previousCard, currentCard) => {
                      return previousCard + currentCard.cost
                    }, 0) 
                    let hashrate = gpuArray.reduce((previousCard, currentCard) => {
                      return previousCard + currentCard.hashrate
                    }, 0)
                    let powerConsumption = gpuArray.reduce((previousCard, currentCard) => {
                      return previousCard + currentCard.power_consumption
                    }, 0)
                    alert(hardwareCost)
                    alert(hashrate)
                    alert(powerConsumption)
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
                <p> /day</p>
                <p> /week</p>
                <p> /month</p>
                <p> /year</p>
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
