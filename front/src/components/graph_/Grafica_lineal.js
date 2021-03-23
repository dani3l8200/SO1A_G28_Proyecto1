import React, { Component } from 'react';
import CanvasJSReact from '../../assets/canvasjs.react';
import axios from "axios";
import url from '../../shared/url';

var CanvasJS = CanvasJSReact.CanvasJS;
var CanvasJSChart = CanvasJSReact.CanvasJSChart;
var puntosGrafica = [];   //dataPoints.

class SplineAreaChart extends Component {

	constructor() {
		super();
		this.updateChart = this.updateChart.bind(this);
	}
	componentDidMount() {
		this.hilo = setInterval(this.updateChart, 1500);
	}
	componentWillUnmount() {
		clearInterval(this.hilo);
	}
	async updateChart() {
		const ruta = url+"/prueba1/";
		let respuesta = await axios.get(ruta);
		let res = respuesta.data;
		let porcentaje =  (res.used/res.total)*100;
		var d = new Date();
		let horaActual = d.getHours() +":"+ d.getMinutes() +":"+ d.getSeconds();
		puntosGrafica.push({label: horaActual,y: porcentaje});
		if (puntosGrafica.length >  10 ) {
			puntosGrafica.shift();
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
				dataPoints : puntosGrafica
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