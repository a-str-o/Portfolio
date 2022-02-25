import React, { Component } from 'react';
import { BrowserRouter as Router,Routes, Route } from 'react-router-dom';
import Home from './pages/home';
import About from './pages/about';
import Contact from './pages/contact';
import Navbar from './component/navbar/Navbar';
import './App.css';

class App extends Component {
  render() {
    return (
    <div className="App-container"> 
      <Router>
        <Navbar /> 
        <Routes>
          <Route exact path='/' element={< Home />}></Route>
          <Route exact path='/about' element={< About />}></Route>
          <Route exact path='/contact' element={< Contact />}></Route>
        </Routes>
    </Router>
    </div>
        
 );  
}
}

export default App;