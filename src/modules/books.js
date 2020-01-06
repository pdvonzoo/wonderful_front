import { createAction, handleActions } from "redux-actions";

export const SEARCH_BOOK_REQUEST = "books/SEARCH_BOOK_REQUEST";
export const SEARCH_BOOK_SUCCESS = 'books/SEARCH_BOOK_SUCCESS'
export const SEARCH_BOOK_FAILURE = 'books/SEARCH_BOOK_FAILURE'
// export const searchbook = createAction(SEARCH_BOOK_REQUEST);

const initialState = {
  books: [],
  me: null,
  txt: "",
  isLoadging: false

};
const book = {
  title: "자바 8 인 액션",
  writer: "자바의 신",
  publisher: "길 벗"
};
const dummyBooks = [book, book, book, book, book, book, book, book];
const books = handleActions(
  {
    [SEARCH_BOOK_REQUEST]: (state, action) => {
      return {
        ...state,
        isLoadging: true
      };
    },
    [SEARCH_BOOK_SUCCESS]: (state, action) => {
      return {
        ...state,
        books: dummyBooks,
        txt: action.data,
        isLoadging: false
      };
    },
    [SEARCH_BOOK_FAILURE]: (state, action) => {
      return {
        ...state,
      };
    },

  },
  initialState
);

export default books;
