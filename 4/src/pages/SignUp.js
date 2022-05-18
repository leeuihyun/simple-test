import React, { useCallback } from "react";
import { useSelector, useDispatch } from "react-redux";
import useTool from "../hook/useTool";
import { SIGN_UP_REQUEST } from "../reducers/user";
import { Link } from "react-router-dom";

function SignUp() {
    const [name, onChangeName, setName] = useTool("");
    const [city, onChangeCity, setCity] = useTool("");
    const [age, onChangeAge, setAge] = useTool("");
    const [email, onChangeEmail, setEmail] = useTool("");
    const [password, onChangePassword, setPassword] = useTool("");

    const dispatch = useDispatch();
    const onSubmitForm = useCallback(
        (e) => {
            e.preventDefault();
            dispatch({
                type: SIGN_UP_REQUEST,
                data: {
                    email: email,
                    password: password,
                    name: name,
                    city: city,
                    age: age,
                },
            });
            setName("");
            setCity("");
            setAge("");
            setEmail("");
            setPassword("");
        },
        [name, city, age, email, password]
    );
    return (
        <div>
            <div>
                <Link to="/login">로그인페이지</Link>
            </div>
            <form onSubmit={onSubmitForm}>
                <div>
                    <label htmlFor="name">이름</label>
                    <input
                        type="text"
                        name="name"
                        value={name}
                        id="name"
                        onChange={onChangeName}
                    />
                </div>
                <div>
                    <label htmlFor="city">거주지</label>
                    <input
                        type="text"
                        name="city"
                        value={city}
                        id="city"
                        onChange={onChangeCity}
                    />
                </div>
                <div>
                    <label htmlFor="age">나이</label>
                    <input
                        type="text"
                        name="age"
                        value={age}
                        id="age"
                        onChange={onChangeAge}
                    />
                </div>
                <div>
                    <label htmlFor="email">이메일</label>
                    <input
                        type="text"
                        name="email"
                        value={email}
                        id="email"
                        onChange={onChangeEmail}
                    />
                </div>
                <div>
                    <label htmlFor="password">비밀번호</label>
                    <input
                        type="password"
                        name="password"
                        value={password}
                        id="password"
                        onChange={onChangePassword}
                    />
                </div>
                <div>
                    <button type="submit">버튼</button>
                </div>
            </form>
        </div>
    );
}

export default SignUp;
