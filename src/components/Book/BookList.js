import React from "react";
import Book from "./Book";
import styled from "styled-components";

const BooksContainer = styled.div`
  display: ${props => props.display ? props.display : "block"};
`;

const BookList = ({ datas, display }) => {
  return (
    <BooksContainer display={display}>
      {datas &&
        datas.map((book, index) => <Book key={index} book={book} />)}
    </BooksContainer>
  );
};
export default BookList;
