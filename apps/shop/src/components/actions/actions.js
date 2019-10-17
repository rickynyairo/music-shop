import {
  ADD_TO_CART,
  EMPTY_CART,
  GET_CART,
  GET_CART_ID,
  REMOVE_ITEM
} from "./action-types/cart-actions";
import { GET_ALBUMS, GET_SONGS } from "./action-types/home-actions";
import api from "./api";
const url = "/shoppingcart";

export const addToCart = async params => {
  const { cart_id, album_id } = params;
  const { data } = await api.post(`${url}/add`, { cart_id, album_id });
  return {
    type: ADD_TO_CART,
    payload: data
  };
};

export const removeItem = id => {
  return {
    type: REMOVE_ITEM,
    id
  };
};

export const emptyCart = async id => {
  const { data } = await api.delete(`${url}/${id}`);
  return {
    type: EMPTY_CART,
    payload: data
  };
};

export const getCart = async id => {
  const { data } = await api.get(`${url}/${id}`);
  return {
    type: GET_CART,
    payload: data
  };
};

export const getCartId = async () => {
  const { data } = await api.get(`${url}/id`);
  return {
    type: GET_CART_ID,
    payload: data.cart_id
  };
};

export const getSongs = async () => {
  const { data } = await api.get("/songs");
  return {
    type: GET_SONGS,
    payload: data
  };
};

export const getAlbums = async () => {
  const { data } = await api.get("/albums");
  return {
    type: GET_ALBUMS,
    payload: data
  };
};
