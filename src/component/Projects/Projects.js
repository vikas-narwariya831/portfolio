import Header from "../Header/Header";
import './Projects.css'
import Project1 from '../Assest/Project1.png'
import project2 from '../Assest/project2.png'
import project3 from "../Assest/Project3.png"
import project4 from "../Assest/project4.png"
import project5 from "../Assest/project5.png"
import project6 from "../Assest/project6.png"

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
    <figure class="card">
        <img src={project5} alt=""/>
        <figcaption><div className="Box1"><h2 >Razor pay </h2></div>
        
      <a href="https://razorpayfrontendclone.netlify.app/">  <div className="Button1">        <h3>Live Preview</h3></div></a>
   
</figcaption>
    </figure>
    
    <figure class="card">
        <img src={project2} alt=""/>
        <figcaption><div className="Box1"><h2 >My Gallery</h2></div>
        
      <a href="https://vikas-narwariya831.github.io/Gallery/">  <div className="Button1">        <h3>Live Preview </h3>
</div></a></figcaption>
    </figure>
    
    <figure class="card">
        <img src={project3} alt=""/>
        <figcaption><div className="Box1"><h2 >Tic Toc Toe</h2></div>
        
       <a href="https://vikas-narwariya831.github.io/Tic-Toe-Game/"> <div className="Button1"> <h3>Live Preview</h3>
</div></a></figcaption>
    </figure>
    
    
    <figure class="card">
        <img src={project4} alt=""/>
        <figcaption><div className="Box1"><h2 >Modern Chair</h2></div>
        
      <a href="https://vikas-narwariya831.github.io/Modern-Chair/">  <div className="Button1">        <h3>Live Preview </h3>
</div> </a></figcaption>
    </figure>
    
    <figure class="card">
        <img src={project6} alt=""/>
        <figcaption><div className="Box1"><h2 >Plan With Love</h2></div>
        
    <a href="https://planswithlove.netlify.app/">    <div className="Button1">        <h3>Live Preview </h3>
</div></a></figcaption>
    </figure>
    
    <figure class="card">
        <img src={Project1} alt=""/>
        <figcaption><div className="Box1"><h2 >Big Basket</h2></div>
        
        <div className="Button1">        <h3>Live Preview </h3>
</div></figcaption>
    </figure>
    
    
    
    
    
    
    </div>
    
    
        </div>
    </div>



    )
}

export default Projects;
