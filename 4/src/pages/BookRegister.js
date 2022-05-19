import React, { useCallback } from "react";
import { useSelector, useDispatch } from "react-redux";
import useTool from "../hook/useTool";
import { ADD_BOOK_REQUEST } from "../reducers/books";
import { v4 as uuidv4 } from "uuid";

function BookRegister() {
    const dispatch = useDispatch();
    /*Book: {
        id: data.Book.id, //dispatch할때 id 넣어주기
        name: data.Book.name,
        page: data.Book.page,
        author: data.Book.author,
        state: data.Book.state,
    },
    User: {
        id: data.User.id,
    },*/
    const [name, onChangeName, setName] = useTool("");
    const [page, onChangePage, setPage] = useTool("");
    const [author, onChangeAuthor, setAuthor] = useTool("");
    const [state, onChangeState, setState] = useTool("");

    const { user } = useSelector((state) => state.user);
    const userId = user?.id;
    const onSubmitForm = useCallback(
        (e) => {
            e.preventDefault();
            dispatch({
                type: ADD_BOOK_REQUEST,
                data: {
                    User: {
                        id: userId,
                    },
                    Book: {
                        id: uuidv4(),
                        name: name,
                        page: page,
                        author: author,
                        state: state,
                    },
                },
            });
            setName("");
            setPage("");
            setAuthor("");
            setState("");
        },
        [name, page, author, state]
    );
    return (
        <div>
            <form onSubmit={onSubmitForm}>
                <div>
                    <label htmlFor="name">이름</label>
                    <input
                        type="text"
                        name="name"
                        id="name"
                        value={name}
                        onChange={onChangeName}
                    />
                </div>
                <div>
                    <label htmlFor="page">페이지</label>
                    <input
                        type="text"
                        name="page"
                        id="page"
                        value={page}
                        onChange={onChangePage}
                    />
                </div>

                <div>
                    <label htmlFor="author">작가</label>
                    <input
                        type="text"
                        name="author"
                        id="author"
                        value={author}
                        onChange={onChangeAuthor}
                    />
                </div>
                <div>
                    <label htmlFor="state">작가</label>
                    <input
                        type="text"
                        name="state"
                        id="state"
                        value={state}
                        onChange={onChangeState}
                    />
                </div>
                <button type="submit">책 등록</button>
            </form>
        </div>
    );
}

export default BookRegister;
