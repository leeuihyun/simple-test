import React, { useState, useCallback, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { withRouter } from "react-router-dom";
import LoginLayout from "../component/LoginLayout";

function Login({ history }) {
    const { user } = useSelector((state) => state.user);

    useEffect(() => {
        if (user) {
            history.push("/");
        }
    }, [user]);

    return <LoginLayout></LoginLayout>;
}

export default withRouter(Login);
