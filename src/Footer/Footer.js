import React, {useEffect} from 'react'
import "./Footer.scss";
import Aos from "aos";
import "aos/dist/aos.css";

const Footer = () => {
    useEffect(() =>{
        Aos.init({duration: 3000});
    }, []);
    return (
        <div className="bgfooter">
           <a style={{color: "white"}}>Twitter</a>
        </div>
    )
}

export default Footer
