import React, { Component } from 'react';
import CanvasJSReact from '../../assets/canvasjs.react';
import axios from "axios";
import url from '../../shared/url';
var CanvasJSChart = CanvasJSReact.CanvasJSChart;
var CanvasJS = CanvasJSReact.CanvasJS;
var dps = [];   //dataPoints.


class GraficaCircular extends Component {

	constructor() {
		super();
		this.updateChart = this.updateChart.bind(this);
	}
	componentDidMount() {
		this.hilo = setInterval(this.updateChart, 3000);
	}
	componentWillUnmount() {
		clearInterval(this.hilo);
	}
	async updateChart() {
		dps.shift();
		dps.shift();
		const ruta = url+"/prueba1/";
		let respuesta = await axios.get(ruta);
		let res = respuesta.data;
		//let res =  {used:100 , total: 50  , free: 200}
	
		dps.push({label: "used" ,y: res.used, name: "used"});
		dps.push({label: "free" ,y: res.free, name: "free"});
		
		//	{ y: 20, label: "FREE" },
		//	{ y: 80, label: "USING" },
		this.chart.render();
	}

	render() {

		// aca en esta constante options defino que va tener mi  grafica 
		const options = {
			animationEnabled: true,
			title: {
				text: "MEDICIONES DE RAM"
			},
			axisY: {
				title: "MEDICION Y",
				includeZero: true ,
				suffix: " unidades"
			},
			data: [{
				type: "doughnut",
				showInLegend: true,
                dataPoints: dps
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

export default GraficaCircular;