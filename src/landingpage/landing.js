import React from 'react'
import { useHistory } from "react-router-dom"
import './Inputfieldsign.css'


function Landing() {

    let history = useHistory()
    
    function goToPage(path){
        history.push(path)
    }




    return (
        <div className="style3">
            <nav className="style7">
                <div className="style8"> 
                <button className="style1" onClick={() => goToPage('/signup')}>Sign Up</button>

                    </div> 
           
            </nav>
            
        </div>
    )
}

export default Landing
