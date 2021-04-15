import React from 'react'
import { Link } from 'react-router-dom'


const Navbar = () => (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container-fluid">

            <Link to="/" className="navbar-brand" href="#">Home</Link>
            <Link to="/about" className="nav-link" aria-current="page" href="#">About</Link>

        </div>
    </nav>
)

export default Navbar



