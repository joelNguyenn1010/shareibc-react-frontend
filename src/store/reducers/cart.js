import { ADD_TO_CART, DELETE_FROM_CART, SET_QUANTITY, CLEAR_CART } from '../actions/cart-action'
import update from 'react-addons-update'
const initialState = {
    products: [],
    totalPrice: 0
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
                products: [],
                totalPrice: 0
            }
        default:
            return state;

    }
}

const set_total_price = (state, action) => {

    var totalPrice = 0
    state.products.map(product => {
        totalPrice += product.item.price * product.quantity
    })
    return totalPrice
}


const set_quantity = (state, action) => {
    if (action.payload.quantity <= 0) {
        return delete_from_cart(state, action)
    } else {
        var index;
        var productInCart = state.products.find((e, pos) => {
            index = pos;
            return Number(e.item.id) === Number(action.payload.id)
        })

        if (productInCart) {
            productInCart.quantity = action.payload.quantity
            let newCollection = update(state.products,
                {
                    [index]: {
                        quantity: { $set: Number(productInCart.quantity) },
                        subtotal: { $set: Number(productInCart.quantity*productInCart.item.price).toFixed(2) }
                    }

                })
            let totalPrice = 0
            newCollection.map(product => {
                totalPrice += product.subtotal 
            })
            let newState = {
                ...state,
                products: newCollection,
                totalPrice: Number(parseFloat(totalPrice).toFixed(2))
            }
            localStorage.setItem('cart', JSON.stringify(newState))
            return newState

        }
        return {
            ...state,
        }
    }
}

const delete_from_cart = (state, action) => {
    const updatedArray = state.products.filter(
        (product) => {
            return product.item.id != action.payload.id
        }
    );
    let totalPrice = 0
    updatedArray.map(product => {
        totalPrice += product.subtotal 
    })


    let newState = {
        ...state,
        products: updatedArray ? updatedArray : [],
        totalPrice
    }

    localStorage.setItem('cart', JSON.stringify(newState))
    return newState
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
        if (checking) {
            excucute = false
            let test = {
                ...state,
            }
            return test
        }
    }
    if (excucute) {
        return add_existing_cart(state, action)
    }

}
//this + quantity if the item is in the cart
const add_existing_cart = (state, action) => {
    const add_cart = state.products.concat({
        item: action.payload.product,
        quantity: 1,
        subtotal: Number(action.payload.product.price).toFixed(2)
    });
    let totalPrice = 0
    add_cart.map(product => {
        totalPrice += product.subtotal 
    })
    // let total = Number(add_cart.item.price) * Number(add_cart.quantity)
    let newState = {
        ...state,
        products: add_cart,
        totalPrice:  Number(parseFloat(totalPrice).toFixed(2))
    }
    localStorage.setItem('cart', JSON.stringify(newState))
    return newState
}
export default reducer