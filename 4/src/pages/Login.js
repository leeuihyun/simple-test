import React, { useState, useCallback, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import useTool from "../hook/useTool";
import { LOG_IN_REQUEST } from "../reducers/user";
import { withRouter } from "react-router-dom";

function Login({ history }) {
    const [email, onChangeEmail, setEmail] = useTool("");
    const [password, onChangePassword, setPassword] = useTool("");

    const dispatch = useDispatch();
    const { user } = useSelector((state) => state.user);
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
    useEffect(() => {
        if (user) {
            history.push("/");
        }
    }, [user]);

    return (
        <div>
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
        </div>
    );
}

export default withRouter(Login);
