/* eslint-disable no-mixed-spaces-and-tabs */
import { createContext, useReducer } from "react";

export const Store = createContext();

const initialState = {
	cart: { cartitems: [] },
};

function reducer(state, action) {
	switch (action.type) {
		case "CART_ADD_ITEM": {
			const newItem = action.payload;
			const existItem = state.cart.cartitems.find(
				item => item.slug === newItem.slug,
			);
			const cartitems = existItem
				? state.cart.cartitems.map(item =>
					item.name === existItem.name ? newItem : item,
				)
				: [...state.cart.cartitems, newItem];
			return { ...state, cart: { ...state.cart, cartitems } };
		}
		case "CART_REMOVE_ITEM": {
			const cartitems = state.cart.cartitems.filter(
				(item) => item.slug !== action.payload.slug
			); return { ...state, cart: { ...state.cart, cartitems } };
		}


		default:
			return state;
	}
}

export function StoreProvider({ children }) {
	const [state, dispatch] = useReducer(reducer, initialState);
	const value = { state, dispatch };
	return <Store.Provider value={value}>{children}</Store.Provider>;
}
