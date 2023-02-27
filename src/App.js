import logo from './logo.svg';
import './App.css';
import Svg from './components/Svg'
import BurrChart from './components/BurrChart';
import * as d3 from 'd3'
import data from './utils/data.json'
import React, { Component } from 'react';
import schc from "./SCHC.json";
import vcit from "./VCIT.json";
import portfolio from "./portfolio.json";
import MultilineChart from './components/MultiLineChart';
import Circle from './components/Circle';


const portfolioData = {
  name: "Portfolio",
  color: "#ffffff",
  items: portfolio.map((d) => ({ ...d, date: new Date(d.date) }))
};
const schcData = {
  name: "SCHC",
  color: "#d53e4f",
  items: schc.map((d) => ({ ...d, date: new Date(d.date) }))
};
const vcitData = {
  name: "VCIT",
  color: "#5e4fa2",
  items: vcit.map((d) => ({ ...d, date: new Date(d.date) }))
};

const dimensions = {
  width: 600,
  height: 300,
  margin: {
    top: 30,
    right: 30,
    bottom: 30,
    left: 60
  }
};




function App() {
  
  return (
    <div className="App">
<BurrChart/>
<Svg />
<Circle />


<MultilineChart
        data={[portfolioData, schcData, vcitData]}
        dimensions={dimensions}
      />
    </div>
  );
}

export default App;
