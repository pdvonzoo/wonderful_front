import React, { useEffect, useState, useCallback } from "react";
import Data from "./data.json";
import Book from "./Book";
import { rentOneBook } from "./BookListAPI";
import { useSelector, useDispatch } from 'react-redux'
import { GET_BOOK_TEST_REQUEST } from '../../modules/books'
const BookList = () => {
  const dispatch = useDispatch();
  const { bulkTest } = useSelector(state => state.books)
  const [datas, setDatas] = useState(null);
  // useEffect(() => {
  //   // setDatas(Data.books);
  //   dispatch({
  //     type: GET_BOOK_TEST_REQUEST,
  //     data: {
  //       limit: 3,
  //       offset: 0
  //     }
  //   })
  // }, []);

  const plusBooks = useCallback(() => {
    dispatch({
      type: GET_BOOK_TEST_REQUEST,
      limit: 3,
      offset: bulkTest.length
    })
  }, [bulkTest])
  return (
    <div>
      {bulkTest && bulkTest.map((val, idx) => {
        <li>책 번호 : {val.id}  책 이름 : {val.title} 저지 :{title.writer}</li>
      })}
      <button onClick={plusBooks}>불러오기</button>
    </div>
  );
};
export default BookList;
