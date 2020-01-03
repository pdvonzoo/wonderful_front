import React from "react";

export default ({ book }) => {
    const { name, count, date } = book;
    return <>
        <div>
            <p>책 이름 : {name}</p>
            <p>총 권수 {count}</p>
            <p>입고 날짜 {date}</p>
        </div>
        <div>
            <button>추가</button>
            <button>제거</button>
            <button>수정</button>
            <button>반납현황</button>
        </div>
    </>
}