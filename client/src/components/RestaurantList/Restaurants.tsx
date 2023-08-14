import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Restaurant from '../Restaurant/Restaurant';
import './Restaurants.css';

function Restaurants() {
    const [restaurants, setRestaurants] = useState<any[]>([]);

    useEffect(() => {
        // Make an API call to fetch the list of restaurants
        axios.get('http://localhost:3001/api/restaurant/get') // Replace with your actual API endpoint
            .then(response => {
                setRestaurants(response.data); // Update the restaurants state
            })
            .catch(error => {
                console.error('Error fetching restaurants:', error);
            });
    }, []); // The empty array [] ensures that the effect runs only once, similar to componentDidMount

    return (
        <div className="restaurants">
            {restaurants.map(restaurant => (
                <Restaurant
                    key={restaurant._id} // Make sure each restaurant has a unique id
                    name={restaurant.name}
                    description={restaurant.description}
                    id={restaurant._id}
                    onClick={() => {
                        // Handle click on restaurant card
                    }}
                />
            ))}
        </div>
    );
}

export default Restaurants;
