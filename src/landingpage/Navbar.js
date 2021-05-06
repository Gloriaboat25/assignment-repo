import React from 'react'
import { useHistory } from "react-router-dom"
import { useState } from "react"
import './Inputfieldsign.css'
import logo from "../assets/logo2.png"


function Navbar() {

    let history = useHistory()
    
    function goToPage(path){
        history.push(path)
    }

    const [showLinks,setShowLinks ] = useState(false)




    return (
        <div className="Navbar">
            
            <div className="leftSide">
                <div className="mac" id={showLinks ? "hidden" :""}> 
                <a href="/home">Home</a>
                <a href="/feedback">Feedback</a>
                <a href="/aboutus">About Us</a>
                <a href="/contact">Contact</a>
                
                </div>
                <button>Open</button>

                <div><img src={logo} className="logo"/></div>
            </div>
            <div className="rightSide">
                <input type="text" className="me" placeholder="Search...."/>
                <button className="ch">Search</button>
                 <button className="style1" onClick={() => goToPage('/signup')}>Sign Up</button>

            </div>
           
                

                    
           
            
            
        </div>
    )
}

export default Navbar
