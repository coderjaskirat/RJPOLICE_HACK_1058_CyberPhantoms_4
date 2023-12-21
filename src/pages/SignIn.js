import React from "react"
import {Link} from "react-router-dom"

export default function SignUpForm(){
    const [Formdata, setFormdata] = React.useState({
        Police_Id: "",
        Email: "",
        PassWord: "",
    });
    function handleChange(event){
        setFormdata(prev => {return{
            ...prev, [event.target.name]: event.target.value
        }})
    }

    function handleSubmit(event){
        event.preventDefault()
        console.log(Formdata)
        console.log(Formdata.PassWord===Formdata.ConfirmPassword ? "Password confirmed succesfully": "Password does not match")
    }
    return(
        <form className='form-signup' onSubmit={handleSubmit}>
            <h1 className='signin-text'>SIGN IN</h1>
            <h3 className="form-element">Police_Id</h3>
            <input className="form-element-input" type="text" onChange={handleChange} value={Formdata.Police_Id} id="usersname" name="Police_Id" placeholder='Enter Police_Id'/><br/>
            <h3 className="form-element">Password</h3>
            <input className="form-element-input" type="password" onChange={handleChange} value={Formdata.PassWord} id='pass' name="PassWord" placeholder='Enter Password'/>
            <p>New User?  <Link to="/SignUp">Register</Link></p>
            <Link className="login-button" to="/Index">Login</Link>
        </form>
    )
}