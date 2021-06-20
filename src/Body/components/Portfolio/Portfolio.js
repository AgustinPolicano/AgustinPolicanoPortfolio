import React from 'react'
import "./Portfolio.scss";
import Carrousel from "./Caurrosel";

import arrownaranja from "../../../assets/img/arrownaranja.png";

export default function Portfolio() {
    return (
        <div>
        <div className="text-center">
            <h1 className="txtport" style={{color: "#24232e", fontFamily:"Forturn", fontSize:"60px" }}>Portafolio</h1>
            <h5 className="txtport1" style={{color: "#24232e", fontFamily:"Montserrat" , fontSize:"14px"}}>MIS ÚLTIMOS PROYECTOS</h5>
        </div>
            <Carrousel/>

        </div>

    )
}
