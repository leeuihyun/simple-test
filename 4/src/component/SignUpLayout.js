import React, { useCallback } from "react";
import styled from "styled-components";
import Header from "../subComponent/Header";
import { useSelector, useDispatch } from "react-redux";
import useTool from "../hook/useTool";
import { SIGN_UP_REQUEST } from "../reducers/user";
import { Link } from "react-router-dom";

const Container = styled.div`
    width: 100%;
    height: 100%;
`;
const Form = styled.div`
    margin-top: 5rem;
`;
function SignUpLayout() {
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
        <Container>
            <Header>
                <div className="navigation">
                    <ul>
                        <li>
                            <Link to="/login">로그인</Link>
                        </li>
                    </ul>
                </div>
            </Header>
            <Form>
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
            </Form>
        </Container>
    );
}

export default SignUpLayout;
