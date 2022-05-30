import React from "react";
import "./App.css";
import { Route } from "react-router-dom";
import Main from "./pages/Main";
import ImagesPage from "./pages/ImagesPage";
import SingleImagePage from "./pages/SingleImagePage";
import ImageRegister from "./pages/ImageRegister";
import Login from "./pages/Login";
import SignUp from "./pages/SignUp";
import { useDispatch } from "react-redux";
import { useEffect } from "react";
import { CHECK_ALL_USERS } from "./reducers/user";

function App() {
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch({
            type: CHECK_ALL_USERS,
        });
    }, []);

    return (
        <>
            <Route exact path="/" component={Main} />
            <Route path="/images" component={ImagesPage} />
            <Route path="/image" component={SingleImagePage} />
            <Route path="/imageregister" component={ImageRegister} />
            <Route path="/login" component={Login} />
            <Route path="/signup" component={SignUp} />
        </>
    );
}

export default App;
