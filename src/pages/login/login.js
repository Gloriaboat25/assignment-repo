function Login(){


    return(
        <form>
            <div className="form-group">
                <label>Username</label>
                <input type="text" className="form-group"/>
            </div>

            <div className="form-group">
                <label>Password</label>
                <input type="password" className="form-group"/>
            </div>
            <button>Submit</button>
        </form>



    )
}

export default Login;