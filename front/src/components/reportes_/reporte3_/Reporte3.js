// para las peticiones
import axios from "axios";
import url from '../../../shared/url';
import React, { Component } from 'react';
import CanvasJSReact from '../../../assets/canvasjs.react';
var CanvasJSChart = CanvasJSReact.CanvasJSChart;


class GraficaCircular extends Component {
	state = {
		valores: []
	};
	async componentDidMount() { // es como un constructor
		this.getTop5InfectadosPorDepartamento();
	}

	async getTop5InfectadosPorDepartamento(){
		const ruta = url+"/consulta/getTop5DerpartamentosInfectados/";
		const res = await axios.get(ruta);
		let data = res.data;
		let formateado = [];
		for(let i = 0 ; i < data.length; i++){
			formateado.push({y: data[i].count  , label: data[i]._id});
		}
		this.setState({valores: formateado})
	}

	render() {

		let options = {
			theme: "dark2",
			animationEnabled: true,
			title:{
				text: ""
			},
			data: [{
				type: "funnel",
				indexLabel: "{label} - {y}",
				toolTipContent: "<b>{label}</b>: {y} <b>{percentage}</b>",
				neckWidth: 20,
				neckHeight: 0,
				valueRepresents: "area",
				dataPoints: this.state.valores
			}]
		}



		return (
			<div>
                <h1>TOP 5 departamentos infectados </h1>
				<CanvasJSChart options = {options}
					 onRef={ref => this.chart = ref}
                     style={{maxHeight:800 , maxWidth: 400}}
				/>
				{/*You can get reference to the chart instance as shown above using onRef. This allows you to access all chart properties and methods*/}
			</div>
		);
	}
}

export default GraficaCircular;