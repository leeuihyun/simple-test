import React, { useState } from "react";
import TodoList from "./components/TodoList";
import AddTodoInput from "./components/AddTodoInput";

const initialTodos: Todo[] = [
    { text: "walk", complete: false },
    { text: "second", complete: true },
];

function App() {
    const [todos, setTodos] = useState(initialTodos);
    const toggle: ToggleTodo = (selectTodo) => {
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
    const addTodo: AddTodo = (newTodo) => {
        setTodos([...todos, { text: newTodo, complete: false }]);
    };
    return (
        <>
            <TodoList todos={todos} toggle={toggle}></TodoList>
            <AddTodoInput addTodo={addTodo}></AddTodoInput>
        </>
    );
}

export default App;
