import React from "react";
import BookInfo from "./BookInfo";

const AdminPage = () => {
  return (
    <div>
      {books && books.map((book, idx) => <BookInfo book={book} />)}
    </div>
  );
};

export default AdminPage;
