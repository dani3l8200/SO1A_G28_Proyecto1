



import './reporte1.css';
import url from '../../../shared/url';
import React, { Component } from "react";
import axios from "axios";
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import Button from '@material-ui/core/Button';
import ButtonGroup from '@material-ui/core/ButtonGroup';
import Animacion from 'react-reveal/Fade';


export default class TableRep1 extends Component {
  state = {
    mensajes: []
  };
  async componentDidMount() {
    // constructor
    this.allMsg();
  }

  async allMsg_canal(canal){
      const ruta = url+"/consulta/getAllMsg/"+canal;
      const res = await axios.get(ruta);
      console.log(res);
      this.setState({ mensajes: res.data });
  }
  async allMsg(){
    const ruta = url+"/consulta/getAllMsg/";
    const res = await axios.get(ruta);
    console.log(res);
    this.setState({ mensajes: res.data});
}



  render() {

    return (
      <>

<Animacion>
        <h2>Tabla de datos recopilados</h2>



<ButtonGroup   variant="contained" color="primary" aria-label="contained primary button group">
  <Button  onClick={this.allMsg.bind(this)}>All</Button>
  <Button onClick={this.allMsg_canal.bind(this,"gRPC")} >gRPC</Button>
  <Button onClick={this.allMsg_canal.bind(this,"nats")} >Nats</Button>
  <Button onClick={this.allMsg_canal.bind(this,"rabbit")}>Rabbit</Button>
  <Button onClick={this.allMsg_canal.bind(this,"Google Pub-Sub")}>Google Pub-Sub</Button>
</ButtonGroup>
</Animacion>


      <TableContainer component={Paper} className="col-xl-10 col-10 my-3" style={{maxHeight:481}}>
        <Table style={{minWidth: 650}} aria-label="caption table" >
          <TableHead >
            <TableRow >
              <TableCell align="center">Canal</TableCell>
              <TableCell align="center">Name</TableCell>
              <TableCell align="center">Location</TableCell>
              <TableCell align="center">Age</TableCell>
              <TableCell align="center">Infectedtype</TableCell>
              <TableCell align="center">State</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {this.state.mensajes.map((row) => (
              <TableRow key={row.name}>
                 
                 <TableCell align="center">{row.canal}</TableCell>
                <TableCell component="th" scope="row">{row.name}</TableCell>
                <TableCell align="center">{row.location}</TableCell>
                <TableCell align="center">{row.age}</TableCell>
                <TableCell align="center">{row.infectedtype}</TableCell>
                <TableCell align="center">{row.state}</TableCell>
               
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>


      </>
    );
  }
}
