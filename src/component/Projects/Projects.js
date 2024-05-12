import Header from "../Header/Header";
import './Projects.css'

import { projects } from "../data/Data";

function Projects (){
    return(
        <div className="wrapper">
         <div className="Project-Header">   <Header/> </div>
            <div className="Project-Heading">
            <h1>Projects</h1>
            </div>
            <div className="Line">

            </div>

           
        <div class="Project-container">
    <div class="Projects-Set">

        {projects.map((pro)=>(
    <figure class="card">
        <img src={pro.image} alt=""/>
        <figcaption><div className="Box1"><h2 >{pro.title}</h2></div>
        
      <a href={pro.webapp}>  <div className="Button1">        <h3>{pro?.text}</h3></div></a>
   
</figcaption>
    </figure>
))}
    
   
    </div>
    
    
        </div>
    </div>



    )
}

export default Projects;
