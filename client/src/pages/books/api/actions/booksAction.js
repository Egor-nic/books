import axios from "axios";
import { GET_All_BOOKS, GET_MORE_BOOK, GET_ONE_BOOK, SEARCH_BOOK, SORT_BOOKS_LIST, SORT_BOOKS_OF_CATEGORIES } from "../types/types";

export const getBooks = () => async(dispatch) => {
    try {
        const responseAllBooks = await axios("https://www.googleapis.com/books/v1/volumes?q=orderBy=$relevance&maxResults=30&key=AIzaSyDniAAQ8K6-6USvW2wVo4iQGhFGWlkHtjI");
        dispatch({type: GET_All_BOOKS, payload: responseAllBooks?.data})
    } catch (error) {
        
    }
}

export const sortBooksOfCategories = (categories) => async(dispatch) => {
    try {
        if (categories === 'all') {
            categories = ""
        }
        const responseSortBook = await axios(`https://www.googleapis.com/books/v1/volumes?q=subject:${categories}&maxResults=30&key=AIzaSyDniAAQ8K6-6USvW2wVo4iQGhFGWlkHtjI`);
        dispatch({type: SORT_BOOKS_OF_CATEGORIES, payload: responseSortBook?.data})
        
    } catch (error) {
    }
    }

export const searchBook = (inputValue) => async(dispatch) =>{
    try {
        
        const responseSearchBook = await axios(`https://www.googleapis.com/books/v1/volumes?q=intitle:${inputValue}&maxResults=30&key=AIzaSyDniAAQ8K6-6USvW2wVo4iQGhFGWlkHtjI`);
        dispatch({type: SEARCH_BOOK, payload: responseSearchBook?.data})
    } catch (error) {
        
    }
}

export const getMoreBooks = (index) => async(dispatch) => {
    try {
        const responseMoreBooks = await axios(`https://www.googleapis.com/books/v1/volumes?q=search+terms&startIndex=${index}&maxResults=30&key=AIzaSyDniAAQ8K6-6USvW2wVo4iQGhFGWlkHtjI`);
        dispatch({type: GET_MORE_BOOK, payload: responseMoreBooks?.data})
    } catch (error) {
        
    }
}

export const sortBooksListAction = (psortParam) => async(dispatch) =>{
    try {
        const responseSortBooksList = await axios(`https://www.googleapis.com/books/v1/volumes?q=orderBy=${psortParam}&maxResults=30&key=AIzaSyDniAAQ8K6-6USvW2wVo4iQGhFGWlkHtjI`);
        dispatch({type: SORT_BOOKS_LIST, payload: responseSortBooksList?.data})
    } catch (error) {
        
    }
}

export const getOneBook = (bookId) => async(dispatch) => {
    try {
        const responseOneBook = await axios(`https://www.googleapis.com/books/v1/volumes/${bookId}?key=AIzaSyDniAAQ8K6-6USvW2wVo4iQGhFGWlkHtjI`)
        dispatch({type: GET_ONE_BOOK, payload: responseOneBook?.data})
    } catch (error) {
        
    }
}
