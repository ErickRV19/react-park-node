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
    suc12 = [],
    use21=[],
    use22=[],
    use23=[],
    use24=[],
    use25=[],
    use26=[],
    use27=[],
    use28=[],
    use29=[],
    use210=[],
    use31=[],
    use32=[],
    use33=[],
    use34=[],
    use35=[],
    use36=[],
    use37=[],
    use38=[],
    use39=[],
    use310=[];
class Usuarios extends Component {
  state = {
    sucursales: [],
  };

  getUsuariosM1 = async () => {
      let res = await fetch("http://localhost:3004/usuariosM1");
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
  getUsuariosM2 = async () => {
    let res = await fetch("http://localhost:3006/usuariosM2");
    let data = await res.json();
    console.log(data);
    //console.log(data.length);

  for (let i = 0; i < data.length; i++) {
    for (let j = 0; j < data[i].length; j++) {
      console.log(data[i][j]);
      switch (i) {
          case 0:
            use21.push(data[i][j].value);
            break;
            case 1:
              use22.push(data[i][j].value);
            break;
            case 2:
              use23.push(data[i][j].value);
            break;
            case 3:
              use24.push(data[i][j].value);
            break;
            case 4:
              use25.push(data[i][j].value);
            break;
            case 5:
              use26.push(data[i][j].value);
            break;
            case 6:
              use27.push(data[i][j].value);
            break;
            case 7:
              use28.push(data[i][j].value);
            break;
            case 8:
              use29.push(data[i][j].value);
            break;
            case 9:
              use210.push(data[i][j].value);
            break;
         
        }    
    }
  }
  //console.log({suc});
    
  

  this.setState({
    use21,
    use22,
    use23,
    use24,
    use25,
    use26,
    use27,
    use28,
    use29,
    use210,

  });

};

getUsuariosM3 = async () => {
  let res = await fetch("http://localhost:3007/usuariosM3");
  let data = await res.json();
  console.log(data);
  //console.log(data.length);

for (let i = 0; i < data.length; i++) {
  for (let j = 0; j < data[i].length; j++) {
    console.log(data[i][j]);
    switch (i) {
        case 0:
          use31.push(data[i][j].value);
          break;
          case 1:
            use32.push(data[i][j].value);
          break;
          case 2:
            use33.push(data[i][j].value);
          break;
          case 3:
            use34.push(data[i][j].value);
          break;
          case 4:
            use35.push(data[i][j].value);
          break;
          case 5:
            use36.push(data[i][j].value);
          break;
          case 6:
            use37.push(data[i][j].value);
          break;
          case 7:
            use38.push(data[i][j].value);
          break;
          case 8:
            use39.push(data[i][j].value);
          break;
          case 9:
            use310.push(data[i][j].value);
          break;
       
      }    
  }
}
//console.log({suc});
  


this.setState({
  use31,
  use32,
  use33,
  use34,
  use35,
  use36,
  use37,
  use38,
  use39,
  use310,

});

};
  render() {
    //this.state.empleados = this.state;
    return (
      <div className="empleados">
        <h1>Consulta de Usuarios</h1>
          <h2>Consulta desde maquina 1 a maquina 2 y 3</h2>

        <div className="emple">
          <table className="tabla-usuarios">
            <tr>
              <th>Nombre sucursal</th>
            </tr>
            <tr>
              <th>Apellido P</th>
            </tr>
            <tr>
              <th>Apellido M</th>
            </tr>
            <tr>
              <th>Nombres</th>
            </tr>
            <tr>
              <th>Puntos</th>
            </tr>
            <tr>
              <th>Saldo $</th>
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
        <Button variant="contained" color="primary" onClick={this.getUsuariosM1}>
          Consulta desde Maquina 1
        </Button>
        
        <div className="empleados">
        <h2>Consulta desde maquina 2 a maquina 1 y 3</h2>
        <div className="emple">
          <table className="tabla-usuarios">
            <tr>
              <th>Nombre sucursal</th>
            </tr>
            <tr>
              <th>Apellido P</th>
            </tr>
            <tr>
              <th>Apellido M</th>
            </tr>
            <tr>
              <th>Nombres</th>
            </tr>
            <tr>
              <th>Puntos</th>
            </tr>
            <tr>
              <th>Saldo $</th>
            </tr>
            
          </table>
          <div className="sucursal">
            {use21.map((use21) => (
              <div>{use21}</div>
            ))}
          </div>
          <div className="sucursal">
            {use22.map((use22) => (
              <div>{use22}</div>
            ))}
          </div>
          <div className="sucursal">
            {use23.map((use23) => (
              <div>{use23}</div>
            ))}
          </div>
          <div className="sucursal">
            {use24.map((use24) => (
              <div>{use24}</div>
            ))}
          </div>
          <div className="sucursal">
            {use25.map((use25) => (
              <div>{use25}</div>
            ))}
          </div>
          <div className="sucursal">
            {use26.map((use26) => (
              <div>{use26}</div>
            ))}
          </div>
          <div className="sucursal">
            {use27.map((use27) => (
              <div>{use27}</div>
            ))}
          </div>
          <div className="sucursal">
            {use28.map((use28) => (
              <div>{use28}</div>
            ))}
          </div>
          <div className="sucursal">
            {use29.map((use29) => (
              <div>{use29}</div>
            ))}
          </div>
          <div className="sucursal">
            {use210.map((use210) => (
              <div>{use210}</div>
            ))}
          </div>
         
        </div>
        <Button variant="contained" color="primary" onClick={this.getUsuariosM2}>
          Consulta desde Maquina 2
        </Button>
        </div>
        <div className="empleados">
        <h2>Consulta desde maquina 3 a maquina 1 y 2</h2>
        <div className="emple">
          <table className="tabla-usuarios">
            <tr>
              <th>Nombre sucursal</th>
            </tr>
            <tr>
              <th>Apellido P</th>
            </tr>
            <tr>
              <th>Apellido M</th>
            </tr>
            <tr>
              <th>Nombres</th>
            </tr>
            <tr>
              <th>Puntos</th>
            </tr>
            <tr>
              <th>Saldo $</th>
            </tr>
            
          </table>
          <div className="sucursal">
            {use31.map((use31) => (
              <div>{use31}</div>
            ))}
          </div>
          <div className="sucursal">
            {use32.map((use32) => (
              <div>{use32}</div>
            ))}
          </div>
          <div className="sucursal">
            {use33.map((use33) => (
              <div>{use33}</div>
            ))}
          </div>
          <div className="sucursal">
            {use34.map((use34) => (
              <div>{use34}</div>
            ))}
          </div>
          <div className="sucursal">
            {use35.map((use35) => (
              <div>{use35}</div>
            ))}
          </div>
          <div className="sucursal">
            {use36.map((use36) => (
              <div>{use36}</div>
            ))}
          </div>
          <div className="sucursal">
            {use37.map((use37) => (
              <div>{use37}</div>
            ))}
          </div>
          <div className="sucursal">
            {use38.map((use38) => (
              <div>{use38}</div>
            ))}
          </div>
          <div className="sucursal">
            {use39.map((use39) => (
              <div>{use39}</div>
            ))}
          </div>
          <div className="sucursal">
            {use310.map((use310) => (
              <div>{use310}</div>
            ))}
          </div>
         
        </div>
        <Button variant="contained" color="primary" onClick={this.getUsuariosM3}>
          Consulta desde Maquina 3
        </Button>
        </div>
        
      </div>
    );
  }
}


export default Usuarios;



