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
      <div className="m-8">
        <h1 className="text-3xl font-bold">{name}</h1>
        <h3 className="text-xl">
          {cuisines.join(", ")} - {costForTwoMessage}
        </h3>
        <h3 className="text-xl">{avgRating}⭐ </h3>
        <h2 className="mt-6 text-3xl">Menu</h2>
      </div>

      <ul>
        {itemCards.map((item) => (
          <div
            key={item.card.info.id}
            className="flex p-8 justify-between w-full"
          >
            <div className="p-4 w-[65%]">
              <h2 className="font-bold">{item.card.info.name}</h2>
              <h4>{item.card.info.description}</h4>
              <h4>
                {item.card.info.defaultPrice / 100 ||
                  item.card.info.price / 100}{" "}
                ₹
              </h4>
            </div>
            <div className="">
              <img
                alt="res-logo"
                src={CDN_URL + item.card.info.imageId}
                className="h-[150px] w-[200px] object-cover"
              />
            </div>
          </div>
        ))}
      </ul>
    </div>
  );
};
export default RestaurantMenu;
