/*

    REPORTE 7 GRAFICO DE BARRAS

*/

import React, { Component } from 'react';
import CanvasJSReact from '../../../assets/canvasjs.react';
var CanvasJS = CanvasJSReact.CanvasJS;
var CanvasJSChart = CanvasJSReact.CanvasJSChart;
 
class GraficaBarras extends Component {
    render() {
		const options = {
			animationEnabled: true,
			theme: "light2",
			title:{
				text: "Rango de edad de infectados"
			},
			axisX: {
				title: "Edades",
				reversed: true,
			},
			axisY: {
				title: "Monthly Active Users",
				includeZero: true,
				labelFormatter: this.addSymbols
			},
			data: [{
				type: "bar",
				dataPoints: [
					{ y:  2200000000, label: "71-80" },
					{ y:  1800000000, label: "61-70" },
					{ y:  800000000, label: "50-51" },
					{ y:  563000000, label: "31-40" },
					{ y:  376000000, label: "21-30" },
					{ y:  336000000, label: "11-20" },
					{ y:  330000000, label: "0-10" }
				]
			}]
		}
		return (
        <>
		<div style={{height: 100}}></div>
        <div className="col-xl-10 col-10 col-md-10">
			<CanvasJSChart options = {options}/>
		</div>

        </>
		);
	}
	addSymbols(e){
		var suffixes = ["", "K", "M", "B"];
		var order = Math.max(Math.floor(Math.log(e.value) / Math.log(1000)), 0);
		if(order > suffixes.length - 1)
			order = suffixes.length - 1;
		var suffix = suffixes[order];
		return CanvasJS.formatNumber(e.value / Math.pow(1000, order)) + suffix;
	}
}

export default GraficaBarras;                           