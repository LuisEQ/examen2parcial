import image1 from "../images/donas.jpg"
import image2 from "../images/hamburguesa.jpg"
import image3 from "../images/pizza.jpeg"
import image4 from "../images/sushi.jpg"
import image5 from "../images/tacos.jpg"

import { ADD_TO_CART, REMOVE_ITEM, SUB_QUANTITY, ADD_QUANTITY } from './actions/cartActionTypes'

const initState = {
    items: [
        { id: 1, title: 'Donas', img: image1 },
        { id: 2, title: 'Hamburguesa', img: image2 },
        { id: 3, title: 'Pizza', img: image3 },
        { id: 4, title: 'Sushi', img: image4 },
        { id: 5, title: 'Tacos', img: image5 }
    ],
    addeditems: [],
    total: 0

}
const cartReducer = (state = initState, action) => {

    switch (action.type) {
        case ADD_TO_CART:
            const addedItem = state.items.find(item => item.id === action.id)
            const existed_item = state.addeditems.find((item) =>
                action.id === item.id ? true : false
            );
            return {
                ...state,
                addeditems: existed_item ? state.addeditems.map(addedItem => addedItem.id === action.id ? { ...addedItem, qty: addedItem.qty + 1 } : addedItem)
                    : [...state.addeditems, {
                        ...
                        addedItem, qty: 1
                    }],
            };
        case REMOVE_ITEM:
            const new_items = state.addeditems.filter(item => action.id !== item.id)
            return {
                ...state,
                addeditems: new_items,
            }
        case SUB_QUANTITY:
            const itemminus = state.items.find(item => item.id === action.id)

            const qtyItem = state.addeditems.find((item) =>
                action.id === item.id && item.qty === 1 ? true : false
            );
            const deletedItem = state.addeditems.filter(item => item.id !== action.id)
            console.log(qtyItem)

            if (itemminus.qty !== 0) {
                return {
                    ...state,

                    addeditems: state.addeditems.map(item => item.id === action.id ? { ...item, qty: item.qty - 1 } : item),
                }
            }
            else {

                return {
                    ...state,
                    addeditems: deletedItem,
                }

            }

        // if (itemminus.qty === 1) {
        //     new_items = state.addeditems.filter(item => item.id !== action.id)
        //     return {
        //         ...state,
        //         addeditems: new_items,
        //     }
        // }
        // else {
        //     itemminus.qty -= 1
        //     return {
        //         ...state,
        //     }
        // }
        case ADD_QUANTITY:
            const itemplus = state.items.find(item => item.id === action.id)
            const additemqty = state.addeditems.find((item) =>
                action.id === item.id ? true : false
            );
            return {
                ...state,
                addeditems: state.addeditems.map(addedItem => addedItem.id === action.id ? { ...addedItem, qty: addedItem.qty + 1 } : addedItem),
            }
        default:
            return state;
    }

}
export default cartReducer;