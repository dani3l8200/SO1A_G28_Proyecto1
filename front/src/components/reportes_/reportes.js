// en este componente van a ir la lista de los reportes
import Rep1 from './reporte1_/Reporte1';

import Rep2 from './reporte2_/Reporte2';
import Rep4 from './reporte4_/Reporte4';
import Rep6 from './reporte6_/Reporte6';
import Rep7 from './reporte7_/Reporte7';
export default function Monitor(){

return (
<header className="App-header">
<div style={{height: 25}}></div>
<Rep1/>
<div style={{height: 200}}></div>
</header>
)
}