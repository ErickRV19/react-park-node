import React, { Component } from "react";
import { Button } from "@material-ui/core";

import "./Empleados.scss";

let obj = [],
  obj2 = [],
  emp0=[],
  emp1=[],
  emp2=[],
  emp3=[],
  emp4=[],
  emp5=[];
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
  getAllEmpleados = async () => {
    let res = await fetch("http://localhost:3003/allEmpleados");
    let data = await res.json();

    console.log(data);
    //console.log(data[0]);

    for (let i = 0; i < data.length; i++) {
      for (let j = 0; j < data[i].length; j++) {
        if (i = 0) {
          emp0.push(data[i][j].value);
        } 
        if (i = 1) {
          emp1.push(data[i][j].value);
        } 
        if (i = 2) {
          emp2.push(data[i][j].value);
        }
        if (i = 3) {
          emp3.push(data[i][j].value);
        } 
        if (i = 4) {
          emp4.push(data[i][j].value);
        } 
        if (i = 5) {
          emp5.push(data[i][j].value);
        }else{
          emp0.push(data[i][j].value);
        }  
      }
    }

    data = data[1][1].value;
    this.setState({
      emp0,
      emp1,
      emp2,
      emp3,
      emp4,
      emp5
    });
    //console.log({ obj });
    //console.log({ obj2 });
    //console.log(data[1][0].value);
    //console.log(data);
    //console.log(this.state.empleados.data)
    //console.log("ob "+Object.keys(obj));
  };

  render() {
    //this.state.empleados = this.state;
    return (
      <div className="empleados">
        <div className="title">
          <h1>Empleados de las sucursales</h1>
          <Button variant="contained" color="secondary" 
          onClick={ e=> window.location.href='/Sucursales' }>
          Registrar Empleado
        </Button>
        </div>
        <h3>Empleados de las sucursales alamacenados en maquina 1</h3>

        <div className="emple">
          <table className="tabla-empl">
            <tr>
              <th>Id</th>
            </tr>
            <tr>
              <th>IdEmpleado</th>
            </tr>
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
              <th>FNacimiento</th>
            </tr>
            <tr>
              <th>Correo</th>
            </tr>
            <tr>
              <th>Telefono</th>
            </tr>
            <tr>
              <th>Id Puesto</th>
            </tr>
            <tr>
              <th>Id Turno</th>
            </tr>
            <tr>
              <th>Id Sucursal</th>
            </tr>
          </table>
          <div className="empleado">
            {obj.map((obj) => (
              <div>{obj}</div>
            ))}
          </div>
          <div className="empleado">
            {obj2.map((obj2) => (
              <div>{obj2}</div>
            ))}
          </div>
        </div>
        <Button variant="contained" color="primary" onClick={this.getEmpleados}>
          Empleados maquina 1
        </Button>
        <div className="">
          <h3>Empleados de las sucursales alamacenados en todas las maquinas</h3>
          <div className="emple">

          <table>
            <tr>
              <th>Id</th>
            </tr>
            <tr>
              <th>IdEmpleado</th>
            </tr>
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
              <th>FNacimiento</th>
            </tr>
            <tr>
              <th>Correo</th>
            </tr>
            <tr>
              <th>Telefono</th>
            </tr>
            <tr>
              <th>Id Puesto</th>
            </tr>
            <tr>
              <th>Id Turno</th>
            </tr>
            <tr>
              <th>Id Sucursal</th>
            </tr>
          </table>
            <div className="empleado">
              {obj.map((obj) => (
                <div>{obj}</div>
              ))}
            </div>
            <div className="empleado">
              {emp1.map((emp1) => (
                <div>{emp1}</div>
              ))}
            </div>
            <div className="empleado">
              {emp2.map((emp2) => (
                <div>{emp2}</div>
              ))}
            </div>
            <div className="empleado">
              {emp3.map((emp3) => (
                <div>{emp3}</div>
              ))}
            </div>
            <div className="empleado">
              {emp4.map((emp4) => (
                <div>{emp4}</div>
              ))}
            </div>
            <div className="empleado">
              {emp5.map((emp5) => (
                <div>{emp5}</div>
              ))}
            </div>
          </div>
          <Button
            variant="contained"
            color="primary"
            onClick={this.getAllEmpleados}
          >
            Todos los Empleados
          </Button>
        </div>
      </div>
    );
  }
}

export default Empleados;
