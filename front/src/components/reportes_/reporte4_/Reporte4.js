import React, { Component } from 'react';
import CanvasJSReact from '../../../assets/canvasjs.react';
var CanvasJSChart = CanvasJSReact.CanvasJSChart;
/*
se puede optimizar la grafica del componente 4 y 5 pasando por parametros valores


*/

class GraficaCircular extends Component {
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
				dataPoints: [
					{ y: 32, label: "Health" },
					{ y: 22, label: "Finance" },
					{ y: 15, label: "Education" },
					{ y: 19, label: "Career" },
					{ y: 5, label: "Family" },
					{ y: 7, label: "Real Estate" }
				]
			}]
		}

		const rep5 = {
			theme: "dark2",
			animationEnabled: true,
			exportFileName: "Porcentaje de casos infectados por infectedType",
			exportEnabled: true,
			title:{
				text: "Top Categories of New Year's Resolution"
			},
			data: [{
				type: "pie",

				legendText: "{label}",
				indexLabel: "{y}%",
				indexLabelPlacement: "inside",
				dataPoints: [
					{ y: 32, label: "Health" },
					{ y: 22, label: "Finance" },
					{ y: 15, label: "GERMAN" },
					{ y: 19, label: "HI" },
					{ y: 5, label: "Family" },
					{ y: 7, label: "Real Estate" }
				]
			}]
		}
		return (
			<>
			<div style={{height: 100}}></div>

		<div className="col-xl-6 col-6">
			<CanvasJSChart options = {rep4} />
		</div>
			<div style={{height: 200}}></div>
		<div className="col-xl-6 col-6">
			<CanvasJSChart options = {rep5} />
		</div>
		
		
		</>
		);
	}
}

export default GraficaCircular;