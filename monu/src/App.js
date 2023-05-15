import React from "react";
import {
  BrowserRouter as Router,
  Routes as Switch,
  Route,
} from "react-router-dom";


import './App.css';
import { Contact } from './comeponants/Contact';
import { Home } from './comeponants/Home';
import TopNav from './comeponants/TopNav';
import {News} from './comeponants/News';
import {About} from './comeponants/About';




function App() {
  return (
    <Router>
    <div className="App">
    <TopNav></TopNav>
    
    <Switch>
          <Route path="/contact" element={<Contact/>}>
            
          </Route>
          <Route path="/home" element={<Home/>}>
            
          </Route>
          <Route path="/about" element={<About/>}>
            
          </Route>
          <Route path="/news" element={<News/>}>
          </Route>
        </Switch>

    
    {/* <Home></Home>
    <Contact></Contact> */}
    
    </div>
    </Router>
  );
}

export default App;
