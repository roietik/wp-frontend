import React, {Component, Fragment} from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom'
import './App.scss';
import CarAudio from './components/CarAudio';
import CarAudioPage from './components/CarAudioPage';


export class App extends Component {
  render() {
    return (
      <Router>
      <Fragment>
        <h2 class="title">Wordpress Docker React Axios React Router</h2>
        <Route exact path="/" component={CarAudio}/>
        <Route exact path="/car-audio/:id" component={CarAudioPage}/>
 
      </Fragment>
    </Router>
    )
  }
}

export default App;
