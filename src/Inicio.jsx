import React, { useState } from 'react';
import './App.css'
import Cartilla from './Cartilla';
import Pie from './Pie';
function Inicio(props) {
  
  return (
    <>
      <div className="Row">
      <Cartilla Images="./Adam.jpg" titulo="Adam Sandler" ></Cartilla>
      <Cartilla Images="./Jackie.jpg" titulo="Jackie Chan" ></Cartilla>
      <Cartilla Images="./Will.jpg" titulo="Will Smith" ></Cartilla>

      </div>
      <Pie></Pie>
    </>
  );
}

export default Inicio;