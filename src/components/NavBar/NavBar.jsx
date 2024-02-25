import React from "react";
import { Link } from "react-router-dom";


import logo from './assets/LOGO.png'
import CartWidget from "../CartWidget/CartWidget";

function NavBar() {
    return (
        <nav className="flex justify-between bg-[#66101F] ">
          <Link to="/"><img className=" text-slate-50 w-36 h-28" src={logo} alt="logo de empresa"/></Link>
          <ul className="flex gap-8 justify-evenly items-center">
            <li><Link className="text-2xl text-slate-50" to="/">Inicio</Link></li>
            <li><Link className="text-2xl text-slate-50" to="/Licores">Licores</Link></li>
            <li><Link className="text-2xl text-slate-50" to="/Licores/Cervezas">Cervezas</Link></li>
            <li><Link className="text-2xl text-slate-50" to="/Licores/Vinos">Vinos</Link></li>
            <li><Link className="text-2xl text-slate-50" to="/Licores/Vodka">Vodka</Link></li>
            <li><CartWidget/></li>
          </ul>


        </nav>

    )
}

export default NavBar 