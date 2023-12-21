import Navbar from './components/navbar.js'
import Carousel from './components/carouselIndex.js'
import Signup from './signup/signin-button.js';
import Contact from './navbarComponents/Contact-button.js';
import About from './navbarComponents/About-button.js';
import './CSS/Carousel.css'
export default function App(){
    return(
        <>
        <div className='heading-colum'>
            <Navbar/>
            <Signup/>
        </div>
        <div className='nav-colum'>
            <About/>
            <Contact/>
        </div>
        <div >
            {/* className='left-home' */}
            <Carousel/>
        </div>
        <footer></footer>
        </>
    )
}