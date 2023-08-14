import React from 'react';
import './Restaurant.css'; // Import the CSS file for styling

interface RestaurantProps {
    name: string;
    description: string;
    id: string;
    //imageUrl: string;
    onClick: () => void;
}

const Restaurant: React.FC<RestaurantProps> = ({ name, description, id, onClick }) => {
    return (
        <div className="restaurant-card" id={id} onClick={onClick}>
            {/* <img className="restaurant-image" src={imageUrl} alt={`${name} Restaurant`} /> */}
            <h3 className="restaurant-card-name">{name}</h3>
            <p className="restaurant-card-description">{description}</p>
        </div>
    );
};

export default Restaurant;