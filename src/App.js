import React, { Component } from 'react';
import { BrowserRouter, Route} from 'react-router-dom';
import './App.css';
import Header from './components/Header';
import List from './components/List';

class App extends Component {

  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <header>
            <Header/>
          </header>
          <Route path="/" component={ List }/>          
        </div>      
      </BrowserRouter>

    );
  }
}

export default App;
