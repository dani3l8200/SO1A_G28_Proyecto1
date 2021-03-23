
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
    mensajes: []
  };
  async componentDidMount() {
    // constructor
    this.allMsg();
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
      <div style={{height:100}}>

      </div>
      <h1> PROCESOS </h1>
<TableContainer component={Paper} className="col-xl-10 col-10 my-3" style={{maxHeight:481}}>
        <Table style={{minWidth: 650}} aria-label="caption table" >
          <TableHead>
            <TableRow>
            <TableCell>PID</TableCell>
            <TableCell align="right">Name</TableCell>
            <TableCell align="right">Father PID</TableCell>
            <TableCell align="right">Status</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {this.state.mensajes.map((row) => (
            <TableRow>
              <TableCell component="th" scope="row">
                {row.name}
              </TableCell>
              <TableCell align="right">{row.name}</TableCell>
              <TableCell align="right">{row.name}</TableCell>
              <TableCell align="right">{row.name}</TableCell>
            </TableRow>
          ))}
          </TableBody>
        </Table>
</TableContainer>
      </>
    );
  }
}