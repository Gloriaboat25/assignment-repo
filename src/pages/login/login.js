import { useState } from 'react';

import { useHistory } from 'react-router-dom';
import { useAppContext } from '../../store/context'
import myimage from '../../images/form2.jpg'


import './login.css'


function Login(){
    let  history   = useHistory()

    const { state, dispatch, brandname } = useAppContext()

    console.log(state)

    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const [message, setMessage] = useState('')
    const[isLoading, setIsLoading] = useState(false)
    
    // console.log(history);

    

    function goToPage(path){
        history.push(path)

    }

    function updateUsername(e){
        setUsername(e.target.value)
    }

    function updatePassword(e){
        setPassword(e.target.value)
    }

    function submit(e){
        e.preventDefault();
        setIsLoading(true)

        if (username == 'allen' && password == 'test'){
            // implement go to dasboard here
            goToPage('/dasboard')
        } else {
            // stay on login page
            setMessage("wrong username or password")
            // setIsLoading(false)

        }
    }


    // function goToSignupPage(){
    //     history.push('/signup')
    // }
    


    return(
        <div className="wrapper" >
            <div className="formwrapper">
            <form>
            <div>
            <img className="pic" src={myimage} alt="picture" />
                 </div>
            {message && <h1 style={{color:"red"}}>{message}</h1>}
            {isLoading && <div>loading...</div>}
            <div className="form-group">
                <label>Username</label>
                <input type="text" onChange={updateUsername} className="form-group"/>
            </div>

            <div className="form-group">
                <label>Password</label>
                <input type="password" onChange={updatePassword} className="form-group"/>
            </div>
            <button onClick={submit} className="button">Submit</button>
            <button className="button" onClick={() => goToPage('/signup')}>Signup</button>
        </form>

            </div>
        </div>
        
        


    )
}

export default Login;