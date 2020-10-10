import React from 'react'
import Home from "./Home"
import "./Aboutus.css"
import img from "./images/itsme.jpg"
import Avatar from '@material-ui/core/Avatar';
import LinearProgress from '@material-ui/core/LinearProgress';
import HTML from "./images/html.png"
import CSS from "./images/css.png"
import JS from "./images/JS.png"
import reactimg from "./images/Recatimg.png"

function Aboutus() {
    return (
       <>
       <Home/>
       <div  className="about_main">
        
         
       <div className="aboutus">
             <div className="aboutus_image">
               
                <img className="aboutus_image" src={img}/>
             </div>
             <div className="aboutus_infor">
               <div className="aboutus_abouts">
                 <h1>Aboutme</h1>
                 <p>My name is shraddha yannawar.I am self taught React js .Actively looking for job
                 opportunity in React js Developer.
                 </p>

               </div>
               <div className="aboutus_education">
                 <h1>Education</h1>
                 <p>
                 Bachelor's Degree (2018) in Computer Science from MGM's Jawaharlal Nehru Engineering College Aurangabad Maharashtra.
                 </p>

               </div>
                 
             </div>
         </div>
         <h1 className="about_main_heading">Skill</h1>
          <div className="skill">
            <div className="skill_sub">
             


                <div className="skill_sub_bar">
              <Avatar className="skill_logo" alt="Remy Sharp" src={reactimg} />
              <LinearProgress className="bar" variant="determinate" value={40} />
              </div> 

             <div className="skill_sub_bar">
              <Avatar className="skill_logo" alt="Remy Sharp" src={JS} />
              <LinearProgress className="bar" variant="determinate" value={70} />
              </div>

              <div className="skill_sub_bar">
              <Avatar className="skill_logo" alt="Remy Sharp" src={CSS} />
              <LinearProgress className="bar" variant="determinate" value={80} />
              </div>

              <div className="skill_sub_bar">
              <Avatar className="skill_logo" alt="Remy Sharp" src={HTML} />
              <LinearProgress className="bar" variant="determinate" value={90} />
              </div> 
              
            
           
             </div>

          </div>
       </div>
       
        
       </>
    )
}

export default Aboutus
