import React from 'react'
import { Link } from 'react-router-dom'

const styles = {
    logo: {
        width: 50,
        height: 50
    }
}


const Navbar = () => (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container-fluid">

            <Link to="/" className="navbar-brand" href="#">Home</Link>

            <img style={styles.logo} className="img-fluid" src="https://i.pinimg.com/236x/89/88/20/8988206fcd258e0c65be8e5dcf90b7fb--ride-a-bike-bike-rides.jpg" alt="logo" id="logo"></img>

            <Link to="/about" className="nav-link" aria-current="page" href="#">About</Link>

        </div>
    </nav>
)

export default Navbar



