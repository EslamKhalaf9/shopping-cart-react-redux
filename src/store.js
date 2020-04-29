const ADD_ITEM_TO_CART = "ADD_ITEM_TO_CART";
const REMOVE_iTEM_FROM_CART = "REMOVE_iTEM_FROM_CART";
const UPADTE_TOTAL_PRICE = "UPADTE_TOTAL_PRICE";
const CHANGE_CART_ITEM_COUNT = "CHANGE_CART_ITEM_COUNT";
const CHANGE_PERSONAI_INFO = "CHANGE_PERSONAI_INFO";

const initialState = {
  items: [
    {
      id: 1,
      title: "monitor",
      img:
        "https://www.lg.com/us/images/monitors/md07000132/gallery/medium01.jpg",
      description: "gaming monitor",
      price: 5000,
      category: "monitors",
      added: false,
    },
    {
      id: 2,
      title: "case",
      img:
        "https://imgaz2.staticbg.com/thumb/large/oaupload/banggood/images/80/BE/771ad77c-8155-4788-8196-12bb54336ed7.jpg",
      description: "Tower Case",
      price: 1500,
      category: "cases",
      added: false,
    },
    {
      id: 3,
      title: "case 2",
      img:
        "https://imgaz2.staticbg.com/thumb/large/oaupload/banggood/images/80/BE/771ad77c-8155-4788-8196-12bb54336ed7.jpg",
      description: "Tower Case",
      price: 1800,
      category: "cases",
      added: false,
    },
  ],
  categories: [
    { id: 1, name: "monitors" },
    { id: 2, name: "cases" },
    { id: 3, name: "keyboards" },
  ],
  cart: {
    items: [],
    totalPrice: 0,
  },
  personalInfo: { name: "", phone: "", city: "", email: "" },
};

export const actions = {
  addItemToCart(item) {
    return {
      type: ADD_ITEM_TO_CART,
      item,
    };
  },
  removeItemFromCart(item) {
    return {
      type: REMOVE_iTEM_FROM_CART,
      item,
    };
  },
  updateTotalPrice() {
    return {
      type: UPADTE_TOTAL_PRICE,
    };
  },
  changeCartItemCount(item, count) {
    return {
      type: CHANGE_CART_ITEM_COUNT,
      item,
      count,
    };
  },
  changePersonalInfo(payload) {
    return {
      type: CHANGE_PERSONAI_INFO,
      payload,
    };
  },
};

export function reducer(state = initialState, action) {
  switch (action.type) {
    case ADD_ITEM_TO_CART: {
      const newItems = state.items.map((item) => {
        if (item.id === action.item.itemID) {
          item.added = true;
        }
        return item;
      });
      return {
        ...state,
        items: newItems,
        cart: {
          ...state.cart,
          items: [...state.cart.items, action.item],
        },
      };
    }
    case REMOVE_iTEM_FROM_CART: {
      const newCartItems = state.cart.items.filter(
        (item) => item.id !== action.item.id
      );
      const newItems = state.items.map((item) => {
        console.log(action.item.itemID);
        if (item.id === action.item.itemID) {
          item.added = false;
        }
        return item;
      });
      return {
        ...state,
        items: newItems,
        cart: {
          ...state.cart,
          items: newCartItems,
        },
      };
    }
    case UPADTE_TOTAL_PRICE: {
      let newTotal = 0;
      state.cart.items.forEach((item) => (newTotal += item.price));
      return {
        ...state,
        cart: {
          ...state.cart,
          totalPrice: newTotal,
        },
      };
    }
    case CHANGE_CART_ITEM_COUNT: {
      let newCartItems = [];
      state.cart.items.forEach((item) => {
        if (item.id === action.item.id) {
          const [target] = state.items.filter(
            (item) => item.id === action.item.itemID
          );

          item.count = action.count;
          item.price = target.price * item.count;
        }
        newCartItems.push(item);
      });
      return {
        ...state,
        cart: {
          ...state.cart,
          items: newCartItems,
        },
      };
    }
    case CHANGE_PERSONAI_INFO: {
      let newInfo = {
        ...state.personalInfo,
        [action.payload.name]: action.payload.value,
      };
      console.log();

      return {
        ...state,
        personalInfo: newInfo,
      };
    }
    default:
      return state;
  }
}
