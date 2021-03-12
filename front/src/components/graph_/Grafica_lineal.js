import React, { Component } from 'react';
import CanvasJSReact from '../../assets/canvasjs.react';
var CanvasJSChart = CanvasJSReact.CanvasJSChart;
 
class SplineAreaChart extends Component {
	render() {
		
		
		// aca en esta constante options defino que va tener mi  grafica 
		const options = {
			animationEnabled: true,
			title: {
				text: ""
			},
			axisY: {
				title: "MEDICION Y",
				includeZero: true ,
				suffix: " unidades"
			},
			data: [{
				type: "splineArea",
				xValueFormatString: "YYYY",
				yValueFormatString: "#,##0.## bn kW⋅h",
				showInLegend: true,
				legendText: "TEXTO DE LA LEYENDA ABAJO",
				dataPoints: [
					{ x: new Date(2007, 0), y: 60.735 },
					{ x: new Date(2009, 0), y: 50.102 },
					{ x: new Date(2010, 0), y: 85.569 },
					{ x: new Date(2011, 0), y: 72.743 },
					{ x: new Date(2012, 0), y: 72.381 },
					{ x: new Date(2013, 0), y: 71.406 },
					{ x: new Date(2014, 0), y: 73.163 },
					{ x: new Date(2015, 0), y: 10.10  },
					{ x: new Date(2016, 0), y: 72.525 },
					{ x: new Date(2017, 0), y: 73.121 }
				]
			}]
		}
		
		return (
		<div>
			<h1>TITULO</h1>
			<CanvasJSChart options = {options} 
				/* onRef={ref => this.chart = ref} */
			/>
			{/*You can get reference to the chart instance as shown above using onRef. This allows you to access all chart properties and methods*/}
		</div>
		);
	}
}

export default SplineAreaChart;                           