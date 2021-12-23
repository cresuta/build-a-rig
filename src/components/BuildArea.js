import React from "react";
import "./BuildArea.css";

export const BuildArea = () => {
  
    return (
    <>

      <main className="px-2 py-2 dashboard__container">
        
        <div className="graphics-cards__container">
          <h1>Graphics Cards</h1>
        </div>
        
        <div className="build__container">
          
          <div className="build-area__container">
            <div className="build-area">
              <h1>Build Area</h1>
              <div>
                <button>Build!</button>
              </div>
            </div>
            <div className="build-area-totals ">
              {/* <h1>Build Area Totals</h1> */}
              <img className="ethereum-logo" src={require('../imgs/ethereum-logo-2.png')} alt="Build-A-Rig Logo" />
              <div className="build-area-totals__list">
                <h2>Hardware Cost</h2>
                <h2>Hash rate</h2>
                <h2>Power Consumption</h2>
              </div>
              <div className="save-build">
                <button>Save Build</button>
              </div>
            </div>
          </div>

          <div className="calculation-metrics__container">
            <div className="revenue">
              <h1>Revenue</h1>
            </div>
            <div className="electricity">
              <h1>Electricity</h1>
            </div>
            <div className="profit">
              <h1>Profit</h1>
            </div>
          </div>

        </div>

      </main>
    </>
    )
  
}
