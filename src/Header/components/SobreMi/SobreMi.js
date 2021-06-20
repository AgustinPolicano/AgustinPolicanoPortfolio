import React from "react";
import "./SobreMi.scss";
import {Button, Modal, ModalHeader, ModalBody, ModalFooter} from "reactstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import cruz from "../../../assets/img/cruz.png";
import linkedinlogo from "../../../assets/img/linkedinlogo.png";
import githublogo from "../../../assets/img/githublogo.png";
import facebooklogo from "../../../assets/img/faceboologo.png";
import instagramlogo from "../../../assets/img/instagramlogo.png";
import Aos from "aos";
import "aos/dist/aos.css";
import Menu from "./../Menu/Menu";


class SobreMi extends React.Component{
    state={
        abierto: false,
    }

    abrirModal=() =>{
        this.setState({abierto: !this.state.abierto});
    }

    useEffect = () => {
        Aos.init({duration: 3000});
      }
    render(){
        return(
          <>
                    <div data-aos="fade-left"  data-aos-offset="500" data-aos-delay="2500" data-aos-duration="500"> 
            <Button onClick={this.abrirModal} className="btn1">¿Quien soy?</Button>
                     </div>

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

          </>  
        )
    }


}

export default SobreMi;