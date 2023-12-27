import Navbar from './components/Navbar.js'
import Navmenu from './components/Navmenu.js'
import Footer from './components/Footer.js'
import Carousel from './components/carouselIndex.js'
import './CSS/Carousel.css'
import './App.css'
import About from './pages/About.js'
export default function App(){
    return(
        <div className='App'>
        <Navbar />
        <Navmenu />
        {/* <Carousel/> */}
        <About />
        <Footer />
        </div>
    )
}