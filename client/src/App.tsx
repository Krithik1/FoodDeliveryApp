import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Restaurants from './components/RestaurantList/Restaurants';
import Login from './components/Login/Login';
import RegisterForm from './components/Register/Register';
import RestaurantPage from './components/RestaurantPage/RestaurantPage';
import './App.css';
import Layout from './Layout';

function App() {
    return (
        <Routes>
            <Route path="/" element={<Layout />}>
                <Route path="/" element={<Restaurants />} />
                <Route path="/login" element={<Login />} />
                <Route path="/register" element={<RegisterForm />} />
                <Route path="/restaurant/:restaurantId" element={<RestaurantPage />} />
            </Route>
        </Routes>
    );
}

export default App;
