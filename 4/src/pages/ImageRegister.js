import React, { useCallback, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import useTool from "../hook/useTool";
import { v4 as uuidv4 } from "uuid";
import { ADD_DATA_REQUEST } from "../reducers/images";
import Dropzone from "../component/util/Dropzone";

function ImageRegister() {
    const dispatch = useDispatch();
    const [name, onChangeName, setName] = useTool("");
    const [tag, setTag] = useState("");
    const [explanation, onChangeExplanation, setExplanation] = useTool("");
    const [file, setFile] = useState(null);
    const [author, onChangeAuthor, setAuthor] = useTool("");

    const onChangeTag = (e) => {
        setTag(e.target.value);
    };
    const selectList = [
        "일상",
        "자연",
        "우주",
        "미래",
        "공부",
        "사랑",
        "하늘",
        "상상",
    ];

    const { user } = useSelector((state) => state.user);
    const userId = user?.id;
    //tag,explanation,file,
    const onSubmitForm = useCallback(
        (e) => {
            e.preventDefault();
            dispatch({
                type: ADD_DATA_REQUEST,
                data: {
                    User: {
                        id: userId,
                    },
                    Data: {
                        id: uuidv4(),
                        name: name,
                        tag: tag,
                        author: author,
                        explanation: explanation,
                        file: file,
                    },
                },
            });

            if (localStorage.data === undefined) {
                localStorage.setItem("data", JSON.stringify([]));
            }
            let dataFile = JSON.parse(localStorage.getItem("data"));
            dataFile.unshift({
                User: {
                    id: userId,
                },
                Data: {
                    id: uuidv4(),
                    name: name,
                    tag: tag,
                    author: author,
                    explanation: explanation,
                    file: file,
                },
            });
            setName("");
            setAuthor("");
            setExplanation("");
            setTag("");
            setFile("");
            localStorage.setItem("data", JSON.stringify(dataFile));
        },
        [name, author, explanation, tag, file]
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
                    <label htmlFor="tag">분류</label>
                    <select value={tag} onChange={onChangeTag}>
                        {selectList.map((v) => (
                            <option value={v} key={v}>
                                {v}
                            </option>
                        ))}
                    </select>
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
                    <label htmlFor="explanation">설명</label>
                    <input
                        type="text"
                        name="explanation"
                        id="explanation"
                        value={explanation}
                        onChange={onChangeExplanation}
                    />
                </div>
                <Dropzone setFile={setFile}></Dropzone>
                <button type="submit">등록</button>
            </form>
        </div>
    );
}

export default ImageRegister;
