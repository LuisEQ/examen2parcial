import { ADD_TO_CART, REMOVE_ITEM, SUB_QUANTITY, ADD_QUANTITY } from './cartActionTypes'

export const addToCart = (id) => {
    return {
        type: ADD_TO_CART,
        id: id
    }
}
export const removeItem = (id) => {
    return {
        type: REMOVE_ITEM,
        id: id
    }
}
export const subtractQuantity = (id) => {
    return {
        type: SUB_QUANTITY,
        id: id
    }
}
export const addQuantity = (id) => {
    return {
        type: ADD_QUANTITY,
        id: id
    }
}