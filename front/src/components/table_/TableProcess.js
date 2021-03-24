
import url from '../../shared/url';
import React, { Component } from "react";
import axios from "axios";
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';

export default class TableRep1 extends Component {
  state = {
    procesos: [],
    numeroProcesos: 0
  };
  
  componentDidMount() {
    // constructor
    this.allMsg();
    this.hilo = setInterval(() =>{this.allMsg();},1000);
  }

  componentWillUnmount() {
    clearInterval(this.hilo);
  }

  async allMsg(){
    const ruta = url+"/prueba2/";
    const res = await axios.get(ruta);
    console.log("respuesta proceso",res);
    res.data.sort(function (x , b){
      if(x.pid > b.pid){
          return 1;
      }
      if(x.pid < b.pid){
        return -1;
      }
      return 0;
    });
    this.setState({ numeroProcesos: res.data.length});
    this.setState({ procesos: res.data});
}



  render() {

    return (
      <>
      <div style={{height:100}}>

      </div>
      <h1> PROCESOS CORRIENDO  {this.state.numeroProcesos}</h1>
<TableContainer component={Paper} className="col-xl-10 col-10 my-3" style={{maxHeight:481}}>
        <Table style={{minWidth: 650}} aria-label="caption table" >
          <TableHead>
            <TableRow>
            <TableCell>PID</TableCell>
            <TableCell align="right">Name</TableCell>
            <TableCell align="right">Status</TableCell>
            <TableCell align="right">Father PID</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {this.state.procesos.map((row) => (
            <TableRow>
              <TableCell component="th" scope="row">
                {row.pid}
              </TableCell>
              <TableCell align="right">{row.nombre}</TableCell>
              <TableCell align="right">{row.state}</TableCell>
              <TableCell align="right">{row.pidp}</TableCell>
            </TableRow>
          ))}
          </TableBody>
        </Table>
</TableContainer>
      </>
    );
  }
}