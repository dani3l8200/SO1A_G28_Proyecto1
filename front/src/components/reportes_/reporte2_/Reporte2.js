
/*
 Región más infectada; una región es una agrupación de departamentos, se tomarán en cuenta los
definidos en esta página


adentro de este componente esta el reporte 2 y 3


*/

import url from '../../../shared/url';
import React, { Component } from "react";
import axios from "axios";

import Card from 'react-bootstrap/Card';

import CardGroup from 'react-bootstrap/CardGroup';

import mapaImage from '../../../assets/map.jpg'
import metropolitana from '../../../assets/regiones/metropolitana.png';
import peten from '../../../assets/regiones/peten.png';
import central  from '../../../assets/regiones/regioncentral.png';
import norte  from '../../../assets/regiones/norte.png';
import noroccidente  from '../../../assets/regiones/noroccidente.png';
import nororiente  from '../../../assets/regiones/nororiente.png';


import suroccidente  from '../../../assets/regiones/suroccidente.png';
import suroriente  from '../../../assets/regiones/suroriente.png';
import Rep3 from '../reporte3_/Reporte3';






export default class Reporte2 extends Component {
  state = {
    imagen: mapaImage
  };
  async componentDidMount() {
    // constructor
    this.getRegiones();
  }

  async getRegiones(){
    const ruta = url+"/consulta/regionMasInfectada/";
    const res = await axios.get(ruta);
    let info = res.data;
    let regiones =[
      {region: 'metropolitana o region I' , cantidad: 0 , imagen: metropolitana},
      {region: 'peten o region VIII' , cantidad: 0 , imagen: peten},
      {region: 'central o region V' , cantidad: 0 , imagen: central},
      {region: 'norte o region II' , cantidad: 0 , imagen: norte},
      {region: 'noroccidente o region VII' , cantidad: 0 , imagen :noroccidente },
      {region: 'nororiente o region III' , cantidad: 0 , imagen :nororiente },//5
      {region: 'suroccidente o region VI' , cantidad: 0 , imagen: suroccidente},
      {region: 'suroriente o region IV' , cantidad: 0 , imagen : suroriente}
    ];
    for (let i = 0 ; i < info.length ; i++){
         if(info[i]._id === "Guatemala"){
            regiones[0].cantidad += info[i].count;// metropolitana
         }else if(info[i]._id === "Quetzaltenango" || info[i]._id === "Retalhuleu" || info[i]._id === "San Marcos" || info[i]._id === "Suchitepequez" || info[i]._id === "Sololá"  || info[i]._id === "Totonicapán"){
          regiones[6].cantidad += info[i].count;// suroccidente
         }else if(info[i]._id === "Huehuetenango" || info[i]._id === "Quiché"){
          regiones[4].cantidad += info[i].count;// noroccidente
         }else if(info[i]._id === "Alta Verapaz" || info[i]._id === "Baja Verapaz"){
          regiones[3].cantidad += info[i].count;// norte
         }else if(info[i]._id === "Chiquimula" || info[i]._id === "El Progreso"|| info[i]._id === "Izabal" || info[i]._id === "Zacapa"){
          regiones[5].cantidad += info[i].count;// nororiente
         }else if(info[i]._id === "Jutiapa" || info[i]._id === "Jalapa"|| info[i]._id === "Santa Rosa"){
          regiones[7].cantidad += info[i].count;// suroriente
         }else if(info[i]._id === "Petén"){
          regiones[1].cantidad += info[i].count;// peten
         }else if(info[i]._id === "Chimaltenago" || info[i]._id === "Sacatepequez"|| info[i]._id === "Escuintla"){
          regiones[2].cantidad += info[i].count;// central
         }
    }

    regiones.sort(function (x , b){
      if(x.cantidad > b.cantidad){
          return 1;
      }
      if(x.cantidad < b.cantidad){
        return -1;
      }
      return 0;
    });
 //   console.log(regiones);
//    console.log("region mas infectada :" , regiones[regiones.length-1]);
    this.setState({ imagen: regiones[regiones.length-1].imagen});
}



  render() {

    return (
      <>
      <header className="App-header">
      <div style={{height: 100}}></div>
  
      <CardGroup className="col-x-10 col-10  p-5 p-xl-5 fondo">

      <Card  className="col-x-12 col-12  p-5 p-xl-5 fondo"  >
      <h1>Region Mas Infectada </h1>
      <Card.Img variant="top" src={this.state.imagen} style={{maxHeight:500 , maxWidth: 450}}   />
      </Card>

      <Card  className="col-x-12 col-12  p-5 p-xl-5 fondo"  >
      <Rep3/>
      </Card>

      </CardGroup>
      <div style={{height: 100}}></div>
</header>


      </>
    );
  }
}
