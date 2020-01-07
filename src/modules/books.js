import { createAction, handleActions } from "redux-actions";
import searchResultList from "../components/Book/searchResultList";

export const SEARCH_BOOK_REQUEST = "books/SEARCH_BOOK_REQUEST";
export const SEARCH_BOOK_SUCCESS = 'books/SEARCH_BOOK_SUCCESS'
export const SEARCH_BOOK_FAILURE = 'books/SEARCH_BOOK_FAILURE'

export const GET_RECOMMENDED_BOOKS_REQUEST = 'books/GET_RECOMMENDED_BOOKS_REQUEST'
export const GET_RECOMMENDED_BOOKS_FAILURE = 'books/GET_RECOMMENDED_BOOKS_FAILURE'
export const GET_RECOMMENDED_BOOKS_SUCCESS = 'books/GET_RECOMMENDED_BOOKS_SUCCESS'

export const searchBooks = createAction(SEARCH_BOOK_REQUEST);
export const getLoadCommendedBooks = createAction(GET_RECOMMENDED_BOOKS_REQUEST);


export const dataLimitLength = 10; //가져오는 책의 길이

const initialState = {
  isLoadging: false,
  searchResultBooks: [],
  hasMoreSearchBooks: false,
  isLoading_recommendedBooks: false,
  recommendedBooks: [],
  searchText: '',
};

const books = handleActions(
  {
    //검색결과 API
    [SEARCH_BOOK_REQUEST]: (state, action) => {
      console.log("search_request", action)
      return {
        ...state,
        isLoadging: true,
        hasMoreSearchBooks: state.searchResultBooks.length ? state.hasMoreSearchBooks : true
      }
    },
    [SEARCH_BOOK_SUCCESS]: (state, action) => {
      return {
        ...state,
        isLoadging: false,
        searchText: action.search,
        searchResultBooks: state.searchResultBooks.concat(action.data),
        hasMoreSearchBooks: action.data.length === dataLimitLength
      }
    },
    [SEARCH_BOOK_FAILURE]: (state, action) => {

      return {
        ...state,
        isLoadging: false,
        hasMoreSearchBooks: false
      }
    },

    //추천도서 API
    [GET_RECOMMENDED_BOOKS_REQUEST]: (state, action) => {
      return {
        ...state,
        isLoading_recommendedBooks: true
      }
    },
    [GET_RECOMMENDED_BOOKS_SUCCESS]: (state, action) => {
      return {
        ...state,
        recommendedBooks: action.data,
        isLoading_recommendedBooks: false

      }
    },
    [GET_RECOMMENDED_BOOKS_FAILURE]: (state, action) => {
      return {
        ...state,

      }
    },

  },
  initialState
);

export default books;
