import React, { Component } from "react";
import { Button } from "@material-ui/core";

import "./Empleados.scss";

let suc = [],
    suc2 = [],
    suc3 = [],
    suc4 = [],
    suc5 = [],
    suc6 = [],
    suc7 = [],
    suc8 = [],
    suc9 = [],
    suc10 = [],
    suc11 = [],
    suc12 = [];
class Sucursales extends Component {
  state = {
    sucursales: [],
  };

  getAllSucursales = async () => {
      let res = await fetch("http://localhost:3002/sucursales");
      let data = await res.json();
      console.log(data);
      //console.log(data.length);

    for (let i = 0; i < data.length; i++) {
      for (let j = 0; j < data[i].length; j++) {
        console.log(data[i][j]);
        switch (i) {
            case 0:
                suc.push(data[i][j].value);
              break;
              case 1:
                suc2.push(data[i][j].value);
              break;
              case 2:
                suc3.push(data[i][j].value);
              break;
              case 3:
                suc4.push(data[i][j].value);
              break;
              case 4:
                suc5.push(data[i][j].value);
              break;
              case 5:
                suc6.push(data[i][j].value);
              break;
              case 6:
                suc7.push(data[i][j].value);
              break;
              case 7:
                suc8.push(data[i][j].value);
              break;
              case 8:
                suc9.push(data[i][j].value);
              break;
              case 9:
                suc10.push(data[i][j].value);
              break;
              case 10:
                suc11.push(data[i][j].value);
              break;
              case 11:
                suc12.push(data[i][j].value);
              break;
           
          }    
      }
    }
    console.log({suc});
      
    

    this.setState({
        suc,
        suc2,
        suc3,
        suc4,
        suc5,
        suc6,
        suc7,
        suc8,
        suc9,
        suc10,
        suc11,
        suc12,

    });

  };

  render() {
    //this.state.empleados = this.state;
    return (
      <div className="empleados">
        <h1>Ubicacion de todas las sucursales</h1>

        <div className="emple">
          <table className="tabla">
            <tr>
              <th>Nombre sucursal</th>
            </tr>
            <tr>
              <th>Estado</th>
            </tr>
            <tr>
              <th>Municipio</th>
            </tr>
            <tr>
              <th>Calle</th>
            </tr>
            <tr>
              <th>Numero</th>
            </tr>
            <tr>
              <th>Colonia</th>
            </tr>
            <tr>
              <th>Cp</th>
            </tr>
            
          </table>
          <div className="sucursal">
            {suc.map((suc) => (
              <div>{suc}</div>
            ))}
          </div>
          <div className="sucursal">
            {suc2.map((suc2) => (
              <div>{suc2}</div>
            ))}
          </div>
          <div className="sucursal">
            {suc3.map((suc3) => (
              <div>{suc3}</div>
            ))}
          </div>
          <div className="sucursal">
            {suc4.map((suc4) => (
              <div>{suc4}</div>
            ))}
          </div>
          <div className="sucursal">
            {suc9.map((suc9) => (
              <div>{suc9}</div>
            ))}
          </div>
          <div className="sucursal">
            {suc8.map((suc8) => (
              <div>{suc8}</div>
            ))}
          </div>
          <div className="sucursal">
            {suc7.map((suc7) => (
              <div>{suc7}</div>
            ))}
          </div>
          <div className="sucursal">
            {suc5.map((suc5) => (
              <div>{suc5}</div>
            ))}
          </div>
          <div className="sucursal">
            {suc6.map((suc6) => (
              <div>{suc6}</div>
            ))}
          </div>
          <div className="sucursal">
            {suc10.map((suc10) => (
              <div>{suc10}</div>
            ))}
          </div>
          <div className="sucursal">
            {suc11.map((suc11) => (
              <div>{suc11}</div>
            ))}
          </div>
          <div className="sucursal">
            {suc12.map((suc12) => (
              <div>{suc12}</div>
            ))}
          </div>
         
        </div>
        <Button variant="contained" color="primary" onClick={this.getAllSucursales}>
          Mostrar sucursales
        </Button>
        
      </div>
    );
  }
}


export default Sucursales;