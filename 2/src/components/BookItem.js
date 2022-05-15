import React from "react";

function BookItem({ book }) {
    return (
        <div>
            <br />
            <strong>책 제목 : </strong>
            {book.title}
            <br />
            <span>
                <strong>책 저자 : </strong>
                {book.author}
            </span>
            <br />

            <span>
                <strong>책 설명 : </strong>
                {book.desp}
            </span>
            <br />
        </div>
    );
}

export default BookItem;
