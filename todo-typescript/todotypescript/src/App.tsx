import React, { useState } from "react";
import TodoListItem from "./components/TodoListItem";

const todo: Array<Todo> = [
    { text: "walk", complete: false },
    { text: "second", complete: true },
];

function App() {
    return (
        <>
            {todo.map((v) => (
                <TodoListItem todo={v} />
            ))}
        </>
    );
}

export default App;
