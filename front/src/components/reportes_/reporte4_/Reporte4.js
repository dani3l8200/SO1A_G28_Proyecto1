import axios from "axios";
import url from '../../../shared/url';
import React, { Component } from 'react';
import CanvasJSReact from '../../../assets/canvasjs.react';
var CanvasJSChart = CanvasJSReact.CanvasJSChart;
/*
se puede optimizar la grafica del componente 4 y 5 pasando por parametros valores


*/

/*

Gráfico circular del porcentaje de casos infectados por state.
Gráfico circular del porcentaje de casos infectados por infectedType.
*/

class GraficaCircular extends Component {
	state = {
		valores1: [],
		valores2: []
	};

	async getForState(){
		const ruta = url+"/consulta/getForState/";
		const res = await axios.get(ruta);
		let data = res.data;
		let formateado = [];
		let total = 0;
		for(let i = 0 ; i < data.length; i++){
			total +=data[i].count;
		}
		for(let i = 0 ; i < data.length; i++){
			let porcentaje = (data[i].count/total) *100;
			formateado.push({y: porcentaje  , label: data[i]._id});
		}
		this.setState({valores1: formateado})
	}

	async getForInfectedType(){
		const ruta = url+"/consulta/getForInfectedType/";
		const res = await axios.get(ruta);
		let data = res.data;
		let formateado = [];
		let total = 0;
		for(let i = 0 ; i < data.length; i++){
			total +=data[i].count;
		}
		for(let i = 0 ; i < data.length; i++){
			let porcentaje = (data[i].count/total) *100;
			formateado.push({y: porcentaje  , label: data[i]._id});
		}
		this.setState({valores2: formateado})
	}
	async componentDidMount() { // es como un constructor
		this.getForState();
		this.getForInfectedType();
	}
    render() {
		const rep4 = {
			theme: "dark2",
			animationEnabled: true,
			exportFileName: "New Year Resolutions",
			exportEnabled: true,
			title:{
				text: "Porcentaje de casos infectados por state"
			},
			data: [{
				type: "pie",
				showInLegend: true,
				legendText: "{label}",
				toolTipContent: "{label}: <strong>{y}%</strong>",
				indexLabel: "{y}%",
				indexLabelPlacement: "inside",
				dataPoints:this.state.valores1
			}]
		}

		const rep5 = {
			theme: "dark2",
			animationEnabled: true,
			exportFileName: "New Year Resolutions",
			exportEnabled: true,
			title:{
				text: "Porcentaje de casos infectados por InfectedType"
			},
			data: [{
				type: "pie",
				showInLegend: true,
				legendText: "{label}",
				toolTipContent: "{label}: <strong>{y}%</strong>",
				indexLabel: "{y}%",
				indexLabelPlacement: "inside",
				dataPoints:this.state.valores2
			}]
		}


		return (
		<>
	      <header className="App-header">
		<div style={{height: 100}}></div>

		<div className="col-xl-6 col-6">
			<CanvasJSChart options = {rep4} />
		</div>
			<div style={{height: 200}}></div>
		<div className="col-xl-6 col-6">
			<CanvasJSChart options = {rep5} />
		</div>
		<div style={{height: 100}}></div>
		</header>	
		</>
		);
	}
}

export default GraficaCircular;