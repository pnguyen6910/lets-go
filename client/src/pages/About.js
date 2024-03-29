import React from 'react'
import "./About.css"

function About() {
    return (
        <div className="container" id="about">
            <p>
                Our application is one of the first of its kind. The application will allow any average joe to be able to explore whichever city they’re in on a bike, and find points of interest and rest stops along the way.  Whether it be a tourist going for a summer bike ride, a commuter who wants to switch up their route home, or a cyclist who wants to change their training route. It allows riders to see and experience new things such as landmarks, art, restaurants/cafes, and little gems of the city/town.
            </p>
            <img className="img-fluid" src="https://cdn.dribbble.com/users/1925451/screenshots/6412378/cyclist2r_copy_4x.jpg?compress=1&resize=1000x750" alt="bicyclist" />
        </div>
    )
}

export default About;