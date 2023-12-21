import {Link} from "react-router-dom"
export default function AboutPage(){
    return (
        <Link to="/About">
            <div className='button-about'>
                About
            </div>
        </Link>
    )
}