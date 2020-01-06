import React from "react";
import data from './data.json'
const RentList = () => {
  return (
    <div>
      <h1 style={{ color: "red" }}>Rent List default </h1>
      <br />
      {data.books.map((book, idx) =>
        <li key={idx}><img src="https://bookthumb-phinf.pstatic.net/cover/141/972/14197212.jpg?type=m1&udate=20181115" /> 도서명 :{book.title} 저자명 : {book.writer} </li>
      )}

    </div>)

};

export default RentList;
