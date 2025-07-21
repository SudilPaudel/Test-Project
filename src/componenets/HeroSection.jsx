import { Link } from "react-router-dom"
import "../nav.css"
const HeroSection =()=>{
    return(
        <>
        <section class className = "hero" id ="hero">
            <div className="hero-overlay">
                <div className="hero-content">
                    <h2>
                        Welcome to Hotel Timu
                    </h2>
                    <p>
                        Experience well built room
                    </p>
                    <Link to="/rooms" className="hero-button">Book Now</Link>
                </div>
            </div>
        </section>
        </>
    )
  
} 
  export default HeroSection