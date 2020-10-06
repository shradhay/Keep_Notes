import React from 'react'
import logo from './images/logo.png';
import "./Header.css"

function Header() {
    return (
        <div className="header">
            <header className="header_info">
            <img src={logo} className="header_logo" alt="logo" />
            <h1 className="header_title">Google Keep Notes</h1>
            </header>
            
        </div>
    )
}

export default Header
