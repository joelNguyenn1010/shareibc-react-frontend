import { ADD_TO_CART, DELETE_FROM_CART, SET_QUANTITY } from '../actions/cart-action'
import update from 'react-addons-update'
const initialState = {
    products: [
    ]
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_TO_CART:
            return checkExisting(state, action)
        case DELETE_FROM_CART:
            return delete_from_cart(state, action)
        case SET_QUANTITY:
            return set_quantity(state, action)
        default:
            return state;
    }
}
const set_quantity = ( state, action ) => {
   
    if(action.payload.quantity < 0) {
       return delete_from_cart(state, action)
    } else {
       
        var index;
        var checking = state.products.find((e, pos) => {
            index = pos;
            return e.item.id == action.payload.id
        })
    
        if(checking) {
            checking.quantity = action.payload.quantity
            let newCollection = update(state.products,
                        {
                            [index]: {
                                quantity: {$set: checking.quantity}
                            }
                        })
                        return {
                            ...state,
                            products: newCollection
                        }
         
        }
        return {
            ...state,
        }
    }
}

const delete_from_cart = ( state, action ) => {
    const updatedArray = state.products.filter(
        (product) => {
            return product.item.id != action.payload.id
        }
    );
    return {
        ...state,
        products: updatedArray ? updatedArray : []
    }
}
const checkExisting = (state, action) => {
    //this is for add the first item in the cart
    var excucute = true
    //this checking if the item is in the state.products by loop through all available 
    if (state.products && state.products.length > 0) {
        var index;
        var checking = state.products.find((e, pos) => {
            index = pos;
            return e.item == action.payload.product
        })
        if(checking) {
            excucute = false
            checking.quantity++
            let newCollection = update(state.products,
                        {
                            [index]: {
                                quantity: {$set: checking.quantity}
                            }
                        })
            return {
                ...state,
                products: newCollection
            }
        }
        // for (var i = 0; i < state.products.length; i++) {
        //     if (state.products[i].item == action.payload.product) {
        //         excucute = false
        //         let updateQuantity = state.products[i].quantity + 1
        //         let newCollection = update(state.products,
        //         {
        //             [i]: {
        //                 quantity: {$set: updateQuantity}
        //             }
        //         })
        //         return {
        //             ...state,
        //             products: newCollection
        //         }
        //     }
        // }
    }

    if(excucute){
        const add_cart = state.products.concat({
            item: action.payload.product,
            quantity: +1
        });
        return {
            ...state,
            products: add_cart
        }
    }

}
export default reducer