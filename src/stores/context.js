import { createContext, useState } from 'react'

const MyContext = creatcontext();

function MyProvider(props){
    const[cartItem, setCartItem] = useState(0)

    function updateCartItem(){
        let newitem = cartItem + 1
        setCartItem(newitem)
    }
}