import React, { Component } from 'react';
import { BrowserRouter, Route} from 'react-router-dom';
import './App.css';
import Header from './components/Header';
import List from './components/List';
import Detail from './components/Detail';

class App extends Component {

  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <header>
            <Header/>
          </header>
          <div className="container">
            <div className="row">
              <div className="col">
                <Route exact path="/" component={ List }/>
                <Route exact path="/:breed" component={ Detail }/>
              </div>  
            </div>    
          </div>                    
        </div>      
      </BrowserRouter>

    );
  }
}

export default App;
