import React from "react";
import "./BuildArea.css";

export const BuildArea = () => {
  
    return (
    <>

      <main className="px-2 dashboard__container">
        
        <div className="graphics-cards__container">
          <h1>Graphics Cards</h1>
        </div>
        
        <div className="build__container">
          
          <div className="build-area__container">
            <div className="build-area">
              <h1>Build Area</h1>
            </div>
            <div className="build-area-totals">
              <h1>Build Area Totals</h1>
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
