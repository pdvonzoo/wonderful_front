import React, { useEffect } from "react";
import { useSelector, useDispatch } from 'react-redux'
import { GET_MY_BOOKS_LOOKUP_REQUEST } from '../../modules/user'
const RentList = () => {

  const dispatch = useDispatch();
  const { userLookUpBooks } = useSelector(state => state.user)

  useEffect(() => {
    dispatch({ type: GET_MY_BOOKS_LOOKUP_REQUEST })
  }, [])



  return (
    <>
      {userLookUpBooks && userLookUpBooks.map((book, index) => {
        return (
          <li key={index}><img src={book.image} />신청한 책 제목 {book.name}  빌린 날짜 {book.date} 신청 완료  {book.isOk ? "신청 처리 완료" : "대기 중"}  </li>
        )
      })
      }
    </>

  )
};

export default RentList;
