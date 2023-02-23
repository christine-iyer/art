import React, { Component } from 'react';
import * as d3 from 'd3'
import chroma from 'chroma-js'

const width = 650
const height = 400
const margin = { top: 20, right: 5, bottom: 20, left: 35 }
const red = '#eb6a5b';
const green = '#b6e86f';
const blue = '#52b6ca';
const colors = chroma.scale([blue, green, red]).mode('hsl');

class BurrChart extends Component {
     state = {
          bars: [],
          xScale: d3.scaleTime().range([margin.left, width - margin.right]),
          yScale: d3.scaleTime().range([height - margin.bottom, margin.top]),
          colorScale: d3.scaleLinear(),
     }
     xAxis = d3.axisBottom().scale(this.state.xScale)
          .tickFormat(d3.timeFormat('%b'))
     yAxis = d3.axisLeft().scale(this.state.yScale)
          .tickFormat(d => `${d}℉`);

     static getDerivedStateFromProps(nextProps, prevState) {
          if (!nextProps.data) return null
          const { data } = nextProps;
          const { xScale, yScale, colorScale } = prevState

          const timeDomain = d3.extent(data, d => d.date)
          const tempMax = d3.max(data, d => d.high)
          const colorDomain = d3.extent(data, d => d.avg)
          xScale.domain(timeDomain)
          yScale.domain(tempMax)
          colorScale.domain(colorDomain)

          const bars = data.map(d => {
               const y1 = yScale(d.high);
               const y2 = yScale(d.low)
               return {
                    x: xScale(d.date),
                    y: y1,
                    height: y2 - y1,
                    fill: colors(colorScale(d.avg)),
               }
          })
          return { bars };
     }

     componentDidUpdate() {
          d3.select(this.refs.xAxis).call(this.xAxis);
          d3.select(this.refs.yAxis).call(this.yAxis);
     }
     render() {

          return (
               <div>
               <svg width={width} height={height}>
                    {this.state.bars.map((d, i) =>
                         (<rect key={i} x={d.x} y={d.y} width='2' height={d.height} fill={d.fill} />))}
                    <g>
                         <g ref='xAxis' transform={`translate(0, ${height - margin.bottom})`} />
                         <g ref='xyxis' transform={`translate(${margin.left},0)`} />
                    </g>



               </svg>
               </div>
          )
     }

}
export default BurrChart