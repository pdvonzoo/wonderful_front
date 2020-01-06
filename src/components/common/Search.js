import React, { useState, useCallback } from "react";
import { useSelector, useDispatch } from 'react-redux'
import { SEARCH_BOOK_REQUEST } from '../../modules/books'
import { Link } from 'react-router-dom';
const Search = () => {
    const [searchText, setSearchText] = useState('');
    const dispatch = useDispatch();

    const onChange = e => {
        setSearchText(e.target.value);
    }
    const onSubmitSearch = useCallback((e) => {
        dispatch({ type: SEARCH_BOOK_REQUEST, data: searchText })
        setSearchText('');
    }, [searchText])
    return (
        <div>
            <input type="text" value={searchText} onChange={onChange} />
            <Link to="/search" onClick={onSubmitSearch}>검색</Link>
        </div>
    );
};

export default Search;