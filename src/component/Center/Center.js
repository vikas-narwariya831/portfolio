import "./center.css"
import Frontend from "../Assest/Frontend.png"
import Button from '@mui/material/Button';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import {Bio} from "../data/Data"
import Typewriter from 'typewriter-effect';
import { Span,TextLoop } from "./styles";
import { useNavigate } from "react-router-dom";


function Center(){
    const navigate=useNavigate()
    const projectClick =()=>{
      navigate('/projects');
  
    };

    return(

        <div className="container"> 
        <div className="Content" >
            <div className="Content-Name">      <h1> I'm Vikas Narwariya</h1></div>

        <TextLoop>
                            I am a
                            <Span>
                                <Typewriter
                                    options={{
                                        strings: Bio.roles,
                                        autoStart: true,
                                        loop: true,
                                    }}
                                />
                            </Span>
                            </TextLoop>
           <div className="Sub-Title">
            {Bio.description}
           </div>
           <div className="buttons">
        <Button variant="contained" onClick={projectClick}>Projects</Button>
  <a href={Bio.resume}>   <Button className="Contact-me" variant="contained"> Resume </Button></a>
        </div>
           <div className="Socials">
   <a href={Bio.github}>  <span className="Github-Socials icon" > <GitHubIcon className="GitHubIcon " />  GitHub</span></a>
  <a href={Bio.linkedin}>   <span className="LinkdIn-Socials icon"><LinkedInIcon className="LinkedInIcon"/>LinkedIn </span></a>
        </div>
       
        </div>
     
       
       

        <div>
            
        </div>
        <div className="Image-Container" >
            <img src={Frontend} alt="" />
        </div>
          


        </div>
    )
}

export default Center;