import React from "react";
import { render } from 'react-dom';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'; // {import something specific}

// import CSS Styles 
import './App.css'

// Importing page files 
import BanListPage from "./pages/BanListPage.js";
import HomePage from './pages/HomePage.js';
import FormatGalleryPage from "./pages/FormatGalleryPage.js";

// Importing page components  <Route path = "/PageTemplate" component = {PageTemplate} />
import NavHeader from "./components/NavHeader.js";


function App() {
  
  // The return can only export 1 element. You can bundle multiple elements using a cluster
  return ( 
    <Router>
      <div className = "App">

        <NavHeader />        

        <Routes>
          <Route path = "/" exact element = { < HomePage /> } />  
          <Route path = "/BanListPage" element = { < BanListPage /> } />  
          <Route path = "/FormatGalleryPage" element = { < FormatGalleryPage /> } />

        </Routes>

      </div>

    </Router>        
          
  );
    
}

export default App; // I export to the screen. This gets sent to index.js
// without exporting the APP, nothing gets displayed on screen. 
