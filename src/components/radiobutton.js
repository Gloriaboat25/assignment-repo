

function Radiobutton(props){

    return(
        < form >
        <p>Please select your gender:</p>
        <input type="radio" id="male" name="gender" value="male"></input>
        <label for="male">Male</label><br></br>
        <input type="radio" id="female" name="gender" value="female"></input>
        <label for="female">Female</label><br></br>
        
        </  form>
    )
}
export default Radiobutton;