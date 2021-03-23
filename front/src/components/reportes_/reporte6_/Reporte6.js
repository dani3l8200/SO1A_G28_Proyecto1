




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

import Animacion2 from 'react-reveal/Jello';

export default class TableRep1 extends Component {
  state = {
    mensajes: []
  };
  async componentDidMount() {
    // constructor
    this.allMsglimit5();
  }

  async allMsglimit5(){
    const ruta = url+"/consulta/ultimos5casos/";
    const res = await axios.get(ruta);
    console.log(res);
    this.setState({ mensajes: res.data});
}



  render() {

    return (
      <>
         <header className="App-header">
<div style={{height:150}}></div>
<Animacion2>
        <h2>ULTIMOS 5 CASOS</h2>
</Animacion2>


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
      <div style={{height:150}}></div>
      </header>
      </>
    );
  }
}
