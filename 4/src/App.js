import React from "react";
import { Route } from "react-router-dom";
import Main from "./pages/Main";
import Books from "./pages/Books";
import Book from "./pages/Book";
import BookRegister from "./pages/BookRegister";
import Login from "./pages/Login";
import SignUp from "./pages/SignUp";

function App() {
    return (
        <>
            <Route exact path="/" component={Main} />
            <Route path="/books" component={Books} />
            <Route path="/book" component={Book} />
            <Route path="/bookregister" component={BookRegister} />
            <Route path="/login" component={Login} />
            <Route path="/signup" component={SignUp} />
        </>
    );
}

export default App;
