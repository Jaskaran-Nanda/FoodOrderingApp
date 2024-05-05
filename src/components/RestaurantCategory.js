import ItemList from "./ItemList";

const RestaurantCategory = ({ data, showItems, setShowIndex }) => {
  handleClick = () => {
    setShowIndex();
  };
  return (
    <div className="w-10/12 bg-gray-50 shadow-lg p-4 mx-auto my-4 rounded-md">
      <div
        className="flex justify-between cursor-pointer"
        onClick={handleClick}
      >
        <span className="font-md text-lg">
          {data.title} ({data.itemCards.length})
        </span>
        <span>↕️</span>
      </div>
      {showItems && <ItemList items={data.itemCards} />}
    </div>
  );
};
export default RestaurantCategory;
