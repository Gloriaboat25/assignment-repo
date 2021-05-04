import React from 'react'
import './Inputfieldsign.css'


function Button(props) {
    return (

        <button className={props.classname} onClick={props.onclick}>
        {props.text}
    </button>
      
            
        
    )
}

export default Button
