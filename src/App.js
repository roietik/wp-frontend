import React, {Component, Fragment} from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom'
import './App.scss';
import CarAudio from './components/car-audio/CarAudio';
import CarAudioPage from './components/car-audio/CarAudioPage';
import AutoDetailing from './components/auto-detailing/AutoDetailing';
import AutoDetailingPage from './components/auto-detailing/AutoDetailingPage';


export class App extends Component {
  render() {
    return (
      <Router>
      <Fragment>
        <h2 className="title">Wordpress Docker React Axios React Router</h2>
        <Route exact path="/" component={CarAudio}/>
        <Route exact path="/car-audio/:id" component={CarAudioPage}/>
        <Route exact path="/" component={AutoDetailing}/>
        <Route exact path="/auto-detailing/:id" component={AutoDetailingPage}/>
 
      </Fragment>
    </Router>
    )
  }
}

export default App;
