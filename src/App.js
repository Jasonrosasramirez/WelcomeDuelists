import React, {useState} from "react";

// Importing page files 
import PageTemplate from "./pages/PageTemplate.js";
import Home from './pages/Home.js';

// Importing page components 
import Header from "./components/Header/Header.js";


function App() {
  
  // The return can only export 1 element. You can bundle multiple elements using a cluster
  return ( 
    <displayOnScreen>
      <Header/>
      <Home/>
     
    </displayOnScreen>
    
    )
}



export default App; // I export to the screen. This gets sent to index.js
