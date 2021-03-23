import React, { Component } from 'react';
import CanvasJSReact from '../../assets/canvasjs.react';
var CanvasJSChart = CanvasJSReact.CanvasJSChart;
 
class GraficaCircular extends Component {
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
				legendText: "TEXTO DE LA LEYENDA ABAJO",
                dataPoints: [
					{ y: 20, label: "FREE" },
					{ y: 80, label: "USING" },
				]
			}]
		}
		
		return (
		<div>
			<h1>RAM</h1>
			<CanvasJSChart options = {options} 
				/* onRef={ref => this.chart = ref} */
			/>
		</div>
		);
	}
}

export default GraficaCircular;