import Shimmer from "./Shimmer";
import { useState } from "react";
import { useParams } from "react-router-dom";
import useRestaurantMenu from "../utils/useRestaurantMenu";
import RestaurantCategory from "./RestaurantCategory";

const RestaurantMenu = () => {
  const { resId } = useParams();
  const resInfo = useRestaurantMenu(resId);
  const [showIndex, setShowIndex] = useState(null);
  if (resInfo === null) return <Shimmer />;
  const { name, cuisines, costForTwoMessage, avgRating } =
    resInfo?.cards[2]?.card?.card?.info;

  const { itemCards } =
    resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card;
  const categories =
    resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter(
      (c) =>
        c.card?.card?.["@type"] ==
        "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
    );
  const nestedCategories =
    resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter(
      (c) =>
        c.card?.card?.["@type"] ==
        "type.googleapis.com/swiggy.presentation.food.v2.NestedItemCategory"
    );
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
      {categories.map((c, index) => (
        //Controlled Component
        <RestaurantCategory
          key={c?.card?.card?.title}
          data={c?.card?.card}
          showItems={index === showIndex && true}
          setShowIndex={() =>
            showIndex === index ? setShowIndex(null) : setShowIndex(index)
          }
        />
      ))}
    </div>
  );
};
export default RestaurantMenu;
