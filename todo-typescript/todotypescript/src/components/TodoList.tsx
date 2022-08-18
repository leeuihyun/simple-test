import React from "react";
import TodoListItem from "./TodoListItem";

interface TodosListProps {
    todos: Todo[];
    toggle: ToggleTodo;
}
function TodoList({ todos, toggle }: TodosListProps) {
    return (
        <ul>
            {todos.map((todo) => (
                <TodoListItem
                    todo={todo}
                    toggle={toggle}
                    key={todo.text}
                ></TodoListItem>
            ))}
        </ul>
    );
}

export default TodoList;
