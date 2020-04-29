import React, { Component } from "react";
import { connect } from "react-redux";
import ItemCard from "../components/ItemCard";
import { actions } from "../store";

class Categories extends Component {
  state = {
    display: "monitors",
  };
  render() {
    const { categories, items, addItemToCart, updateTotalPrice } = this.props;
    return (
      <div className="mt-32 text-center">
        <h1 className="text-4xl mb-5">Categories</h1>
        <div className="content">
          <nav className="w-4/5 mx-auto">
            {categories.map((cat) => (
              <button
                key={cat.id}
                className={`cat border bg-white p-2 ${
                  cat.name === this.state.display && "active"
                }`}
                onClick={() => this.setState({ display: cat.name })}
              >
                {cat.name}
              </button>
            ))}
          </nav>
          <div className="items  md:grid grid-flow-col gap-4 p-5 justify-center">
            {items.map(
              (item) =>
                item.category === this.state.display && (
                  <ItemCard
                    key={item.id}
                    item={item}
                    addItemToCart={addItemToCart}
                    updateTotalPrice={updateTotalPrice}
                  />
                )
            )}
          </div>
        </div>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    categories: state.categories,
    items: state.items,
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

export default connect(mapStateToProps, mapActionstoProps)(Categories);
