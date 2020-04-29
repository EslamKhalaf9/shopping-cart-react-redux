import React from "react";

function CartItem({
  item,
  changeCartItemCount,
  updateTotalPrice,
  removeItemFromCart,
}) {
  return (
    <tr key={item.id} className="border my-2">
      <td className="w-2/5">{item.itemTitle}</td>
      <td>
        <input
          className="w-2/3"
          type="number"
          value={item.count}
          min="1"
          max="5"
          onChange={(e) => {
            changeCartItemCount(item, e.target.value);
            updateTotalPrice();
          }}
        />
      </td>
      <td>{item.price}</td>
      <td className="w-1/5 text-center">
        <button
          className="text-red-600"
          onClick={() => {
            removeItemFromCart(item);
            updateTotalPrice();
          }}
        >
          x
        </button>
      </td>
    </tr>
  );
}

export default CartItem;
