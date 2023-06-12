import {
    EDIT_ITEM,
    GET_ITEMS,
    ADD_ITEM,
    DELETE_ITEM
} from "../actions";

const initialState = {
    list: [],
}

const reducers = (state, action) => {
    switch(action.type) {
        case GET_ITEMS:
            return state;
        
        case ADD_ITEM:
            const newItem = action.payload;
            return {
                ...state,
                newItem
            }

        case EDIT_ITEM:
            const updatedItem = action.payload;
            const findItemById = state.list.find(i => i.id === updatedItem.id);
            // const updatedList = state.list
            return {
                ...state,
            }

        case DELETE_ITEM:
            const updatedList = state.list.filter(i => i.id !== action.id);
            return {
                ...state,
                updatedList
            }
            
        default:
            return state;    
    }
}

export default reducers;