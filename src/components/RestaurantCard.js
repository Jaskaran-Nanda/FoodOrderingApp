import { CDN_URL } from "../utils/constants";

const RestaurantCard = (props) => {
  const { resData } = props;
  const { cloudinaryImageId, name, avgRating, costForTwo, cuisines } =
    resData?.info;
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
    </div>
  );
};
export default RestaurantCard;
