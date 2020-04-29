import React, { Component } from "react";
import { connect } from "react-redux";
import { actions } from "../store";
class Cart extends Component {
  render() {
    const { items, totalPrice } = this.props.cart;
    return (
      <div className="w-3/5 mx-auto bg-white border shadow-md p-2 my-10 mt-32">
        <h2 className="text-center text-4xl my-6">Cart</h2>
        <table className="w-full">
          <tbody>
            <tr className="text-left">
              <th>Title</th>
              <th>Count</th>
              <th>Price</th>
              <th className="text-center">X</th>
            </tr>
            {items.map((item) => (
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
                      this.props.changeCartItemCount(item, e.target.value);
                      this.props.updateTotalPrice();
                    }}
                  />
                </td>
                <td>{item.price}</td>
                <td className="w-1/5 text-center">
                  <button
                    className="text-red-600"
                    onClick={() => {
                      this.props.removeItemFromCart(item);
                      this.props.updateTotalPrice();
                    }}
                  >
                    x
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        <p className="mt-5">Total Price: {totalPrice}</p>
      </div>
    );
  }
}

// cart: {
//   items: [{ itemTitle: "Towers Case", count: 2,      price: 1500 }],
//   totalPrice: 3000,
// },

function mapStateToProps(state) {
  return {
    cart: state.cart,
  };
}

function mapActionsToProps(dispatch) {
  return {
    removeItemFromCart(id) {
      dispatch(actions.removeItemFromCart(id));
    },
    updateTotalPrice() {
      dispatch(actions.updateTotalPrice());
    },
    changeCartItemCount(item, count) {
      dispatch(actions.changeCartItemCount(item, count));
    },
  };
}

export default connect(mapStateToProps, mapActionsToProps)(Cart);
