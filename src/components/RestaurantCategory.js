import ItemList from "./ItemList";

const RestaurantCategory = (data) => {
  return (
    <div className="w-10/12 bg-gray-50 shadow-lg p-4 mx-auto my-4">
      <div className="flex justify-between">
        <span className="font-md text-lg">
          {data.data.title} ({data.data.itemCards.length})
        </span>
        <span>↕️</span>
      </div>
      {/* {data.data.itemCards.map(() => ( */}
      <ItemList items={data.data.itemCards} />
      {/* ))} */}
    </div>
  );
};
export default RestaurantCategory;
