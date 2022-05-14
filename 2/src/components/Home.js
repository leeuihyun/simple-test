import React, { useCallback, useState } from "react";
import { useEffect } from "react";
import db from "../firebase";
import useTool from "../hook/useTool";
import BookList from "./BookList";

function Home() {
    const [title, onChangeTitle, setTitle] = useTool("");
    const [author, onChangeAuthor, setAuthor] = useTool("");
    const [desp, onChangeDesp, setDesp] = useTool("");
    const [publishDate, onChangePublishDate, setPublishDate] = useTool("");
    const [page, onChangePage, setPage] = useTool("");
    const [loading, setLoading] = useState(false);

    const [books, setBooks] = useState(null);
    useEffect(() => {
        db.collection("books").onSnapshot((snapshot) =>
            setBooks(
                snapshot.docs.map((doc) => ({
                    id: doc.id,
                    ...doc.data(),
                }))
            )
        );
    }, []);

    const onSubmitForm = useCallback(
        async (e) => {
            e.preventDefault();
            try {
                //title,author,desp,publishDate -> need dispatch
                setLoading(true);
                await db
                    .collection("books")
                    .add({
                        title: title,
                        author: author,
                        page: parseInt(page),
                        desp: desp,
                        publishDate: new Date(publishDate),
                    })
                    .then((res) => {
                        console.log(res);
                        console.log(res.id); //res.id => 글 저장할 때 랜덤 id 가져올 수 있음.
                    });
                setTimeout(1000);
                setTitle("");
                setAuthor("");
                setDesp("");
                setPublishDate("");
                setPage("");
                setLoading(false);
            } catch (error) {
                alert("error");
            }
        },
        [title, author, desp, publishDate, page]
    );

    return (
        <div>
            <h1>도서관 시스템</h1>
            <form onSubmit={onSubmitForm}>
                <div>
                    <label htmlFor="book-title">제목</label>
                    <input
                        type="text"
                        name="title"
                        id="book-title"
                        placeholder="title"
                        value={title}
                        onChange={onChangeTitle}
                    />
                </div>
                <div>
                    <label htmlFor="book-author">저자</label>
                    <input
                        type="text"
                        name="author"
                        placeholder="author"
                        value={author}
                        id="book-author"
                        onChange={onChangeAuthor}
                    />
                </div>
                <div>
                    <label htmlFor="book-page">페이지</label>
                    <input
                        type="text"
                        value={page}
                        id="book-page"
                        name="book-page"
                        onChange={onChangePage}
                        placeholder="페이지"
                    />
                </div>
                <div>
                    <label htmlFor="book-desp">설명</label>
                    <textarea
                        name="설명"
                        value={desp}
                        id="book-desp"
                        placeholder="desp"
                        onChange={onChangeDesp}
                    />
                </div>
                <div>
                    <label htmlFor="book-date">출판일</label>
                    <input
                        type="date"
                        id="book-date"
                        value={publishDate}
                        onChange={onChangePublishDate}
                        placeholder="출판일"
                    />
                </div>
                <div>
                    <button type="submit" disabled={loading}>
                        {loading ? "저장중 . . . " : "저장하기"}
                    </button>
                </div>
            </form>
            <BookList />
        </div>
    );
}

export default Home;
