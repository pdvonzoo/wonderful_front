import React from "react";
import { rentOneBook } from "./BookListAPI";
import styled from 'styled-components';

const BookLayout = styled.div`
  flex: 1;
  padding: 0 30px;
`;
const BookImage = styled.img`
  width: 100%;
`;

const Book = ({ book, height }) => {
  const { image, title, writer, publisher, publisherYear, isbn, isRental } = book;
  return (
    <BookLayout height={height}>
      <button onClick={rentOneBook}>책 대여하기</button>
      <BookImage src={image} alt="추천 책" />
      <hr />
      <li>책 이름 : {title}</li>
      <li>책 저자 : {writer}</li>
      <li>출판사 : {publisher}</li>
      <li>출판 년도 : {publisherYear}</li>
      <li>isbn : {isbn}</li>
      <li>렌탈 여부 :{isRental ? "출판가능" : "출판 불가능"}</li>
    </BookLayout>

  );
};

export default Book;
