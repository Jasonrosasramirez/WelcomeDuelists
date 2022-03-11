import React from "react";
import { render } from 'react-dom';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'; // {import something specific}

// import CSS Styles 
import './App.css'

// Importing page files 
import TierListPage from "./pages/TierListPage.js";
//import HomePage from './pages/HomePage.js';
import GOATFormatPage from "./pages/GOATFormatPage.js";

// Importing page components  <Route path = "/PageTemplate" component = {PageTemplate} />
import NavHeader from "./components/NavHeader.js";




function App() {
  
  // The return can only export 1 element. You can bundle multiple elements using a cluster
  return ( 
    <Router>
      <div className = "App">

        <NavHeader />        

        <Routes>
          <Route path = "/" element = {< Home /> } />  
          <Route path = "/TierListPage" element = { <TierListPage/> } />  
          <Route path = "/GOATFormatPage" element = { <GOATFormatPage/> } />

        </Routes>

      </div>

    </Router>        
          
  );
    
}

// The Home Page
const Home = () => (
  <div>
    <h1>This is the built in home Page</h1>

  </div>

);


export default App; // I export to the screen. This gets sent to index.js