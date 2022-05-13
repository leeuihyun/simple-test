import React, { useState, useEffect, useCallback } from "react";
import useTool from "../hook/useTool";

function Home() {
    const [title, onChangeTitle] = useTool("");
    const [author, onChangeAuthor] = useTool("");
    const [desp, onChangeDesp] = useTool("");

    return (
        <div>
            <form>
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
                    <label htmlFor="book-desp">설명</label>
                    <input
                        type="text"
                        name="설명"
                        value={desp}
                        id="book-desp"
                        placeholder="desp"
                        onChange={onChangeDesp}
                    />
                </div>
            </form>
        </div>
    );
}

export default Home;
