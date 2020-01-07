import React, { useCallback } from 'react';
import { useSelector, useDispatch } from 'react-redux'
import { SEARCH_BOOK_REQUEST } from '../../modules/books'
const searchResultList = () => {
    const { searchResultBooks, isLoadging } = useSelector(state => state.books);
    const dispatch = useDispatch();

    const getBooks = useCallback((e) => {
        e.preventDefault()
        dispatch({ type: SEARCH_BOOK_REQUEST, offset: searchResultBooks.length })
    }, [searchResultBooks])


    return (
        <>

            {!isLoadging && searchResultBooks.map((book, index) => {
                return (
                    <div key={index}>
                        <hr />
                        <li>  <img src={book.image} />
                            책 이름 : {book.title} / 책 저자 : {book.author} / 출판 날짜 :{book.pubdate}  / isbn:{book.isbn}
                            <button>대여하기</button>
                        </li>
                    </div>
                )
            })}
            {isLoadging && <h1>로딩 중......</h1>}
            <div onClick={getBooks} className="btn" >더 가져오기</div>
        </>
    );
};

export default searchResultList;