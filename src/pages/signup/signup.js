


function Signup(){


    return(
        <form>
            <div className="form-group">
                <label>Username</label>
                <input type="text" className="form-group"/>
            </div>

            <div className="form-group">
                <label>Email</label>
                <input type="email" className="form-group"/>
            </div>

            <div className="form-group">
                <label>Password</label>
                <input type="password" className="form-group"/>
            </div>

            <div className="form-group">
                <label>ConfirmedPassword</label>
                <input type="password" className="form-group"/>
            </div>
            <button>Signup</button>
        </form>
    )
}

export default Signup;
