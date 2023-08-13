import React from 'react';
import NavBar from './components/NavBar/NavBar';
import Restaurants from './components/RestaurantList/Restaurants';
import './App.css';

function App() {
  return (
    <div className="App">
        <NavBar></NavBar>
        <Restaurants></Restaurants>
    </div>
  );
}

export default App;
