import ItemList from "./ItemList";
import { useState } from "react";

const RestaurantCategory = (data) => {
  const [showItems, setShowItems] = useState(false);
  handleClick = () => {
    setShowItems(!showItems);
  };
  return (
    <div className="w-10/12 bg-gray-50 shadow-lg p-4 mx-auto my-4 rounded-md">
      <div
        className="flex justify-between cursor-pointer"
        onClick={handleClick}
      >
        <span className="font-md text-lg">
          {data.data.title} ({data.data.itemCards.length})
        </span>
        <span>↕️</span>
      </div>
      {showItems && <ItemList items={data.data.itemCards} />}
    </div>
  );
};
export default RestaurantCategory;
