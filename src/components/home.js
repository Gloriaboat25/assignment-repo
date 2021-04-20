import Button from '../components/button'
import Navbar from '../components/navbar'
import Checkbox from '../components/checkbox'
import Select from '../components/select'
import Radiobutton from '../components/radiobutton'
import Testarea from '../components/testarea'
import Typography from '../components/typography'


function Home(){

    return(
        <div>
           
            <Navbar text="Whizzy Academy" color="#1e88e5"/>
            <h1>My First Components</h1>
            <Button text="Clear" color="#228b22"/>
            <Button text="Login" color="#1e88e5"/>
            <Button text="Cancel" color="#880e4f"/>
            <Button text="Submit" color="#003300"/>
            <Checkbox/>
            <Select/>
            <Radiobutton/>
            <Testarea text="This is my school"/>
            <Typography text="This is my school"/>
            

            

        </div>
    )
}
export default Home;

