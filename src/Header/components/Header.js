import React, {useEffect} from 'react'
import "./Header.scss";
import "bootstrap/dist/css/bootstrap.min.css";
import homelogo from "../../assets/img/homelogo.png";
import SobreMi from "./SobreMi/SobreMi";
import {Button, Modal, ModalHeader, ModalBody, ModalFooter} from "reactstrap";
import linkedinlogo from "../../assets/img/linkedinlogo.png";
import githublogo from "../../assets/img/githublogo.png";
import facebooklogo from "../../assets/img/faceboologo.png";
import instagramlogo from "../../assets/img/instagramlogo.png";
import Aos from "aos";
import "aos/dist/aos.css";
import BackgroundElements from "./BackgroundElements/BackgroundElements";


class Header extends React.Component{
  state={
    abierto: false,
}


abrirModal=() =>{
    this.setState({abierto: !this.state.abierto});
}

refreshPage() {
  window.location.reload(false);
}

useEffect = () => {
    Aos.init({duration: 3000});
  }

    render(){
    return (
      <div className="bg">
       
     

          <Modal  modalTransition={{ timeout: 400 }}
        backdropTransition={{ timeout: 0   }}
        isOpen={this.state.abierto} className="md">
                <ModalHeader>
                    
                    <h2 style={{color: "#faa42d", fontFamily:"Forturn", fontSize:"60px"}} className="titulomodal">Sobre Mi </h2>
                    <h4 style={{color: "#24232e", fontFamily:"Calm", fontSize:"12px"}} className="textomodal">Programador Front-end</h4>
                    
                    <div className="outer">
                        <div className="inner">

                           <button className="buttonclose" onClick={this.abrirModal}> <label>Átras</label> </button>
                        </div>
                    </div>

                </ModalHeader>
                <ModalBody className="mbd">
                    <p>¡Hola! Gracias por pasarte por mi <span style={{color: "#faa42d", fontFamily:"Montserrat", fontSize:"15px"}}>  Portafolio, </span>  mi nombre es Agustin Policano, tengo 19 años y soy oriundo de <span style={{color: "#faa42d", fontFamily:"Montserrat", fontSize:"15px"}}> Argentina. </span> <br></br>
                    Empecé a <span style={{color: "#faa42d", fontFamily:"Montserrat", fontSize:"15px"}}>programar </span> por primera vez de manera autodidacta <span style={{color: "#faa42d", fontFamily:"Montserrat", fontSize:"15px"}}>(HTML y CSS)</span> hace alrededor de unos 2 años, siento que cada linea de codigo 
                    escrita en el editor es parte de todo un circuito al que yo y seguro miles de personas mas, consideramos <span style={{color: "#faa42d", fontFamily:"Montserrat", fontSize:"15px"}}> arte.</span> <br></br>
                    Actualmente sigo intentando mejorar dia a dia en <span style={{color: "#faa42d", fontFamily:"Montserrat", fontSize:"15px"}}>React-JS</span> desempeñandome como <span style={{color: "#faa42d", fontFamily:"Montserrat", fontSize:"15px"}}>Programador Front-end autodidacta.</span> <br></br>
                    PD: Busco trabajo estable ;)
                    </p>
                </ModalBody>

                <ModalFooter>
                  
                   <a href="https://www.linkedin.com/in/agustin-policano/"> <img src={linkedinlogo} alt="Linkedin Logo" className="linkedin" /> </a> 
                   <a href="https://github.com/AgustinPolicano"><img src={githublogo} alt="GitHub Logo" className="git"/></a>
                   <a href="https://www.facebook.com/agustin.policano/"><img src={facebooklogo} alt="Facebook Logo" className="facebook"/></a>
                   <a href="https://www.instagram.com/agustin_poli/"><img src={instagramlogo} alt="Instagram Logo" className="instagram"/></a>
 
                </ModalFooter>
            </Modal>

<div className="">
               
            </div>
<div class="container text-center">
    <div>

        <div class="title">
            <span class="block"></span>
            <h1 style={{color:"#eeeeee"}}>Agustin Policano<span></span></h1>
        </div>

        <div class="role">
            <div class="block"></div>
            <p style={{color:"#eeeeee"}}>Programador Front-end</p>
        </div>
          <SobreMi/>
    </div>
    
</div>



                
             
               <div data-aos="fade-up" data-aos-delay="2500"  data-aos-duration="3000" className="contenedor">
  <div className="content">
  <p className="flechastxt" style={{color: "#eeeeee", fontFamily:"Hemi", fontSize:"20px"}}>Proyectos</p>
    <svg id="more-arrows">
      <a href="https://en.wikipedia.org/wiki/Arrow">
      <polygon className="arrow-top" points="37.6,27.9 1.8,1.3 3.3,0 37.6,25.3 71.9,0 73.7,1.3 "/>
     <polygon className="arrow-middle" points="37.6,45.8 0.8,18.7 4.4,16.4 37.6,41.2 71.2,16.4 74.5,18.7 "/> 
      <polygon className="arrow-bottom" points="37.6,64 0,36.1 5.1,32.8 37.6,56.8 70.4,32.8 75.5,36.1 "/>
      </a>
    </svg>
  </div>
</div>
            

            </div>
    
)
}
}

export default Header;
