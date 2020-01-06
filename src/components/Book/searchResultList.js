import React from 'react';
import { useSelector, useDispatch } from 'react-redux'

const searchResultList = () => {
    const { books, isLoadging, txt } = useSelector(state => state.books);


    return (
        <>
            {isLoadging && <h1>로딩 중......</h1>}
            {!isLoadging && <div> '{txt}' 의 검색 결과 </div>}
            {!isLoadging && books && books.map((val, idx) => {
                return (

                    <div key={idx} style={{ border: "1px solid red" }}>
                        <p>책 이름 : {val.title}</p>
                        <p>책 저자 : {val.writer}</p>
                        <p>출판사 :  {val.pubpsher}</p>
                        <button>찜 하기</button>
                    </div>
                )
            })}
        </>
    );
};

export default searchResultList;