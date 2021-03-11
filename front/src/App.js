import logo from './logo.svg';
import './App.css';
import "bootstrap/dist/css/bootstrap.min.css"; // para tener boostrap con CDN
import Footer from "./components/footer_/Footer";
import Header from "./components/header_/Header";
import Graph from "./components/graph_/Graph";
import TableProcess from "./components/table_/TableProcess";

function App() {
  return (
    <div className="App">
      <Header>
      </Header>
      <header className="App-header">
      <Graph />

<TableProcess />
        </header>

        <Footer /> 
    </div>
  );
}
// tiene 2 formas de poner un componente 
// como una etiqueta de HTML 
// O  <nombreComponente />
export default App;
