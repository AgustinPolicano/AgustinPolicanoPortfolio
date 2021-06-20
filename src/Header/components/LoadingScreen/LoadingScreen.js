import React from 'react'
import gifloading from "../../../assets/img/animation_500_kn2ouhji.gif";
import gifloading1 from "../../../assets/img/loading2.gif";
import "./LoadingScreen.scss";

function LoadingScreen() {
    return (
        <div>
        <div className="bgloading text-center">
            <img src={gifloading} alt="" className="loading"/>
           <h4 style={{color: "#faa42d"}} className="loadingtext"> Cargando</h4>
           <img src={gifloading1} alt="" className="loadingpuntos"/>
        </div>
      
        </div>
    )

}

export default LoadingScreen
