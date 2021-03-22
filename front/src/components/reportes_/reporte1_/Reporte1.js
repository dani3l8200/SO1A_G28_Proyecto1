



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


export default class TableRep1 extends Component {
  state = {
    mensajes: []
  };
  async componentDidMount() {
    // constructor
    this.traeMensajes();
  }

  async traeMensajes(){
      const ruta = url+"/consulta/getAllMsg/"
      const res = await axios.get(ruta);
      console.log(res);
      this.setState({ mensajes: res.data });
  }
  async allMsg(){
    const ruta = url+"/consulta/getAllMsg/"
    const res = await axios.get(ruta);
    console.log(res);
}


  hola(){
    console.log("hola");
  }





  render() {

    return (
      <>
<ButtonGroup variant="contained" color="primary" aria-label="contained primary button group">
  <Button  onClick={this.allMsg}>All</Button>
  <Button onClick={this.hola} >gRPC</Button>
  <Button>Nats</Button>
  <Button>MQRabbit</Button>
  <Button>Google Pub/Sub</Button>
</ButtonGroup>

      <TableContainer component={Paper} className="col-xl-10 col-10">
        <Table style={{minWidth: 650}} aria-label="caption table" >
          <TableHead >
            <TableRow >
              <TableCell>Canal</TableCell>
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
