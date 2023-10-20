import React, {useState} from 'react';
import Child from './Family/Child'
import ThemeProvider from './ThemeProvider';
import NavBar from './NavBar';
import './App.css';

function App() {

  return (
    <div className="App">
    
  <ThemeProvider>
    <NavBar />
    <Child />
  </ThemeProvider>

   
   
    </div>
  );
}

export default App;
