/*

    REPORTE 7 GRAFICO DE BARRAS

*/
// para las peticiones
import axios from "axios";
import url from '../../../shared/url';
import React, { Component } from 'react';
import CanvasJSReact from '../../../assets/canvasjs.react';
var CanvasJS = CanvasJSReact.CanvasJS;
var CanvasJSChart = CanvasJSReact.CanvasJSChart;
 
class GraficaBarras extends Component {
	state = {
		valores: []
	};
	async componentDidMount() { // es como un constructor
		this.getTop5InfectadosPorDepartamento();
	}

	async getTop5InfectadosPorDepartamento(){
		const ruta = url+"/consulta/rangoEdades/";
		const res = await axios.get(ruta);
		let data = res.data;
		let formateado =[{ y:  0, label: "0-10 años"},
		{ y:  0, label: "11-20 años" },
		{ y:  0, label: "21-30 años" },
		{ y:  0, label: "31-40 años" },
		{ y:  0, label: "41-50 años" },
		{ y:  0, label: "61-70 años" },
		{ y:  0, label: "71-80 años" },
		{ y:  0, label: "81-90 años" },
		{ y:  0, label: "91-100 años" }];
		
		
		for(let i = 0 ; i < data.length; i++){
			if ((data[i]._id) <= 10){
				formateado[0].y += data[i].count;
			}else if((data[i]._id) <=20){
				formateado[1].y += data[i].count;
			}else if((data[i]._id) <=30){
				formateado[2].y += data[i].count;
			}else if((data[i]._id) <=40){
				formateado[3].y += data[i].count;
			}else if((data[i]._id) <=50){
				formateado[4].y += data[i].count;
			}else if((data[5]._id) <=60){
				formateado[5].y += data[i].count;
			}else if((data[i]._id) <=70){
				formateado[6].y += data[i].count;
			}else if((data[i]._id) <=80){
				formateado[7].y += data[i].count;
			}else if((data[i]._id) <=90){
				formateado[8].y += data[i].count;
			}else if((data[i]._id) <=100){
				formateado[9].y += data[i].count;
			}
		}
		



		this.setState({valores: formateado})
	}

    render() {
		const options = {
			title: {
				text: "Infectados por Rango de Edades"
			},
			data: [
			{
				// Change type to "doughnut", "line", "splineArea", etc.
				type: "column",
				dataPoints: this.state.valores
			}
			]
		}
		return (
        <>
		   <header className="App-header">
		<div style={{height: 10}}></div>
        <div className="col-xl-10 col-10 col-md-10">
			<CanvasJSChart options = {options}/>
		</div>
		<div style={{height: 100}}></div>
		</header>
        </>
		);
	}

}

export default GraficaBarras;