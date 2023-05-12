import { GET_All_BOOKS, GET_MORE_BOOK, GET_ONE_BOOK, SEARCH_BOOK, SORT_BOOKS_LIST, SORT_BOOKS_OF_CATEGORIES } from "./types/types";

export const booksReducer = (state = [], action) => {
    const { type, payload } = action;
    
    switch (type) {

        case GET_All_BOOKS:
            return payload


        case SORT_BOOKS_OF_CATEGORIES:
            return payload


        case SEARCH_BOOK:
            return payload

            case GET_MORE_BOOK:
                return {...state, items:[...state.items, ...payload.items]}

        case SORT_BOOKS_LIST:
            return payload

            case GET_ONE_BOOK: 
                return payload

        default:
            return state;
    }
}