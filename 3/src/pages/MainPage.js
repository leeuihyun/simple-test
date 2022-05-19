import React, { useState, useCallback } from "react";
import { useSelector, useDispatch } from "react-redux";
import { addItem } from "../store/addItem";
import { Link } from "react-router-dom";

function MainPage() {
    const [name, setName] = useState("");
    const [desp, setDesp] = useState("");
    const [price, setPrice] = useState(0);

    const dispatch = useDispatch();

    const onChangeName = useCallback((e) => {
        setName(e.target.value);
    }, []);
    const onChangeDesp = useCallback((e) => {
        setDesp(e.target.value);
    }, []);
    const onChangePrice = useCallback((e) => {
        setPrice(e.target.value);
    }, []);
    const onSubmitForm = useCallback(
        (e) => {
            e.preventDefault();
            dispatch(
                addItem({
                    name: name,
                    desp: desp,
                    price: price,
                })
            );
        },
        [name, desp, price]
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
                    <label htmlFor="desp">설명</label>
                    <input
                        type="text"
                        name="desp"
                        id="desp"
                        value={desp}
                        onChange={onChangeDesp}
                    />
                </div>
                <div>
                    <label htmlFor="price">가격</label>
                    <input
                        type="text"
                        name="price"
                        id="price"
                        value={price}
                        onChange={onChangePrice}
                    />
                </div>
                <div>
                    <button type="submit">추가</button>
                </div>
            </form>
            <Link to="/list">리스트</Link>
        </div>
    );
}

export default MainPage;
