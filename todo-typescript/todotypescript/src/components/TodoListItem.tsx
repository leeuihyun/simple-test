import React from "react";

interface TodoListItemProps {
    todo: Todo;
    toggle: ToggleTodo;
}

// 제너릭함수의 <> 안은 매개변수의 타입을 의미한다.

function TodoListItem({ todo, toggle }: TodoListItemProps) {
    return (
        <li style={{ textDecoration: todo.complete ? "line-through" : "none" }}>
            <input
                type="checkbox"
                checked={todo.complete}
                onChange={() => toggle(todo)}
            />
            {todo.text}
        </li>
    );
}

export default TodoListItem;
