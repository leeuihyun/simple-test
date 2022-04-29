import React, { useState, useCallback } from "react";
import { useDispatch } from "react-redux";
import styled from "styled-components";
import { ADD_PRODUCT_REQUEST } from "../reducers/product";
import Router from "next/router";

const Wrapper = styled.div`
    padding: 5px;
    display: flex;
    & + & {
        margin-top: 5px;
    }
    .button {
        justify-content: center;
        align-items: center;
    }
`;

const Label = styled.div`
    font-size: 1rem;
    color: orange;
`;

const Input = styled.input`
    font-size: 1rem;
    width: 15rem;
`;

const SaveButton = styled.div`
    border-radius: 5px;
    font-size: 1rem;
`;

const TextArea = styled.textarea`
    border-radius: 3px;
    width: 15rem;
    font-size: 1rem;
`;
function UploadProduct() {
    const dispatch = useDispatch();

    const [name, setName] = useState("");
    const [content, setContent] = useState("");
    const [price, setPrice] = useState(0);
    const onSubmitForm = useCallback(
        (e) => {
            dispatch({
                type: ADD_PRODUCT_REQUEST,
                data: {
                    name: name,
                    price: price,
                    content: content,
                },
            });
            console.log("clear");
            Router.push("/");
        },
        [name, content, price]
    );
    const onChangeName = useCallback((e) => {
        setName(e.target.value);
    }, []);
    const onChangeContent = useCallback((e) => {
        setContent(e.target.value);
    }, []);
    const onChangePrice = useCallback((e) => {
        setPrice(e.target.value);
    }, []);
    return (
        <div style={{ padding: "20px" }}>
            <h1 style={{ backgroundColor: "orange" }}>Carrot</h1>
            <form onSubmit={onSubmitForm}>
                <Wrapper>
                    <Label name="name">이름</Label>
                    <Input name="name" value={name} onChange={onChangeName} />
                </Wrapper>
                <Wrapper>
                    <Label name="content">설명</Label>
                    <TextArea
                        name="content"
                        value={content}
                        onChange={onChangeContent}
                    />
                </Wrapper>
                <Wrapper>
                    <Label name="price">가격</Label>
                    <Input
                        name="price"
                        value={price}
                        onChange={onChangePrice}
                    />
                </Wrapper>

                <SaveButton>
                    <button type="submit">버튼</button>
                </SaveButton>
            </form>
        </div>
    );
}

export default UploadProduct;
