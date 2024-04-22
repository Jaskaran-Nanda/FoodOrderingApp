import RestaurantCard from "./RestaurantCard";
import resList from "../utils/mockData";
import { useState } from "react";

const Body = () => {
  // State Variable - Super Powerfull Variable - for that we use Hooks
  //
  const [listOfRestaurants, setListOfRestaurant] = useState(resList);
  //
  return (
    <div className="body">
      <div className="filter">
        <button
          className="filter-btn"
          onClick={() => {
            const filteredlist = listOfRestaurants.filter(
              (res) => res.info.avgRating > 4.25
            );
            setListOfRestaurant(filteredlist);
            console.log(listOfRestaurants);
          }}
        >
          {" "}
          Top Rated Restaurants{" "}
        </button>
      </div>
      <div className="res-container">
        {listOfRestaurants.map((restaurant) => (
          <RestaurantCard key={restaurant.info.id} resData={restaurant} /> //* KEY IS IMPORTANT
        ))}
      </div>
    </div>
  );
};
export default Body;
