import { CDN_URL } from "../utils/constants";

const RestaurantCard = (props) => {
  const { resData } = props;
  const { cloudinaryImageId, name, avgRating, costForTwo, cuisines } =
    resData?.info;
  const { slaString } = resData?.info.sla;
  return (
    <div className={"res-cards"}>
      <img
        alt="res-logo"
        src={CDN_URL + cloudinaryImageId}
        className="res-logo"
      />
      <h3>{name}</h3>
      <h4>{cuisines.join(", ")}</h4>
      <h4>{avgRating}</h4>
      <h4>{costForTwo}</h4>
      <h4 className="time">{slaString}</h4>
    </div>
  );
};
export default RestaurantCard;
