import {combineReducers} from 'redux';
import { booksReducer } from '../pages/books/api/booksReducer';


export const rootReducer = combineReducers({
    books: booksReducer,
});
