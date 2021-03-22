import Card from 'react-bootstrap/Card'

import Zoom from 'react-reveal/Zoom';
import './Graph.css';
import SplineAreaChart from "./Grafica_lineal";
import GraficaCircular from "./Grafica_circular"

export default function Body(){
  
    return (
    <Zoom>
       <div className = 'fondo col-12 col-xl-12 row ' style={{ width: '80rem' , height: 'auto' }} >
        
       
        <Card.Body className = 'col-12 col-xl-8 fondo' style={{ height: '32rem' }} >
            <SplineAreaChart/>
        </Card.Body>
        


        <Card.Body className = 'col-xl-4 fondo'  style={{ height: '32rem' }}>
            <GraficaCircular/>
        </Card.Body>
        
        

        
      </div>
      </Zoom>
    )
}