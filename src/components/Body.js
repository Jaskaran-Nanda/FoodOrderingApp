import RestaurantCard from "./RestaurantCard";
import { useState, useEffect } from "react";
import Shimmer from "./Shimmer";
const Body = () => {
  // State Variable - Super Powerfull Variable - for that we use Hooks
  const [listOfRestaurants, setListOfRestaurants] = useState([]);

  // Use Effect Hook
  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch(
      "https://corsproxy.io/?https://www.swiggy.com/dapi/restaurants/list/v5?lat=26.8541536&lng=80.94478269999999&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
    );
    const json = await data.json();
    console.log(json);
    // Optional Chaining
    setListOfRestaurants(
      json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
  };
  //
  /* if (listOfRestaurants.length === 0) {
    return <h1>Loading.....</h1>;
  } */
  if (listOfRestaurants.length === 0) {
    return <Shimmer />;
  }
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
