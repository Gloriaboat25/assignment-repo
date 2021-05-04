import React from 'react'
import { useHistory } from "react-router-dom"
import { useState } from 'react'
import Inputfield from './Inputfieldsign'
import Button from './buttonsign'
import './Inputfieldsign.css'

function Login() {

    function submit(e){
        e.preventDefault()
    }

    const[values,setvalues] = useState({})

    const onchange =(e) =>{
        setvalues({...values,[e.target.name]: e.target.values})
    }

    let history = useHistory()
    
    function goToPage(path){
        history.push(path)
    }

    return (
        <div className="mainbran">

            <div className="logbranch">

                <h1>Login</h1>

                 <Inputfield type="email" label="Email" name="Username" placeholder="Username" onchange={onchange}/>
                 <Inputfield type="password" label="Password" placeholder="Password"  onchange={onchange}/>
                 <Inputfield type="password" label="Confirm Password" placeholder="Confim Password"  onchange={onchange}/>
                 <div>
                 <Button text="Login" classname="buttsign"  onclick={() => goToPage('/burger')}/>
                 </div>

            </div>
            
           
                    
            
        </div>
    )
}

export default Login
