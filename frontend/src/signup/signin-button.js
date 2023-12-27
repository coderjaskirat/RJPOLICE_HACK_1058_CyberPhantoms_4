import {Link} from "react-router-dom"
export default function Signup(){
    return (
        <Link to="/SignIn" className="remove-underline">
            <div className='button-signup'>
                SignIn
            </div>
        </Link>
    )
}