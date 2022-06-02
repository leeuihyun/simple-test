import React, { useCallback } from "react";
import Header from "../subComponent/Header";
import useTool from "../hook/useTool";
import { useSelector, useDispatch } from "react-redux";
import { LOG_IN_REQUEST } from "../reducers/user";
import styled from "styled-components";
import { Link } from "react-router-dom";

const Container = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
`;
const FormHeaderFirst = styled.div`
    display: flex;
    margin-top: 10rem;
    width: 50vw;
    height: 10vh;
    justify-content: center;
    align-items: center;
    background-color: blue;
    color: red;
`;
const Form = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 50vw;
    height: 50vh;
    background-color: black;
    color: white;
`;

function LoginLayout() {
    const [email, onChangeEmail, setEmail] = useTool("");
    const [password, onChangePassword, setPassword] = useTool("");
    const dispatch = useDispatch();
    const onSubmitForm = useCallback(
        (e) => {
            e.preventDefault();
            dispatch({
                type: LOG_IN_REQUEST,
                data: {
                    email: email,
                    password: password,
                },
            });
            setEmail("");
            setPassword("");
        },
        [email, password]
    );
    return (
        <Container>
            <Header>
                <div className="navigation">
                    <ul>
                        <li>
                            <Link to="signup">회원가입</Link>
                        </li>
                    </ul>
                </div>
            </Header>

            <div>
                <FormHeaderFirst>asdkfjdsalfjdas</FormHeaderFirst>
                <Form>
                    <form onSubmit={onSubmitForm}>
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
                                type="text"
                                name="password"
                                value={password}
                                id="password"
                                onChange={onChangePassword}
                            />
                        </div>
                        <div>
                            <button type="submit">로그인</button>
                        </div>
                    </form>
                </Form>
            </div>
        </Container>
    );
}

export default LoginLayout;
