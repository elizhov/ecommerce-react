import {createContext, useReducer} from "react";

const CartContext = createContext();

const ACTIONS = {
    ADD_ITEM: "add-item",
    DELETE_ITEM: "delete-item",
    DELETE_ALL_ITEMS: "delete-all-items",
    //CALCULATE_TOTAL: "calculate-total"  //nor es avelacrel
}

const reducer = (state, action) => {
    const {type, payload} = action;

    switch (type) {
        case ACTIONS.ADD_ITEM:
            if (state.some(item => item.id === payload.value.id)) return state;
            return [...state, payload.value];

        case ACTIONS.DELETE_ITEM:
            return state.filter(item => item.id !== payload.value.id);

        case ACTIONS.DELETE_ALL_ITEMS:
            return [];

        // case ACTIONS.CALCULATE_TOTAL:
        //     return state.reduce((total, item) => total + item.price, 0);

        default: return state;
    }
}



const CartProvider = ({ children }) => {
    const [cartItems, dispatch] = useReducer(reducer, []);

    const getTotal = () => {
        return cartItems.reduce((total, item) => total + item.price, 0);
    }

    const addToCart = (item) => {
        dispatch({type: ACTIONS.ADD_ITEM, payload: {value: item}});
    }
    const deleteFromCart = (id) => {
        dispatch({type: ACTIONS.DELETE_ITEM, payload: {value: {id}}});
    }
    const clearCart = () => {
        dispatch({type: ACTIONS.DELETE_ALL_ITEMS})
    }
    const isInCart = (id) => {
        return cartItems.some(item => item.id === id);
    }
    // const calculateTotal = (price) => {
    //     dispatch({type: ACTIONS.CALCULATE_TOTAL, payload: {value: {price}}})
    // }
    return (
        <CartContext.Provider value={{ cartItems, addToCart, deleteFromCart, clearCart, isInCart, getTotal }}>
            {children}
        </CartContext.Provider>
    );
}

export { CartContext, CartProvider };