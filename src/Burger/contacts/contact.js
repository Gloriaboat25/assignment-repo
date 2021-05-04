import React from 'react'
import { useState } from "react"
import { useHistory } from "react-router-dom"
import Inputfield from "./inputfield"
import './inputfield.css';
import Button from "./button"
function Contact() {


    const history = useHistory()
    const[values,setvalues] = useState({})

    const onchange =(e) =>{
        setvalues({...values,[e.target.name]: e.target.values})
    }

    function submit(e){
        e.preventDefault()
    }




    return (
        <div className="wrapper">
            
            <div className="form-wrapper">

            <form className="form-group" >
                <h1>Enter your contact information</h1>
                <Inputfield type="text" label="Name:" name="name" placeholder="e.g. Akua Pokuaah" onchange={onchange}/>
                <Inputfield type="text" label="Location:" name="location" placeholder="e.g. Ahodow" onchange={onchange}/>
                <Inputfield type="text" label="Street:" name="street" placeholder="e.g. Anthony Yeboah's street" onchange={onchange}/>
                <Inputfield type="text" label="GPS Adress:" name="GPS" placeholder="" onchange={onchange}/>
                <Inputfield type="email" label="Email:" name="email" placeholder="e.g. kofi@gmail.com" onchange={onchange}/>
                <Inputfield type="number" label="Phone number:" name="phone number"  onchange={onchange}/>
                

                <div>
                    <Button text="Confirm Order" classname="butt" onclick={submit}/>
                </div>

               

            </form>
            </div>
           
        </div>
    )
}

export default Contact