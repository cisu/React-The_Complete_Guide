import React from 'react';

// Will initialize this context with some default data, which wil not actually be used but which will give us better auto-completion later.
const CartContext = React.createContext({
    //  manage of cart items 
    items: [],
    
    totalAmount: 0,

    // update the context
    addItem: () => {},
    remove: (id) => {}
})

export default CartContext;