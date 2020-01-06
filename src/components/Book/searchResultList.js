import React, { useCallback, useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux'
import { SEARCH_BOOK_REQUEST } from '../../modules/books'
import SearchABook from './searchABook';

const searchResultList = () => {

    const { searchResultBooks, isLoadging, hasMoreSearchBooks } = useSelector(state => state.books);
    const dispatch = useDispatch();
    const onScroll = () => {
        // console.log(window.scrollY, document.documentElement.clientHeight, document.documentElement.scrollHeight)
        if (window.scrollY + document.documentElement.clientHeight > document.documentElement.scrollHeight - 350) {
            if (hasMoreSearchBooks) {
                dispatch({ type: SEARCH_BOOK_REQUEST, offset: searchResultBooks.length })
            }

        }
    }
    useEffect(() => {
        window.addEventListener('scroll', onScroll);
        return () => {
            window.removeEventListener('scroll', onScroll)
        }
    }, [searchResultBooks.length])


    return (
        <>
            {/* {isLoadging && <h1>로딩 중......</h1>} */}
            {searchResultBooks.map((book, index) => {
                return (
                    <SearchABook key={index} title={book.title} author={book.author} image={book.image} pubdate={book.pubdate} isbn={book.isbn} />
                )
            })}
        </>
    );
};

export default searchResultList;