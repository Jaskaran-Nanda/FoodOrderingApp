import UserContext from "../utils/UserContext";
import { CDN_URL } from "../utils/constants";
import { useContext } from "react";
const RestaurantCard = (props) => {
  const { resData } = props;
  const { cloudinaryImageId, name, avgRating, costForTwo, cuisines } =
    resData?.info;
  const data = useContext(UserContext);
  const { slaString } = resData?.info.sla;
  return (
    <div className="w-[250px] h-[380px] flex-col m-4 border-gray-200 border-solid border rounded-lg justify-around ">
      <img
        alt="res-logo"
        src={CDN_URL + cloudinaryImageId}
        className="res-logo h-[140px] object-cover w-[250px] rounded-b-none rounded-t-md"
      />
      <h3 className="m-2 font-semibold text-xl pt-2 pb-2 ">{name}</h3>
      <h4 className="m-2">{cuisines.join(", ")}</h4>
      <h4 className="m-2">{avgRating}</h4>
      <h4 className="m-2">{costForTwo}</h4>
      <h4 className="m-2">{slaString}</h4>
      <h4 className="m-2">{data.loggedInUser}</h4>
    </div>
  );
};
//Higher order component which will enhance restaurant card with veg tag
// input - restaurantCard =>> output - restaurantCardVeg
export const withVegLabel = (RestaurantCard) => {
  return (props) => {
    return (
      <div>
        <label className="absolute bg-green-600 text-white m-2 ml-4 mt-0 p-2 px-4 rounded-br-lg rounded-tl-lg shadow-green-700 shadow-sm">
          Veg
        </label>
        <RestaurantCard {...props} />
      </div>
    );
  };
};
export default RestaurantCard;
