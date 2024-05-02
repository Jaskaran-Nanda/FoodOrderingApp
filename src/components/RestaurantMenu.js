import Shimmer from "./Shimmer";
import { CDN_URL } from "../utils/constants";
import { useParams } from "react-router-dom";
import useRestaurantMenu from "../utils/useRestaurantMenu";

const RestaurantMenu = () => {
  const { resId } = useParams();
  const resInfo = useRestaurantMenu(resId);

  if (resInfo === null) return <Shimmer />;
  const { name, cuisines, costForTwoMessage, avgRating } =
    resInfo?.cards[2]?.card?.card?.info;

  const { itemCards } =
    resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card;
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
