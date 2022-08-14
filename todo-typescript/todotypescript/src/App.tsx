import React, { useState } from "react";
import TodoListItem from "./components/TodoListItem";

const initialTodos: Array<Todo> = [
    { text: "walk", complete: false },
    { text: "second", complete: true },
];

function App() {
    const [todos, setTodos] = useState(initialTodos);
    return (
        <>
            {initialTodos.map((v) => (
                <TodoListItem todo={v} />
            ))}
        </>
    );
}

export default App;
