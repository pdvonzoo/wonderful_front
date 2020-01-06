import React from "react";
import styled from "styled-components";

const SearchContainer = styled.div`
    padding: 1rem 0;
    text-align: center;
    background-color: #fff;
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
    return <SearchContainer>
        <SearchForm type="search" placeholder="What are you searching for?" />
        <SearchBtn type="submit">
            GO
        </SearchBtn>
    </SearchContainer>
}