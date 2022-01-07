import React, { useContext, useEffect } from "react";
import { MotherboardContext } from "./MotherboardProvider";
import { MotherboardCard } from "./MotherboardCard";
import "./Motherboard.css";

export const MotherboardDropdown = ({setDropzoneSize}) => {

  const { motherboards, getMotherboards } = useContext(MotherboardContext);

  useEffect(() => {
    getMotherboards();
  }, []);



  return (
    <>
      <select
        onChange={(e) => {
          setDropzoneSize(e.target.value)}
        }
        class="form-select motherboard-select bg-dark text-white border border-dark"
        aria-label="Default select example"
      >
        <option value="0">Pick A Motherboard</option>
        {motherboards.map((mobo) => {
          return <MotherboardCard key={mobo.id} mobo={mobo} />;
        })}
      </select>
    </>
  );
};
