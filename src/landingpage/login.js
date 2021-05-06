import React from 'react'
import { useHistory } from "react-router-dom"
import { useState } from 'react'
import Inputfield from './Inputfieldsign'
import Button from './buttonsign'
import './Inputfieldsign.css'
import Navbar from './Navbar'

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
    let json_object = JSON.stringify({values})

    fetch('http://localhost:4000/login',{method:'post',
        // body: JSON.stringify({username: user_name, password: pass_word}),
        body:json_object,
        headers: {
         "Content-Type": "application/json"
        }
    
    })
    .then(response =>response.json())
    .then(data => {
        console.log(data);
    })

    return (
        <div className="mainbran">
            {/* <Navbar/> */}
         <div className="bu">
            <div>
                <div className="logbranch">

                 <h1>Login</h1>

                 <Inputfield type="email" label="email" name="username" placeholder="username" onchange={onchange}/>
                 <Inputfield type="password" label="password" placeholder="password"  onchange={onchange}/>
                 <Inputfield type="password" label="confirmpassword" placeholder="confimpassword"  onchange={onchange}/>
                 <div>

                      <Button text="Login" classname="bu"  onclick={() => goToPage('/burger')}/>
                 </div>

                </div>

            </div>

         </div>
            

            
            
           
                    
            
        </div>
    )
}

export default Login
