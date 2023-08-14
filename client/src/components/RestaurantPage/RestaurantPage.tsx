import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './RestaurantPage.css';
import Product from '../Product/Product';

interface RestaurantData {
    name: string;
    description: string;
    menu: string[];
}

const RestaurantPage: React.FC = () => {
    const [restaurantData, setRestaurantData] = useState<RestaurantData | null>(null);
    const restaurantId = window.location.pathname.split('/').pop();

    useEffect(() => {
        axios.get(`http://localhost:3001/api/restaurant/get/${restaurantId}`) // Replace with your actual API endpoint
            .then(response => {
                setRestaurantData(response.data);
            })
            .catch(error => {
                console.error('Error fetching restaurant data:', error);
            });
    }, [restaurantId]);

    if (!restaurantData) {
        return <div>Loading...</div>;
    }

    return (
        <div className="restaurant-page">
            <h2 className="restaurant-name">{restaurantData.name}</h2>
            <p className="restaurant-description">{restaurantData.description}</p>
            <h3>Menu</h3>
            <ul className="menu-list">
                {restaurantData.menu.map(item => (
                    <Product productId={item}></Product>
                ))}
            </ul>
        </div>
    );
};

export default RestaurantPage;