import React, {useState} from "react";

// Importing other pages files 
import PageTemplate from "./pages/PageTemplate.js";
import Home from './pages/Home.js';


function App() {
  
// The return can only export 1 element. You can bundle multiple elements using a cluster
  return ( 
    <displayOnScreen>
      <PageTemplate/>

    </displayOnScreen>
    
    )
}



export default App; // I export to the screen. This gets sent to index.js
