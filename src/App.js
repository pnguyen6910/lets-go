import './App.css';
import { Component } from 'react';
import MainDiv from './components/MainDiv';
import axios from 'axios';

class App extends Component {


  // API CALL

  // componentDidMount() {
  //   axios()
  //     .then(res => this.setState (
  //       { 
  //         results: res.data.results,
  //         display: res.data.results 
  //       }))
  //     .catch(err => console.error(err))
  // }

  render() {
    return(
    <MainDiv>
      <p>test</p>
    </MainDiv>
    )
  }
}

export default App;