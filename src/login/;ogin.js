import React, { useState, } from 'react';

import './Login.css'


function Login() {
    const[username, setUsername] = useState('')
    const[email, setEmail] = useState('')
    const[password, setPassword] = useState('')
    const[confirmedpassword, setConfirmedPassword] = useState('')

    
   
    function updateUsername(e){
        setUsername(e.target.value);
    }
    function updateEmail(e){
        setEmail(e.target.value)
    }

    function UpdatePassword(e){
        setPassword(e.target.value)
    }

    function UpdateConfirmedPassword(e){
        setConfirmedPassword(e.target.value)
    }

    
    function signup(e){
        console.log(username)
        console.log(email)
        console.log(password)
        console.log(confirmedpassword)
        e.preventDefault()
    }

    

    

    return(
        <div className="wrapper">
            <div className="left">

            </div>
            <div className="right">
                <h1>Create an Account</h1>
                <form>
        <h1 id="h1"></h1>
        <div className="form-group">
            <label htmlFor="" ><i>Username:</i> </label>
            <input type="text" onChange={updateUsername} className="form-control"/>

        </div>
        <div className="form-group">
            <label htmlFor=""><i>Email:</i> </label>
            <input type="text" onChange={updateEmail} className="form-control"/>
        </div>
        
        <div className="form-group">
            <label htmlFor=""><i>Password:  </i></label>
            <input type="password"  onChange={UpdatePassword} className="form-control" />
        </div>
        <div className="form-group">
            <label htmlFor=""><i>ConfirmedPassword: </i> </label>
            <input type="password" onChange={UpdateConfirmedPassword} className="form-control"/>
        </div>
        <div>
            <button className="login-btn" onClick={signup}>Sign Up</button>
            <p>Already have an account? <a href="" className="style">Sign In</a></p>
            

        </div>
        
        
        </form>
            </div>

       
        </div>
        
    )
}
export default Login