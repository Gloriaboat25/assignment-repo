function Appliances(){

    let history = useHistory()

    function openShoesPage(){
        history.push('/appliances')
    }

    return(
       <div>
           <p>This is the appliance page</p>
           <p>Items in cart:</p>
           <button>Add this appliance to cart</button>
           <br/>

           <button onClick={openShoePage}>Navigate to shoes section</button>
       </div> 
    )

}