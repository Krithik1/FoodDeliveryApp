import React from 'react';
import NavBar from './components/NavBar/NavBar';
import Restaurants from './components/RestaurantList/Restaurants';
//import Login from './components/Login/Login';
///import RegisterForm from './components/Register/Register';
//import RestaurantPage from './components/RestaurantPage/RestaurantPage';
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
