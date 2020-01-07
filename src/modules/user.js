import { createAction, handleActions } from "redux-actions";
export const GET_MY_BOOKS_LOOKUP_REQUEST = 'books/GET_MY_BOOKS_REQUEST'
export const GET_MY_BOOKS_LOOKUP_SUCCESS = 'books/GET_MY_BOOKS_SUCCESS'
export const GET_MY_BOOKS_LOOKUP_FAILURE = 'books/GET_MY_BOOKS_FAILURE'


export const getMyBooksLookUp = createAction(GET_MY_BOOKS_LOOKUP_REQUEST);


const initialState = {
    userLookUpBooks: [],
    isLoading: false

}


const user = handleActions(
    {
        [GET_MY_BOOKS_LOOKUP_REQUEST]: (state, action) => {
            return {
                ...state,
                isLoading: true,

            }
        },

        [GET_MY_BOOKS_LOOKUP_SUCCESS]: (state, action) => {
            return {
                ...state,
                isLoading: false,
                userLookUpBooks: action.data
            }
        },


        [GET_MY_BOOKS_LOOKUP_FAILURE]: (state, action) => {
            return {
                ...state,
                isLoading: false,
            }
        },
    },
    initialState
)
export default user;