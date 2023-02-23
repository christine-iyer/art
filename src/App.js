import logo from './logo.svg';
import './App.css';
import BarChart from './components/BarChart'
import BurrChart from './components/BurrChart';
import * as d3 from 'd3'
import data from './utils/data.json'
import React, { Component } from 'react';





function App() {
  
  return (
    <div className="App">
<BarChart />
<BurrChart data={data} />
    </div>
  );
}

export default App;
