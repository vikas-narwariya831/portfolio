import "./Header.css"

import { useNavigate } from "react-router-dom";
import * as React from 'react';



function Header( ){

  const navigate=useNavigate();
  const projectClick =()=>{
    navigate('/projects');

  };

  const skillsClick=()=>{
    navigate('/skills');
  }
  const homeClick=()=>{
    navigate('/')
  }

  
  
return(
     <div className="Menu-Container">
    <div className="Main-Heading">
        
    
    <h2 className="Navbar home"  onClick={homeClick} >Home </h2>

        <h2 className="Navbar projects " onClick={projectClick} >Projects </h2>

        <h2 className="Navbar skills" onClick={skillsClick}>Skills </h2>

        <h2 className="Navbar about" >About </h2>
        </div>
        

   
    
    </div>
)



}

export default Header;