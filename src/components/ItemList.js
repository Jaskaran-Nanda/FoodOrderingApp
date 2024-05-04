const ItemList = (items) => {
  console.log(items);
  return (
    <div>
      {items.items.map((item) => (
        <div
          key={item?.card?.info?.id}
          className="p-2 m-2  border-gray-200 border-b-2"
        >
          <h1>
            {item?.card?.info?.name} -{" "}
            {item?.card?.info?.defaultPrice / 100 ||
              item?.card?.info?.finalPrice / 100 ||
              item?.card?.info?.price / 100}{" "}
            ₹
          </h1>
          <h2>{item?.card?.info?.description}</h2>
        </div>
      ))}
    </div>
  );
};
export default ItemList;
