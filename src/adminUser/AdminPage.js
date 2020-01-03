import React from "react";
import BookInfo from "./BookInfo";

const AdminPage = () => {
  const books = [
    {
      name: "애플",
      count: 5,
      date: "2019-03-12",
      rented: 3
    },
    {
      name: "이것이 자바다1",
      count: 10,
      date: "2019-03-12",
      rented: 5
    },
    {
      name: "이것이 자바다2",
      count: 10,
      date: "2019-03-12",
      rented: 8
    },

    {
      name: "자바 인 액션",
      count: 15,
      date: "2019-03-12",
      rented: 3
    },
    {
      name: "리액트를 다루는 기술",
      count: 5,
      date: "2019-03-12",
      rented: 1
    },
    {
      name: "나는 아마존에서 미래를 보았다",
      count: 1,
      date: "2019-03-12",
      rented: 1
    },
    {
      name: "아마존",
      count: 5,
      date: "2019-03-12",
      rented: 3
    }
  ];
  return (
    <div>
      {books && books.map((book, idx) => <BookInfo book={book} />)}
    </div>
  );
};

export default AdminPage;
