import React from 'react'
import {NavLink} from "react-router-dom"
import "./NavBar.css"

function NavBar() {
    return (
        
       <div className="navbar">
         <nav className="navbar_link">
          <NavLink className="link" activeclassName="active" exact to="/" >Home</NavLink>
          <NavLink className="link" activeclassName="active" exact to="/about" >Aboutme</NavLink>
          <NavLink className="link"  activeclassName="active" exact to="/work" >Work</NavLink>
          <NavLink className="link" activeclassName="active" exact to="/contactus" >Contactus</NavLink>
          </nav>
        </div>
    )
}

export default NavBar
