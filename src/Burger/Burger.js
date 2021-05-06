import React from 'react'
import { useState , useEffect } from 'react'
import { useHistory } from "react-router-dom"
import './Burger.css'
import Navbar from '../landingpage/Navbar'
import lett from "../assets/lett.png"
import toma from "../assets/toma.png"
import mean from "../assets/meat.png"
    



 function Burger (){
    const [lettuce, setLettuce] = useState("")
    const [tomato, setTomato] = useState("")
    const [cheese, setCheese] = useState("")
    const [mayonnaise, setMayonnaise] = useState("")
    const[meat, setMeat]=  useState("")
    
    let history = useHistory()
  
     useEffect(() =>{
         console.log('whenever we change state render')
     })
     useEffect(() =>{
        console.log('when we load our page for the first time ')
    },[])
    const submitmayonnaise = (e)=>{
        setMayonnaise(mayonnaise + 1)
        e.preventDefault()
    }
    const  removemayonnaise = (e)=> {
        setMayonnaise(mayonnaise - 1)
        e.preventDefault()


    }
      
    const submitcheese = (e)=>{
        setCheese (cheese + 1)
        e.preventDefault()
    }

       
    const removecheese = (e)=>{
        setCheese (cheese - 1)
        e.preventDefault()
    }
       
    

    function submittomato(e){
        setTomato (tomato + 1)
        e.preventDefault()
    }
    const removetomato = (e) => {
        setTomato (tomato - 1)  
        e.preventDefault()


    }
        
    function submitmeat(e){
        setMeat (meat + 1)
         e.preventDefault()
    }
    const removemeat = (e) =>{
        setMeat (meat - 1)  
        e.preventDefault()

    }  
    function submitlettuce(e){
        setLettuce (lettuce + 1)
        e.preventDefault()
    }
    const removelettuce = (e) =>{
        setLettuce (lettuce - 1)  
        e.preventDefault()

    }  

    const cancel = () =>{
        
    }
  
 
function goToPage(path){
    history.push(path)
}







return(
    <div className="new">
        <Navbar/>
        <div className="BurgerIngredients">

            <div>
            <div className="breadTop"></div>
            <div><img src={lett}/></div>
            <div><img src={toma}/></div>
            <div><img src={mean}/></div>

            <div className="breadDown"></div>
            </div>
        </div>
        <div className="Block">
            <p> Lettuce </p>
            <div className="ingrBtns">
            <button onClick={submitlettuce}className="ingrBtn">Add</button>
            <button onClick={removelettuce}className="ingrBtn">Remove</button>
            </div>

            <p>Tomato</p>
            <div className="ingrBtns">
            <button onClick={submittomato}className="ingrBtn">Add</button>
            <button onClick={removetomato}className="ingrBtn">Remove</button>
            </div>

            <p>Cheese</p>
            <div className="ingrBtns">
            <button onClick={submitcheese}className="ingrBtn">Add</button>
            <button onClick={removecheese}className="ingrBtn">Remove</button>
            </div>
            <p>Mayonnaise</p>
            <div className="ingrBtns">
            <button onClick={submitmayonnaise}className="ingrBtn">Add</button>
            <button onClick={removemayonnaise}className="ingrBtn">Remove</button>
            </div>

            <p>Meat</p>
            <div className="ingrBtns">
            <button onClick={submitmeat}className="ingrBtn">Add</button>
            <button onClick={removemeat}className="ingrBtn">Remove</button>
            </div>
            <div>
            <button className="style" onClick={() => goToPage('/contact')}>Process Order</button>
            <button className="style" onClick={cancel}>Cancel</button> 
            </div>


        </div>
       

    </div>
       
)
}
export default Burger;
