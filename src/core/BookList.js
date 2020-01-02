import React, { useEffect, useState } from "react";
import Data from "../data.json";
import Book from "./Book";
const BookList = () => {
  const [datas, setDatas] = useState(null);
  useEffect(() => {
    setDatas(Data.books);
    console.log(datas);
  }, []);
  return (
    <div>
      {datas && datas.map((book, index) => <Book key={index} book={book} />)}
    </div>
  );
};

export default BookList;
