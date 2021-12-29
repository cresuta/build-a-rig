import React from "react";
import "./BuildArea.css";
import { Link } from "react-router-dom";
import 'bootstrap-icons/font/bootstrap-icons.css';
import { GraphicsCardList } from "./graphics_card/GraphicsCardList";
import { MotherboardList } from "./motherboard/MotherboardList";
import { Dropdown } from "react-bootstrap";

export const BuildArea = () => {

    return (
    <>
      <main className="px-2 py-2 dashboard__container">
        
        {/* Graphics Card List */}
        <div className="graphics-cards__container">
          {/* <h1>Graphics Cards</h1> */}
          <div className="graphics-cards__list">
            <GraphicsCardList/>
          </div>
        </div>
        
        <div className="build__container">
          
          <div className="build-area__container">
            <div className="build-area">
              <div className="motherboard__list">
                <Dropdown>
                <Dropdown.Toggle id="dropdown-button-dark-example1" variant="secondary">
                Pick A Motherboard
                </Dropdown.Toggle>
                <Dropdown.Menu variant="dark">
                  <MotherboardList/>
                </Dropdown.Menu>
                </Dropdown>
              </div>
              <div className="drag-drop__build-area">
                <h1>Build Area</h1>
              </div>
            </div>
            
            {/* Build Area - Stat Totals */}
            <div className="build-area-totals">
              <img className="ethereum-logo" src={require('../imgs/ethereum-logo-2.png')} alt="Build-A-Rig Logo" />
              <div className="build-area-totals__list">
                <h2>Hardware Cost</h2>
                <h2>Hash rate</h2>
                <h2>Power Consumption</h2>
              </div>
              <div className="save-build">
                <Link to='/#' >
                  <button className="ghost" id="save-build"><span>Save Build <i class="bi bi-cloud-download"></i></span></button> 
                </Link>
              </div>
            </div>
          </div> 

          {/* Calculations - Revenue, Electricity, Profit */}
          <div className="calculation-metrics__container">
            <div className="revenue">
              <p>Totals for Day, Month, Year</p>
              <h1><i class="bi bi-currency-dollar"></i>Revenue</h1>
              <div className="revenue-metrics"></div>
            </div>
            <div className="electricity">
              <p>Totals for Day, Month, Year</p>
              <h1><i class="bi bi-lightning-charge"></i>Electricity</h1>
              <div className="electricity-metrics"></div>
            </div>
            <div className="profit">
              <p>Totals for Day, Month, Year</p>
              <h1><i class="bi bi-cash-coin"></i>Profit</h1>
              <div className="profit-metrics"></div>
            </div>
          </div>
        </div>
        
      </main>
    </>
    )
}
