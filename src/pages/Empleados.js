import React, { Component } from "react";
import { Button } from "@material-ui/core";

import './Empleados.scss'

let obj = [],
  obj2 = [];
class Empleados extends Component {
  state = {
    empleados: [],
  };

  getEmpleados = async () => {
    let res = await fetch("http://localhost:3001/empleados");
    let data = await res.json();

    console.log(data);
    //console.log(data[0]);

    for (let i = 0; i < data.length; i++) {
      for (let j = 0; j < data[i].length; j++) {
        if (i > 0) {
          obj2.push(data[i][j].value);
        } else {
          obj.push(data[i][j].value);
        }
      }
    }

    data = data[1][1].value;
    this.setState({
      obj,
      obj2,
    });
    console.log({ obj });
    console.log({ obj2 });
    //console.log(data[1][0].value);
    //console.log(data);
    //console.log(this.state.empleados.data)
    //console.log("ob "+Object.keys(obj));
  };

  render() {
    //this.state.empleados = this.state;
    return (
      <div className="empleados">
        <h1>Empleados de las sucursales</h1>      
      <div className="emple">
        <table >
  <tr>
    <th>Apellido P</th>
  </tr>
  <tr>
  <th>Apellido M</th>
  </tr>
  <tr>

  <th>Nombre</th>
  </tr>
  <tr>

  <th>Ocupacion</th>
  </tr>
  <tr>
  <th>Sucursal</th>
  </tr>

</table>
<div className="empleado">
{obj2.map((obj2) => (
            <div>{obj2}</div>
  ))}
  </div>
  <div className="empleado">
  {obj.map((obj) => (
          <div>{obj}</div>
        ))}
        </div>
        
    
      </div>
      <Button variant="contained" color="primary" onClick={this.getEmpleados}>
          Empleados maquina 1
        </Button>
      </div>
      
    );
  }
}

export default Empleados;
