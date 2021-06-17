import React from 'react'
import Navbar from './components/Navbar'
import Sidebar from './components/Sidebar'
import { BrowserRouter as Router, Route} from 'react-router-dom'

import './App.scss';

import Home from './pages/Home'
import Empleados from './pages/Empleados'
import Sucursales from './pages/Sucursales'
import Usuarios from './pages/Usuarios';



export const App = () => {
  return (
    <Router>
      <Navbar/>
      <div className="flex">
        <Sidebar />
        <div className="content">
          <Route path="/" exact={true} component={Home}/>
          <Route path="/empleados" exact={true} component={Empleados}/>
          <Route path="/Sucursales" exact={true} component={Sucursales}/>
          <Route path="/Usuarios" exact={true} component={Usuarios}/>
        </div>
      </div>
    </Router>
  )
}

export default App;