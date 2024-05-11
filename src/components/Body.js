import RestaurantCard, { withVegLabel } from "./RestaurantCard";
import { useState, useEffect, useContext } from "react";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
import UserContext from "../utils/UserContext";

const Body = () => {
  // State Variable - Super Powerfull Variable - for that we use Hooks
  const [listOfRestaurants, setListOfRestaurants] = useState([]);
  const [searchText, setSearchText] = useState("");
  const [filteredListOfRestaurants, setFilteredListOfRestaurants] = useState(
    []
  );
  const RestaurantCardVeg = withVegLabel(RestaurantCard);

  // Use Effect Hook
  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch(
      "https://corsproxy.io/?https://www.swiggy.com/dapi/restaurants/list/v5?lat=26.8541536&lng=80.94478269999999&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
    );
    const json = await data.json();
    // Optional Chaining
    setListOfRestaurants(
      json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
    setFilteredListOfRestaurants(
      json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
  };

  const onlineStatus = useOnlineStatus();
  if (onlineStatus === false)
    return (
      <h1>
        {" "}
        Looks like you are offline, please check your internet connection and
        try again! 💙{" "}
      </h1>
    );
  const { setUserName, loggedInUser } = useContext(UserContext);
  return listOfRestaurants.length === 0 ? (
    <Shimmer />
  ) : (
    <div className="body">
      <div className="filter flex items-center">
        <div className="search m-4 p-2">
          <input
            data-testid="searchInput"
            type="text"
            className="search-box border border-solid border-gray-200 p-2 focus:outline-none focus:border-gray-400 rounded-xl"
            value={searchText}
            onChange={(e) => {
              setSearchText(e.target.value);
            }}
          ></input>
          <button
            className="search-button bg-green-200 px-4 py-2 m-2 rounded-lg border-gray-300 border border-solid focus:border-gray-400"
            onClick={() => {
              //filter the restaurant cards and update the UI
              //searchText
              const filteredRestaurant = listOfRestaurants.filter(
                (restaurant) =>
                  restaurant.info.name
                    .toLowerCase()
                    .includes(searchText.toLowerCase())
              );
              setFilteredListOfRestaurants(filteredRestaurant);
            }}
          >
            Search
          </button>
        </div>
        <div>
          <button
            className="filter-btn px-4 py-2 bg-gray-200 rounded-lg"
            onClick={() => {
              const filteredList = filteredListOfRestaurants.filter(
                (res) => res.info.avgRating > 4.3
              );
              setFilteredListOfRestaurants(filteredList);
            }}
          >
            Top Rated Restaurants{" "}
          </button>
          <input
            className="filter-btn px-4 py-2 bg-gray-200 rounded-lg mx-2"
            value={loggedInUser}
            onChange={(e) => {
              setUserName(e.target.value);
            }}
          ></input>
        </div>
      </div>
      <div className="res-container flex flex-wrap justify-around">
        {filteredListOfRestaurants.map((restaurant) => (
          <Link
            to={"/restaurants/" + restaurant.info.id}
            key={restaurant.info.id}
          >
            {" "}
            {restaurant.info.veg ? (
              <RestaurantCardVeg resData={restaurant} />
            ) : (
              <RestaurantCard resData={restaurant} />
            )}
          </Link> //* KEY IS IMPORTANT
        ))}
      </div>
    </div>
  );
};
export default Body;
