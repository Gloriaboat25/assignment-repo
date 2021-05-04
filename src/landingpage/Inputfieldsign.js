import React from 'react'
import './Inputfieldsign.css'

function Inputfield(props) {
    return (
        <div>
             <label htmlFor="lastName">{props.label}</label>
            <input
            type={props.type}
            placeholder={props.placeholder}
            name={props.name}
            onChange={props.onchange}
            className="myinputfields"/>
        </div>
    )
}

export default Inputfield
