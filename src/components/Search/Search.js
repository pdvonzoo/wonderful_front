import React, { useState, useCallback } from "react";
import styled from "styled-components";
import { useSelector, useDispatch } from 'react-redux'
import { SEARCH_BOOK_REQUEST } from '../../modules/books'
import { Link } from 'react-router-dom';

const SearchContainer = styled.div`
    padding: 1rem 0;
    text-align: center;
`;
const SearchForm = styled.input`
    border: none;
    font-family: Chivo,sans-serif;
    font-size: 1.3rem;
    margin: 0 .5rem;
    padding: 1rem;
    min-width: 26rem;
`;
const SearchBtn = styled.button`
    margin: 0 5px;
    padding: .5rem 1.5rem;
    border: 0px;
    font-size: 1.3rem;
    background: #ea541e;
    color: #fff;
`;

export default () => {

    const dispatch = useDispatch();
    const [search, setSearch] = useState('')

    const onChangeSearchBar = useCallback((e) => {

        setSearch(e.target.value)

    }, [search])

    const searchSubmit = useCallback((e) => {
        // e.preventDefault();
        dispatch({ type: SEARCH_BOOK_REQUEST, data: search })
        setSearch('');
    }, [search])
    return <SearchContainer>
        <SearchForm type="search" onChange={onChangeSearchBar} value={search} placeholder="What are you searching for?" />
        <Link to="/search">
            <SearchBtn type="submit" onClick={searchSubmit} >
                GO
        </SearchBtn>
        </Link>
    </SearchContainer >

}