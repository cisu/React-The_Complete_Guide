import React, { useReducer } from 'react'
import CartContext from './cart-context';

// create an object the contain the default value state for useReducer
const defaultCartState = {
    items: [],
    totalAmount: 0,
}


// userReducer
const cartReducer = (state, action) => {

    if(action.type === 'ADD'){
        /* 
        concat use to add items to an array like push.
        But unlike push th concat doesn't edit the existing array,
        but return a new array.
        We want to update state in an immutable way, 
        which simply means you don't want to edit old state snapshot,
        because of the reference value thing in JS.
        That would mean that existing data in memory gets edited, without React knowing about it, 
        but instead we want to generate a brand new state object which wil return.
        Concat gives us a new array instead of editing the old array in memory.
        */
        const updateItems = state.items.concat(action.item)

        const updateTotalAmount = state.totalAmount + action.item.price * action.item.amount;

        return {
            items: updateItems,
            totalAmount: updateTotalAmount,
        };
    }

    return defaultCartState
}

const CartProvider = (props) => {
    const [cartState, dispatchAction] = useReducer(cartReducer, defaultCartState);


    const addItemToCartHandler = item => {
        dispatchAction({
            type: "ADD",
            item: item
        });
    };

    const removeItemFromCartHandler = id => {
        dispatchAction({
            type: "REMOVE",
            id: id
        })

    }

    const cartContext = {
        items: cartState.items,
        totalAmount: cartState.totalAmount,
        addItem: addItemToCartHandler,
        removeItem: removeItemFromCartHandler
    }

    return (
        <CartContext.Provider value={cartContext}>
           {props.children} 
        </CartContext.Provider>
    )
}

export default CartProvider
