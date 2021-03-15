

function Navbar(props){

    return(
        < nav
        style={{backgroundColor :props.color}}>
           {props.text}
        </  nav>
    )
}
export default Navbar;