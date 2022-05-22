import React from "react";
import "./App.css";
import { Route } from "react-router-dom";
import Main from "./pages/Main";
import ImagesPage from "./pages/ImagesPage";
import SingleImagePage from "./pages/SingleImagePage";
import ImageRegister from "./pages/ImageRegister";
import Login from "./pages/Login";
import SignUp from "./pages/SignUp";

function App() {
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
