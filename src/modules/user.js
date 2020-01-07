import { createAction, handleActions } from "redux-actions";
export const GET_MY_BOOKS_REQUEST = 'books/GET_MY_BOOKS_REQUEST'
export const GET_MY_BOOKS_SUCCESS = 'books/GET_MY_BOOKS_SUCCESS'
export const GET_MY_BOOKS_FAILURE = 'books/GET_MY_BOOKS_FAILURE'


export const getMyBooks = createAction(GET_MY_BOOKS_REQUEST);
const initialState = {
    userBooks: [],
    isLoading: false

}
const book = {
    name: "자바8",
    writer: "보솜이"
}
const dummyBooks = [
    book, book, book, book, book, book, book, book, book, book,
]


const user = handleActions(
    {
        [GET_MY_BOOKS_REQUEST]: (state, action) => {
            return {
                ...state,
                isLoading: true
            }
        },

        [GET_MY_BOOKS_SUCCESS]: (state, action) => {
            return {
                ...state,
                isLoading: false,
                userBooks: dummyBooks
            }
        },


        [GET_MY_BOOKS_FAILURE]: (state, action) => {
            return {
                ...state,
            }
        },
    },
    initialState
)
export default user;