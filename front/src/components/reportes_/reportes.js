// en este componente van a ir la lista de los reportes
import Rep1 from './reporte1_/Reporte1';
import Animacion from 'react-reveal/Fade';
import Rep2 from './reporte2_/Reporte2';
import Rep4 from './reporte4_/Reporte4';
import Rep6 from './reporte6_/Reporte6';
export default function Monitor(){

    return (

<header className="App-header">
<div style={{height: 50}}></div>
<h1>Reportes </h1>
<div style={{height: 150}}></div>
<Animacion>
        <h2>Tabla de datos recopilados</h2>
</Animacion>

<Rep1/>
<Rep2/>
<Rep4/>
<Rep6/>

<div style={{height: 100}}>

</div>
</header>
    )
}