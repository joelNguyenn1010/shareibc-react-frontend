import { ADD_TO_CART, DELETE_FROM_CART, SET_QUANTITY, CLEAR_CART } from '../actions/cart-action'
import update from 'react-addons-update'
const initialState = {
    products: [
    ]
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_TO_CART:
            return add_to_cart(state, action)
        case DELETE_FROM_CART:
            return delete_from_cart(state, action)
        case SET_QUANTITY:
            return set_quantity(state, action)
        case CLEAR_CART:
            localStorage.removeItem('cart')
            return {
                ...state,
                products: []
            }
        default:
            return state;
    }
}
const set_quantity = ( state, action ) => {
   
    if(action.payload.quantity <= 0) {
       return delete_from_cart(state, action)
    } else {
        var index;
        var checking = state.products.find((e, pos) => {
            index = pos;
            return Number(e.item.id) === Number(action.payload.id)
        })
    
        if(checking) {
            checking.quantity = action.payload.quantity
            let newCollection = update(state.products,
                        {
                            [index]: {
                                quantity: {$set: Number(checking.quantity)}
                            }
                        })
                        localStorage.setItem('cart', JSON.stringify(newCollection))
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
    localStorage.setItem('cart', JSON.stringify(updatedArray))
    return {
        ...state,
        products: updatedArray ? updatedArray : []
    }
}


const add_to_cart = (state, action) => {
    //this is for add the first item in the cart
    var excucute = true
    //this checking if the item is in the state.products by loop through all available 
    if (state.products && state.products.length > 0) {
        var index;
        var checking = state.products.find((e, pos) => {
            index = pos;
            return Number(e.item.id) === Number(action.payload.product.id)
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
            localStorage.setItem('cart', JSON.stringify(newCollection))
            return {
                ...state,
                products: newCollection
            }
        }

    }
    if(excucute){
        return add_existing_cart( state, action )
    }

}
//this + quantity if the item is in the cart
const add_existing_cart = (state, action) => {
    const add_cart = state.products.concat({
        item: action.payload.product,
        quantity: +1
    });
    localStorage.setItem('cart', JSON.stringify(add_cart))
    return {
        ...state,
        products: add_cart
    }
}
export default reducer