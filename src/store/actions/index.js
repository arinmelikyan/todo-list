export const GET_ITEMS = "GET_ITEMS";
export const ADD_ITEM = "ADD_ITEM";
export const EDIT_ITEM = "EDIT_ITEM";
export const DELETE_ITEM = "DELETE_ITEM";

export const getItems = () => {
    return {
        type: ADD_ITEM
    }
} 

export const addItem = (payload) => {
    return {
        type: ADD_ITEM,
        payload
    }
} 

export const editItem = (payload) => {
    return {
        type: EDIT_ITEM,
        payload
    }
} 

export const deleteItem = (id) => {
    return {
        type: DELETE_ITEM,
        id
    }
} 