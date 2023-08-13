import React from 'react';
import './Restaurant.css'; // Import the CSS file for styling

interface RestaurantProps {
  name: string;
  description: string;
  //imageUrl: string;
  onClick: () => void;
}

const Restaurant: React.FC<RestaurantProps> = ({ name, description, onClick }) => {
  return (
    <div className="restaurant-card" onClick={onClick}>
      {/* <img className="restaurant-image" src={imageUrl} alt={`${name} Restaurant`} /> */}
      <h3 className="restaurant-name">{name}</h3>
      <p className="restaurant-description">{description}</p>
    </div>
  );
};

export default Restaurant;