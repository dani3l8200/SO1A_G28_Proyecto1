
/*
 Región más infectada; una región es una agrupación de departamentos, se tomarán en cuenta los
definidos en esta página


adentro de este componente esta el reporte 2 y 3


*/
import React from 'react';
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
function getImage(indice){// SOLO 8 , indicees hasta el 7
  const imagenes = [metropolitana,peten,central,norte,suroccidente,suroriente,noroccidente,nororiente];
  return imagenes[indice];
}

export default function Reporte2 (){
    // logica



    return(
    <>
    <div style={{height: 100}}></div>

<CardGroup className="col-x-10 col-10  p-5 p-xl-5 fondo">

<Card  className="col-x-12 col-12  p-5 p-xl-5 fondo"  >
  <h1>Region Mas Infectada </h1>
    <Card.Img variant="top" src={mapaImage} style={{maxHeight:500 , maxWidth: 450}}   />
</Card>

<Card  className="col-x-12 col-12  p-5 p-xl-5 fondo"  >

  <Rep3/>
</Card>

</CardGroup>
    </>
    );
}