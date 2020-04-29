import React from "react";
import { v4 as uuidv4 } from "uuid";

const ItemCard = ({ item, addItemToCart, updateTotalPrice }) => {
  const handleAddClick = () => {
    addItemToCart({
      id: uuidv4(),
      itemTitle: item.title,
      count: 1,
      price: item.price,
      itemID: item.id,
    });
    updateTotalPrice();
  };
  return (
    <div className="item-card w-3/5 mx-auto text-center bg-white border shadow-md rounded my-4 md:w-full md:max-w-xs">
      <img className="w-full" src={item.img} alt="img" />
      <div className="content p-2">
        <h3 className="text-2xl">{item.title}</h3>
        <p className="text-gray-800">{item.description}</p>
        <p className="text-blue-800">{item.price} LE</p>
        {!item.added ? (
          <button
            className="bg-blue-600 text-white rounded p-2 font-bold m-2"
            onClick={handleAddClick}
          >
            Add To Cart
          </button>
        ) : (
          <button
            className="bg-gray-600 text-white rounded p-2 font-bold m-2"
            disabled
          >
            Added to cart
          </button>
        )}
      </div>
    </div>
  );
};

export default ItemCard;
