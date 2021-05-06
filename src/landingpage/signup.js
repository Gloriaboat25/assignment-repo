import React from 'react'
import { useState } from 'react'
import { useHistory } from "react-router-dom"
import Inputfield from './Inputfieldsign'
import Button from './buttonsign'
import './Inputfieldsign.css'
import Navbar from './Navbar'


function Signup() {
    
    function submit(e){
        e.preventDefault();
        setIsLoading(true)


    }
    let history = useHistory()
    
    function goToPage(path){
        history.push(path)
    }

    const[values,setvalues] = useState({})
    const[isLoading, setIsLoading] = useState(false)

    const onchange =(e) =>{
        setvalues({...values,[e.target.name]: e.target.values})
    }
    let json_object = JSON.stringify({values})

    fetch('http://localhost:4000/signup',{method:'post',
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
        <div className="maincontainer">
            <Navbar/>

            
            <div className="branch">


               <form className="branch2" >


                    <h1 className="h1">  Create An Account </h1>
                    <Inputfield type="text" label="firstName" name="firstName" placeholder="firstName"  onchange={onchange}/>
                    <Inputfield type="text"label="lastName"  name="lastName" placeholder="lastName" onchange={onchange}/>
                    <Inputfield type="email" label="email" name="email" placeholder="email" onchange={onchange}/>
                    <Inputfield type="password"label="password"  placeholder="password"  onchange={onchange}/>
                    <Inputfield type="password"label="confirmpassword"  placeholder="confimpassword"  onchange={onchange}/>
                
                    <div>
                    <Button text="Signup" classname="buttsign" onclick={submit}/>
                    <p>Already have an account? <a href="" className="buttsign2" onClick={() => goToPage('/login')} >Login In</a></p>
            
                    </div>

               </form>
         </div>
            
        </div>
    )
}

export default Signup
