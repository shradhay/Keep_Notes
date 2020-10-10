import React from 'react'
import "./Home.css"
import GitHubIcon from '@material-ui/icons/GitHub';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import Aboutus from './Aboutus';

function Home() {
    return (
        <>
        <div className="home">
            <header className="home_bg">
                <div className="home_info">
                    <h1>I'm Shraddha Yannawar</h1>
                     <span className="home_info_p">I love coding because with just a few lines of code
                          I can turn my ideas into reality which potencially can impact
                          the world and shape the future.
                     </span>
                     <div className="home_icon">
                           <a href="https://github.com/shradhay"><GitHubIcon/></a>
                            <a href=""><LinkedInIcon/></a>
                     </div>
                     

                </div>

            </header>

        </div>
        
        
        </>
    )
}

export default Home
