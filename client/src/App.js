import React from 'react'
import { StyleSheet, Text, Viev } from "react-native";
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Navbar from './components/Navbar'
import Home from './pages/Home'
import About from './pages/About'
import './App.css';
import { render } from 'react-dom';

export default class App extends React.Component {

  constructor(progs) {
    super(progs);
    this.state = { isLoading : true };
  }

}

componentDidMount() ;{
  return fetch()
    .then((response) => response.json()) 
    .then((responseJson) => {
      this.setState({
      isLoading : false,
      message : responseJson.message
    })
  })

}



  

 render(); {  
   return (
     <View style ={styles.container}>
     <Text>Open up App.js to start working on yout app!</Text>
     </View>
     );
   }
  
  
 const styles = StyleSheet.create({
   container: {
     flex: 1,
     backgroundColor: 'afff',
     alignItems: 'conter',
     justifyContent: 'conter',

   },
 });


// var myIcon = L.icon({
//   iconUrl: '',
//   iconSize: [25, 41],
//   iconAnchor: [12.5, 41],
//   popupAnchor: [0, -41]
// })
function App() {

  return (

    <Router>
      <Navbar />
      <Switch>
        <Route exact path='/' component={Home} />
        <Route exact path='/about'>
          <About />
        </Route>
      </Switch>
    </Router>

  );
}


export default App