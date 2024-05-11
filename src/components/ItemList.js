import { useDispatch } from "react-redux";
import { addItems } from "../utils/cartSlice";
import { CDN_URL } from "../utils/constants";

const ItemList = (items) => {
  const dispatch = useDispatch();

  const handleAddItem = (item) => {
    // Dispatch an Action
    dispatch(addItems(item));
  };

  return (
    <div>
      {items.items.map((item) => (
        <div
          data-testid="foodItems"
          className="p-2 m-2  border-gray-200 border-b-2 flex justify-between"
          key={item?.card?.info?.id}
        >
          <div>
            <h1 className="font-semibold text-lg">{item?.card?.info?.name} </h1>
            <h2 className="text-md font-md">
              {item?.card?.info?.defaultPrice / 100 ||
                item?.card?.info?.finalPrice / 100 ||
                item?.card?.info?.price / 100}{" "}
              ₹
            </h2>
            <h2 className="text-xs">{item?.card?.info?.description}</h2>
          </div>
          <div>
            <button
              className=" absolute bg-black rounded-md mt-16 ml-8 text-green-500 px-2 bg-opacity-50 font-bold "
              onClick={() => handleAddItem(item)}
            >
              Add +
            </button>
            <img
              src={
                item?.card?.info?.imageId
                  ? CDN_URL + item?.card?.info?.imageId
                  : "../utils/logoipsum-331.svg"
              }
              className="w-32 h-24 object-cover rounded-lg"
            ></img>
          </div>
        </div>
      ))}
    </div>
  );
};
export default ItemList;
