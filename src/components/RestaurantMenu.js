import { useState, useEffect } from "react";
import Shimmer from "./Shimmer";
import { CDN_URL } from "../utils/constants";
import { useParams } from "react-router-dom";
import { MENU_URL, MENU_URL_END } from "../utils/constants";
const RestaurantMenu = () => {
  const [resInfo, setResInfo] = useState(null);
  const { resId } = useParams();

  useEffect(() => {
    fetchMenu();
  }, []);

  const fetchMenu = async () => {
    const data = await fetch(MENU_URL + resId);
    const json = await data.json();
    console.log(json);
    setResInfo(json.data);
  };
  console.log(resInfo);

  if (resInfo === null) return <Shimmer />;
  const { name, cuisines, costForTwoMessage, avgRating } =
    resInfo?.cards[2]?.card?.card?.info ?? 0;

  const { itemCards } =
    resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card
      ?.card ?? 0;
  console.log(itemCards);
  return (
    <div className="menu">
      <h1>{name}</h1>
      <h3>
        {cuisines.join(", ")} - {costForTwoMessage}
      </h3>
      <h3>{avgRating}⭐ </h3>
      <h2>Menu</h2>
      <ul>
        {itemCards.map((item) => (
          <div key={item.card.info.id}>
            <img
              alt="res-logo"
              src={CDN_URL + item.card.info.imageId}
              className="res-logo"
            />
            <h2>{item.card.info.name}</h2>
            <h4>{item.card.info.description}</h4>
            <h4>
              {item.card.info.defaultPrice / 100 || item.card.info.price / 100}{" "}
              ₹
            </h4>
          </div>
        ))}
      </ul>
    </div>
  );
};
export default RestaurantMenu;
