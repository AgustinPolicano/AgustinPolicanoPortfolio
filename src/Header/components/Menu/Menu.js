import React from 'react'
import { Nav, Navbar } from "react-bootstrap"
import { Link, animateScroll as scroll } from "react-scroll";


function Menu() {
    return (
        <div>
               <div data-aos="fade-down" className="">
               <Navbar collapseOnSelect expand="lg" variant="dark" >
      <Navbar.Toggle aria-controls="responsive-navbar-nav"/>
      <Navbar.Collapse id="responsive-navbar-nav">
        <Nav className="">
            
          <Link  onClick={this.refreshPage}><h8>Home &nbsp;&nbsp;&nbsp;&nbsp;</h8></Link>
          <Link style={{ color: '#eeeeee', fontFamily:"Neon" }} 
           activeClass="active"
           to="exchange"
           spy={true}
           smooth={true}
           offset={-70}
           duration={1300}
          ><h8>Portafolio &nbsp;&nbsp;&nbsp;&nbsp;</h8></Link>

          <Link style={{ color: '#eeeeee', fontFamily:"Neon" }} 
           activeClass="active"
           to="ubicacion"
           spy={true}
           smooth={true}
           offset={-70}
           duration={1300}><h8>Habilidades &nbsp;&nbsp;&nbsp;&nbsp;</h8></Link>
          <Link style={{ color: '#eeeeee', fontFamily:"Neon" }} 
           activeClass="active"
           to="exchange"
           spy={true}
           smooth={true}
           offset={-70}
           duration={1300}><h8>Sobre mi &nbsp;&nbsp;&nbsp;&nbsp;</h8></Link>
          <Link style={{ color: '#eeeeee', fontFamily:"Neon" }} 
           activeClass="active"
           to="faq"
           spy={true}
           smooth={true}
           offset={-70}
           duration={1300}><h8>Contacto</h8></Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
             

          </div>
        </div>
    )
}

export default Menu
