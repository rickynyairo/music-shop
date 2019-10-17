import {
  ADD_TO_CART,
  REMOVE_ITEM,
  GET_CART_ID
} from "../actions/action-types/cart-actions";
import { GET_SONGS, GET_ALBUMS } from "../actions/action-types/home-actions";

const initState = {
  albums: [],
  songs: [],
  addedItems: [],
  cart_id: "",
  total: 0
};
export default (state = initState, action) => {
  switch (action.type) {
    case ADD_TO_CART:
      let addedItem = state.albums.find(album => album.id === action.id);
      addedItem.quantity = 1;
      return {
        ...state,
        addedItems: [...state.addedItems, addedItem],
        total: state.total + addedItem.price
      };
    case REMOVE_ITEM:
      let itemToRemove = state.addedItems.find(album => action.id === album.id);
      let new_items = state.addedItems.filter(album => action.id !== album.id);
      return {
        ...state,
        addedItems: new_items,
        total: state.total - itemToRemove.price
      };
    case GET_CART_ID:
      return {
        ...state,
        cart_id: action.payload
      };
    case GET_ALBUMS:
      return {
        ...state,
        songs: action.payload
      };
    case GET_SONGS:
      return {
        ...state,
        albums: action.payload
      };
    default:
      return state;
  }
};
