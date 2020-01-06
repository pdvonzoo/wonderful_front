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



const initialState = {
  me: null,//유저 정보
  isLoadging: false,
  searchResultBooks: [],
  isLoading_recommendedBooks: false,
  recommendedBooks: [],
};
const book = {
  title: "자바 8 인 액션",
  writer: "자바의 신",
  publisher: "길 벗"
};
const books = handleActions(
  {
    //검색결과 API
    [SEARCH_BOOK_REQUEST]: (state, action) => {
      return {
        ...state,
        isLoadging: true
      }
    },
    [SEARCH_BOOK_SUCCESS]: (state, action) => {
      return {
        ...state,
        isLoadging: false,
        searchResultBooks: state.searchResultBooks.concat(action.data),
      }
    },
    [SEARCH_BOOK_FAILURE]: (state, action) => {
      return {
        ...state,
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
