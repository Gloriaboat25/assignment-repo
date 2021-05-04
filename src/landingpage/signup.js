import React from 'react'
import { useState } from 'react'
import { useHistory } from "react-router-dom"
import Inputfield from './Inputfieldsign'
import Button from './buttonsign'
import './Inputfieldsign.css'


function Signup() {
    
    function submit(e){
        e.preventDefault()
    }
    let history = useHistory()
    
    function goToPage(path){
        history.push(path)
    }

    const[values,setvalues] = useState({})

    const onchange =(e) =>{
        setvalues({...values,[e.target.name]: e.target.values})
    }


    return (
        <div className="maincontainer">

            
            <div className="branch">


               <form className="branch2" >


                    <h1 className="h1">  Create An Account </h1>
                    <Inputfield type="text" label="First Name" name="Firstname" placeholder="Firstname"  onchange={onchange}/>
                    <Inputfield type="text"label="Last Name"  name="Lastname" placeholder="Lastname" onchange={onchange}/>
                    <Inputfield type="email" label="Email" name="Email" placeholder="Email" onchange={onchange}/>
                    <Inputfield type="password"label="Password"  placeholder="Password"  onchange={onchange}/>
                    <Inputfield type="password"label="Confirm Password"  placeholder="Confim Password"  onchange={onchange}/>
                
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
