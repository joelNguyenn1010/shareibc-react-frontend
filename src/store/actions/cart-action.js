export const ADD_TO_CART = 'cart:add'
export const DELETE_FROM_CART = 'cart:delete'
export const SET_QUANTITY = 'cart:setQuantity'
export const CLEAR_CART = 'cart:clear'
export function add_to_card(product) {
    return {
        type: ADD_TO_CART,
        payload: {
            product
        }
    }
}
export function delete_from_cart(id) {
    return {
        type: DELETE_FROM_CART,
        payload: {
            id
        }
    }
}

export function set_quantity(id, quantity) {
    return {
        type: SET_QUANTITY,
        payload: {
            id,
            quantity
        }
    }
}

export function clear_all_cart() {
    return {
        type: CLEAR_CART
    }
}