import React from "react";
import BookInfo from "./BookInfo";
import { books } from "./adminMock";

const AdminPage = () => {
  return (
    <div>
      {books && books.map((book, idx) => <BookInfo book={book} />)}
    </div>
  );
};

export default AdminPage;
