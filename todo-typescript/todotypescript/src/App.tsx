import React, { useState } from "react";
import TodoListItem from "./components/TodoListItem";

const initialTodos: Array<Todo> = [
    { text: "walk", complete: false },
    { text: "second", complete: true },
];

function App() {
    const [todos, setTodos] = useState(initialTodos);
    const toggle: ToggleTodo = (selectTodo: Todo) => {
        const newTodos = todos.map((todo) => {
            if (selectTodo === todo) {
                return {
                    ...todo,
                    complete: !todo.complete,
                };
            }
            return todo;
        });
        setTodos(newTodos);
    };
    return (
        <>
            <TodoListItem todo={todos[0]} toggle={toggle} />
            <TodoListItem todo={todos[1]} toggle={toggle} />
        </>
    );
}

export default App;
