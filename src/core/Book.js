import React from "react";

const Book = ({ book }) => {
  const { title, writer, publisher, publisherYear, isbn, isRental } = book;
  return (
    <>
      <li>{title}</li>
      <li>{writer}</li>
      <li>{publisher}</li>
      <li>{publisherYear}</li>
      <li>{isbn}</li>
      <li>{isRental}</li>
    </>
  );
};

export default Book;
