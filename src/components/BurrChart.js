import React, { Component } from 'react'
import * as d3 from 'd3'

class BurrChart extends Component {
    componentDidMount() {
        this.drawChart();
    }
    drawChart() {
        const data = [100,45,80,25,50,200,25,10,25,5,10,100,20,25,10,10,225];

        const svg = d3.select("body")
                    .append("svg")
                    .attr("width", 200)
                    .attr("height", 300);

        svg.selectAll("rect")
            .data(data)
            .enter()
            .append("rect")
            .attr("x", (d, i) => i * 70)
            .attr("y", (d, i) => 600 - 10 * d)
            .attr("width", 15)
            .attr("height", (d, i) => d * 400)
            .attr("fill", "green");
    }
    render() {
        return <div id={"#" + this.props.id}></div>
    }
}
export default BurrChart;