import { useState } from "react";

const initialState = {
    cart: [],
}

const useInitialState = () => {
    const [state, setState] = useState(initialState);

    //function add to cart:
    const addToCart = (payload) => {
        setState({
            ...state,
            cart: [...state.cart, payload]
        });
    };

    //function remove from cart:
    const removeFromCart = (indexValue) => {
        setState({
            ...state,
            cart: state.cart.filter((_, index) => index !== indexValue)
        });
    };

    return {
        state,
        addToCart,
        removeFromCart
    }
}

export default useInitialState;