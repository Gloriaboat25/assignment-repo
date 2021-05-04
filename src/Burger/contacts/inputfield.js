import React from 'react'

function Inputfield(props) {
    return (
        <div>
            <label>{props.label}</label>
            <input
            type={props.type}
            placeholder={props.placeholder}
            name={props.name}
            onChange={props.onchange}
            className="form-control"/>
        </div>
    )
}

export default Inputfield
