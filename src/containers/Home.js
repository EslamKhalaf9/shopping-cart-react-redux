import React, { Component } from "react";

import { connect } from "react-redux";
import ItemCard from "../components/ItemCard";
import { actions } from "../store";

class Home extends Component {
  render() {
    const { items, addItemToCart, updateTotalPrice } = this.props;
    return (
      <div className="mt-32 md:grid grid-flow-col gap-4 p-5 justify-center">
        {items.map((item) => (
          <ItemCard
            key={item.id}
            item={item}
            addItemToCart={addItemToCart}
            updateTotalPrice={updateTotalPrice}
          />
        ))}
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    items: state.items,
    categories: state.categories,
  };
}

function mapActionstoProps(dispatch) {
  return {
    addItemToCart(item) {
      dispatch(actions.addItemToCart(item));
    },
    updateTotalPrice() {
      dispatch(actions.updateTotalPrice());
    },
  };
}

export default connect(mapStateToProps, mapActionstoProps)(Home);
