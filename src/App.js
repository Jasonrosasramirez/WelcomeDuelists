import React from "react";
import { render } from 'react-dom';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'; // {import something specific}

// import CSS Styles 
import './App.css'

// Importing page files 
import HomePage from './pages/HomePage.js';
import ShopPage from './pages/ShopPage.js';
import EventsPage from './pages/EventsPage.js';
import ContactsPage from "./pages/ContactPage";

// Importing page components  <Route path = "/PageTemplate" component = {PageTemplate} />
import NavLinks from "./components/NavLinks.js";


function App() {
  
  // The return can only export 1 element. You can bundle multiple elements using a cluster
  return ( 
    <Router>
      <div className = "App">

        <NavLinks />        
        <Routes>
          <Route path = "/" exact element = { < HomePage /> } />  
          <Route path = "/ShopPage" element = { < ShopPage /> } />
          <Route path = "/EventsPage" element = { < EventsPage /> } />
          <Route path = "/ContactsPage" element = { < ContactsPage /> } />
        </Routes>

      </div>

    </Router>        
          
  );
    
}

export default App; // I export to the screen. This gets sent to index.js
// without exporting the APP, nothing gets displayed on screen. 
