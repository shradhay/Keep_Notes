import React from 'react'
import Home from './Home'
import WorkCard from './WorkCard'
import "./Work.css"
import amazon from "./images/amazonimg.png"
import corona from "./images/coronatrackerimg.jpg"
import todolist from "./images/todolist.png"



function Work() {
    return (

        <>
        <Home/>
        <div>
            
           
            <div className="work">
                
                <div className="workcard">
                    <WorkCard 
                    image={amazon}
                    title="Aamazon clone"
                    link="https://todo-app-d2e48.web.app"
                   />
                   <WorkCard 
                    image={corona}
                    title="COVID-19 Tracker"
                   />
                    <WorkCard 
                    image={todolist}
                    title="Todo List"
                    link="https://todo-app-d2e48.web.app"
                    
                   />
                   
                    
                    
                    


                </div>

            </div>
            
        </div>
        </>
    )
}

export default Work
