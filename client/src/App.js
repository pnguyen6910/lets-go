import React from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import About from './pages/About'
import Home from './pages/Home'
import './App.css';



// var myIcon = L.icon({
//   iconUrl: '',
//   iconSize: [25, 41],
//   iconAnchor: [12.5, 41],
//   popupAnchor: [0, -41]
// })
function App() {

  return (
    <div className="container">
      <Router>
        <Navbar />
        <Route exact path='/' component={Home} />
        <Route exact path='/about'>
          <About />
        </Route>
      </Router>
    </div>
  );
}


export default App