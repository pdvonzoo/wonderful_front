import React from 'react';
{/* <li>  <img src={book.image} />
/        책 이름 : {book.title} / 책 저자 : {book.author} / 출판 날짜 :{book.pubdate}  / isbn:{book.isbn} */}
const searchABook = ({ title, author, pubdate, isbn, image }) => {
    return (
        <>
            <hr />
            <li>
                <img src={image} /> 책 이름 : {title} / 책 저자 : {author} / 출판 날짜 :{pubdate}  / isbn:{isbn}
                <button>대여하기</button>
            </li>
        </>
    );
};

export default searchABook;