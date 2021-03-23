import React, { Component } from 'react';
import CanvasJSReact from '../../assets/canvasjs.react';
import axios from "axios";
import url from '../../shared/url';

var CanvasJS = CanvasJSReact.CanvasJS;
var CanvasJSChart = CanvasJSReact.CanvasJSChart;
var dps = [];   //dataPoints.
var xVal = dps.length + 1;
var yVal = 15;
var updateInterval = 1000;
 
class SplineAreaChart extends Component {

	constructor() {
		super();
		this.updateChart = this.updateChart.bind(this);
	}
	componentDidMount() {
		this.hilo = setInterval(this.updateChart, updateInterval);
	}
	componentWillUnmount() {
		clearInterval(this.hilo);
	}
	async updateChart() {
		const ruta = url+"/prueba1/";
		let respuesta = await axios.get(ruta);
		let res = respuesta.data;
		let porcentaje =  (res.used/res.total)*100;
		dps.push({x: xVal,y: porcentaje});
		xVal++;
		if (dps.length >  10 ) {
			dps.shift();
		}
		this.chart.render();
	}
	render() {
		const options = {
			title :{
				text: "SYSTEM MONITOR"
			},
			data: [{
				type: "area",
				dataPoints : dps
			}]
		}
		return (
		<div>
			<CanvasJSChart options = {options}
				 onRef={ref => this.chart = ref}
			/>
		</div>
		);
	}
}

export default SplineAreaChart;