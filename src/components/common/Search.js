import React, { useState, useCallback } from "react";
import { useSelector, useDispatch } from 'react-redux'
import { SEARCH_BOOK_REQUEST } from '../../modules/books'
import { Link } from 'react-router-dom';
import { getMyBooks } from '../../modules/user'
const Search = () => {
    const [searchText, setSearchText] = useState('');
    const dispatch = useDispatch();

    const onChange = useCallback(e => {
        setSearchText(e.target.value);
    }, [searchText]);
    const onSubmitSearch = useCallback((e) => {
        dispatch({ type: SEARCH_BOOK_REQUEST, data: searchText })
        setSearchText('');
    }, [searchText])
    const goMyBooksLook = useCallback(() => {
        dispatch(getMyBooks())
    })
    return (
        <div>
            <input type="text" value={searchText} onChange={onChange} />
            <Link style={{ marginLeft: '15px' }} to="/search" onClick={onSubmitSearch}>검색</Link>
            <Link style={{ marginLeft: '15px' }} to="/myBooksRoom">나의 장바구니</Link>
        </div>
    );
};

export default Search;