import React from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import { Home, Register } from './views'
import Container from '@material-ui/core/Container';
import {Header} from './components'
import './App.css';

function App() {
  return (
    <Router>
      <div className="app">
        <Header />
        <Container>
          <div className="main">
            <Route path='/' exact component={Home} />
            <Route path='/register' exact component={Register} />
          </div>
        </Container>
      </div>
    </Router>
  );
}

export default App;
