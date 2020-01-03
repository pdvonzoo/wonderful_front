import { createAction, handleActions } from "redux-actions";

export const SEARCH_A_BOOK = "books/SEARCH_A_BOOK";

export const searchbook = createAction(SEARCH_A_BOOK);

const initialState = {
  books: [],
  me: null
};
const book = {
  title: "자바 8 인 액션",
  writer: "자바의 신",
  publisher: "길 벗"
};
const dummyBooks = [book, book, book, book, book, book, book, book];
const books = handleActions(
  {
    [SEARCH_A_BOOK]: (state, action) => {
      return {
        ...state,
        books: dummyBooks
      };
    }
  },
  initialState
);

export default books;
