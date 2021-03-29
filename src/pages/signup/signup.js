
import { Link } from 'react-router-dom'
import { useAppContext } from '../../store/context';

function Signup(){
    const { state, dispatch, brandname } = useAppContext();
    console.log(state);


    return(
        
        <div style={{backgroundColor:'white', alignItems:'center',justifyContent:'center',display:'flex',height:'100vh', } }> 
                    <h1>{brandname}</h1>
                    <form style={{backgroundColor:'pink', height:'300px', width: '250px', margin: 0, padding: 0, display:'flex',flexDirection:'column',alignItems:'center',justifyContent:'center', boxShadow:'2px -2px 2px 2px black', borderRadius:'20px' }}> 
            <div className="form-group" style={{margin:'10px',padding:'10px' ,}}>
                {/* <label>Username</label> */}
                <input type="text" className="form-group" placeholder="Username"/>
            </div>

            <div className="form-group">
                {/* <label>Email</label> */}
                <input type="email" className="form-group" placeholder="Email"/>
            </div>

            <div className="form-group">
                {/* <label>Password</label> */}
                <input type="password" className="form-group" placeholder="Password"/>
            </div>

            <div className="form-group">
                {/* <label>ConfirmedPassword</label> */}
                <input type="password" className="form-group" placeholder="ConfirmedPassword"/>
            </div>
            <button>Signup</button>
            <Link to="/">Already have an account?</Link>
        </form>
        </div>

    )
}

export default Signup;
