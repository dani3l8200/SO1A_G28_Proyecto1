import './App.css';
import "bootstrap/dist/css/bootstrap.min.css"; // para tener boostrap con CDN

import Header from "./components/header_/Header";
import Graph from "./components/graph_/Graph";
import TableProcess from "./components/table_/TableProcess";



function App() {
  return (
    <div className="fondo">
      <Header>
      </Header>
      <header className="App-header">
      <Graph/>
      
      </header>
      <TableProcess/>
    </div>
  );
}
// tiene 2 formas de poner un componente 
// como una etiqueta de HTML 
// O  <nombreComponente />
export default App;
