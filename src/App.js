import './App.css';
import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom';

import About from './components/About';
import Blog from './components/Blog';
import Home from './components/Home';
import NavBar from './components/NavBar/NavBar';
import Projects from './components/Projects';
import CV from './components/CV';
import {PAGES} from './constants';

function App(){
    return(
      <div className='App'>
      <Router>
        <div className='banner-container'>
          <div className='hero-title'>Michael Lee</div>
          <NavBar />
        </div>
        <Switch>
          <Route exact path='/' component={Home} />
          <Route path='/about' component={About} />
          <Route path='/blog' component={Blog} />
          <Route path='/cv' component={CV} />
          <Route path='/projects' component={Projects} />
          {PAGES.map((page) => (<Route key={page.name} path={page.link}>{page.component}</Route>))}
        </Switch>
      </Router>
      </div>
    );
}

export default App;