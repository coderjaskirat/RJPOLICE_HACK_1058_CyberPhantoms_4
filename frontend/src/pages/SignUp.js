import React from "react"
import {Link} from "react-router-dom"

export default function SignUpForm(){
    const [Formdata, setFormdata] = React.useState({
        FirstName: "",
        LastName: "",
        Email: "",
        MobileNo: '' ,
        PassWord: "",
        ConfirmPassword: "",
        AadharNo: ''
    });
    function handleChange(event){
        if (event.target.name === 'MobileNo' || event.target.name === 'AadharNo') {
            const numericValue = event.target.value.replace(/\D/g, '');
            setFormdata((prev => {return{
            ...prev, [event.target.name]: numericValue
            }}));
        }
        else{
            setFormdata(prev => {return{
                ...prev, [event.target.name]: event.target.value
            }})
        }
    }

    function handleSubmit(event){
        event.preventDefault()
        console.log(Formdata)
        console.log(Formdata.PassWord===Formdata.ConfirmPassword ? "Password confirmed succesfully": "Password does not match")
    }
    return(
        <form className='form-signup' onSubmit={handleSubmit}>
            <h1 className='signin-text'>SIGN UP</h1>
            <div className="flex">
                <div>
                    <h3 className="form-element">FIRST NAME</h3>
                    <input className="form-element-input" type="text" onChange={handleChange} value={Formdata.FirstName} id="firstname" name="firstname" placeholder=''/><br/>
                </div>
                <div>
                    <h3 className="form-element">LAST NAME</h3>
                    <input className="form-element-input" type="text" onChange={handleChange} value={Formdata.LastName} id="lastname" name="lastname" placeholder=''/><br/>
                </div>
            </div>
            <h3 className="form-element">EMAIL ID</h3>
            <input className="form-element-input" type="email" onChange={handleChange} value={Formdata.Email} id="email" name="Email" placeholder=''/><br/>
            <h3 className="form-element">PASSWORD</h3>
            <input className="form-element-input" type="password" onChange={handleChange} value={Formdata.PassWord} id='pass' name="PassWord" placeholder=''/>
            <h3 className="form-element">CONFIRM PASSWORD</h3>
            <input className="form-element-input" type="password" onChange={handleChange} value={Formdata.ConfirmPassword} id='pass' name="ConfirmPassword" placeholder=''/>
            <h3 className="form-element">MOBILE NUMBER</h3>
            <input className="form-element-input" type="tel" onChange={handleChange} value={Formdata.MobileNo} id="MobileNo" name="MobileNo" placeholder=''/><br/>
            <h3 className="form-element">AADHAR NUMBER</h3>
            <input className="form-element-input" type="tel" onChange={handleChange} value={Formdata.AadharNo} id="AadharNo" name="AadharNo" placeholder=''/><br/>
            <p>Already a member?  <Link to="/">Log In</Link></p>
            <Link className="login-button" to="/Index">CREATE ACCOUNT</Link>
        </form>
    )
}