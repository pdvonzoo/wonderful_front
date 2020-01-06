import React from "react";
import Book from "./Book";
import styled from "styled-components";
import { useSelector, useDispatch } from 'react-redux'

const BooksContainer = styled.div`
  display: ${props => props.display ? props.display : "block"};
`;


const BookList = ({ datas, display }) => {
  const dispatch = useDispatch();

  return (
    <BooksContainer display={display}>
      {datas &&
        datas.map((book, index) => <Book key={index} book={book} />)}
    </BooksContainer>
  );
};
export default BookList;
