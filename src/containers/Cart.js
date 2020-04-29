import React, { Component } from "react";
import { connect } from "react-redux";
import { actions } from "../store";
import CartItem from "../components/CartItem";
import OrderForm from "../components/OrderForm";
class Cart extends Component {
  state = {
    showForm: false,
  };
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
              <CartItem
                key={item.id}
                item={item}
                removeItemFromCart={this.props.removeItemFromCart}
                updateTotalPrice={this.props.updateTotalPrice}
                changeCartItemCount={this.props.changeCartItemCount}
              />
            ))}
          </tbody>
        </table>
        <p className="mt-5">Total Price: {totalPrice}</p>
        {items.length && !this.state.showForm ? (
          <button
            className="bg-green-600 font-bold text-white rounded p-2 mt-5 block mx-auto"
            onClick={() => this.setState({ showForm: true })}
          >
            Checkout
          </button>
        ) : (
          ""
        )}
        {/* Form */}
        {this.state.showForm ? (
          <OrderForm
            changePersonalInfo={this.props.changePersonalInfo}
            personalInfo={this.props.personalInfo}
          />
        ) : (
          ""
        )}
      </div>
    );
  }
}
function mapStateToProps(state) {
  return {
    cart: state.cart,
    personalInfo: state.personalInfo,
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
    changePersonalInfo(payload) {
      dispatch(actions.changePersonalInfo(payload));
    },
  };
}

export default connect(mapStateToProps, mapActionsToProps)(Cart);
