import React from 'react'
import Home from "./Home"
import Aboutus from "./Aboutus"
import Work from "./Work"
import ContactUs from "./ContactUs"

import "../node_modules/bootstrap/dist/css/bootstrap.min.css"


import "./App.css"
import {Switch,Route,Redirect} from "react-router-dom"
import NavBar from "./NavBar"

const App=()=>{
  return(
    <>
    <NavBar/>
    
    <Switch>
      <Route exact path="/" component={Home}/>
      <Route exact path="/about" component={Aboutus}/>
      <Route exact path="/work" component={Work}/>
      <Route exact path="/contactus" component={ContactUs}/>
      <Redirect to="/"/>
    </Switch>
    </>
  )
}
export default App