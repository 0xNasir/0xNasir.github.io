import React, { Component } from 'react';
import Navbar from './components/navbar'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import Home from './components/home'
import Contact from './components/contact'
import About from './components/about'
import Rain from './components/rainbow'
import Post from './components/post'
import './index.css'

class App extends Component {
  render() {
    return (
    <BrowserRouter>
      <div className="App">
        <Navbar />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/about" component={About} />
          <Route path="/contact" component={Contact} />
          <Route path="/rainbow" component={Rain} />
          <Route path="/:post_id" component={Post}/>
        </Switch>
      </div>
    </BrowserRouter>
    );
  }
}

export default App;
