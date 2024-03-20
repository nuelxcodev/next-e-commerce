import { createContext, useReducer } from "react";
import Cookies from "js-cookie";


export const Cartcontext = createContext()

const initialState = {
    cartitems: Cookies.get("cartitems") ?
        JSON.parse(Cookies.get("cartitems")) : [],
    wishlist: Cookies.get("wishlist") ?
        JSON.parse(Cookies.get("wishlist")) : [],
    shipping: Cookies.get("shipping") ?
        JSON.parse(Cookies.get("shipping")) : [],
}

function Reducer(state, action) {
    switch (action.type) {
        // add a new item to cart
        case "ADD_TO_CART": {
            const newitem = action.payload;

            const existingitem = state.cartitems.find((item) => item.slug === newitem.slug);
            const cartitems = existingitem ?
                state.cartitems.map((item) => item.slug === existingitem.slug ? newitem : item)
                : [...state.cartitems, newitem]

            Cookies.set("cartitems", JSON.stringify(cartitems))
            return { ...state, cartitems: cartitems }
        }


        // delect existing items from cart
        case "REMOVEITEM_CART": {
            const itemtoremove = action.payload;
            const cartitems = state.cartitems.filter(item => item.slug !== itemtoremove.slug)
            Cookies.set("cartitems", JSON.stringify(cartitems))
            return { ...state, cartitems: cartitems }
        }
        // add new whislistItems to whislist
        case "ADDWISHLIST_CART": {
            const newwish = action.payload;

            const existingwish = state.wishlist.find((item) => item.slug === newwish.slug);
            const wish = existingwish ?
                state.wishlist.map((item) => item.slug === existingwish.slug ? newwish : item)
                : [...state.wishlist, newwish]

            Cookies.set("wishlist", JSON.stringify(wish))
            return { ...state, wishlist: wish }
        }
        // remove existing whislist
        case "REMOVE_WISHLIST": {
            const removewish = action.payload;
            const removed = state.wishlist.filter(item => item.slug !== removewish.slug)
            return { ...state, wishlist: removed }
        }
        case "ADD_SHIPPING": {
            const shipping = action.payload
            Cookies.set("shipping", JSON.stringify(shipping))
            return { ...state, locstion: shipping}
        }
        default:
            return state;
    }

}


export function CartProvider({ children }) {
    const [state, dispatch] = useReducer(Reducer, initialState)
    const values = { state, dispatch }
    return <Cartcontext.Provider value={values}>{children}</Cartcontext.Provider>
}