import Restaurant from '../Restaurant/Restaurant';
import './Restaurants.css'

function Restaurants() {
    return (
        <div className="Restaurants">
            <div className="heading"><b>Restaurants</b></div>
            <div className="restaurants">
                <Restaurant name="Restaurant 1" description="Description 1" onClick={() => {}}></Restaurant>
            </div>
        </div>
    );
}

export default Restaurants;