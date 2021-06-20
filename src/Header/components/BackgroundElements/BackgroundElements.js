import React, {useEffect} from 'react'
import lunaneon from "../../../assets/img/lunaneon.png";
import trianguloneon from "../../../assets/img/trianguloneon.png";
import estrellaneon from "../../../assets/img/estrellaneon.png";
import cerezaneon from "../../../assets/img/cerezalogo.png";
import docneon from "../../../assets/img/docneon.png";
import "./BackgroundElements.scss";
import neonlogo from "../../../assets/img/neonlogo.png";
import rayologo from "../../../assets/img/rayologo.png";
import joistycklogo from "../../../assets/img/joistycklogo.png";
import Aos from "aos";
import "aos/dist/aos.css";


const BackgroundElements = () => {
    useEffect(() =>{
        Aos.init({duration: 5000});
    }, []);
    
    return (
        <div data-aos="fade-left" data-aos-delay="3000" >
          
             <img src={estrellaneon} alt="" className="cuadrado"/>
            <img src={cerezaneon} alt="" className="cereza"/>  
             <img src={trianguloneon} alt="" className="triangulo"/>
             <img src={rayologo} alt="" className="rayo"/>
             <img src={joistycklogo} alt="" className="joistyck"/>
             <img src={estrellaneon} alt="" className="cuadrado1"/>
            <img src={cerezaneon} alt="" className="cereza1"/>  
             <img src={trianguloneon} alt="" className="triangulo1"/>
             <img src={rayologo} alt="" className="rayo1"/>
             <img src={joistycklogo} alt="" className="joistyck1"/>
             <img src={estrellaneon} alt="" className="cuadrado2"/>
            <img src={cerezaneon} alt="" className="cereza2"/>  
             <img src={trianguloneon} alt="" className="triangulo2"/>
             <img src={rayologo} alt="" className="rayo2"/>
             <img src={joistycklogo} alt="" className="joistyck2"/>
             <img src={estrellaneon} alt="" className="cuadrado3"/>
            <img src={cerezaneon} alt="" className="cereza3"/>  
             <img src={trianguloneon} alt="" className="triangulo3"/>
             <img src={rayologo} alt="" className="rayo3"/>
             <img src={joistycklogo} alt="" className="joistyck3"/>
             <img src={estrellaneon} alt="" className="cuadrado4"/>
            <img src={cerezaneon} alt="" className="cereza4"/>  
             <img src={trianguloneon} alt="" className="triangulo4"/>
             <img src={rayologo} alt="" className="rayo4"/>
             <img src={joistycklogo} alt="" className="joistyck4"/>
      
             </div>
            
 
    )
}

export default BackgroundElements;