import React from "react";

interface TodoListItemProps {
    todo: Todo;
}

// 제너릭함수의 <> 안은 매개변수의 타입을 의미한다.

function TodoListItem({ todo }: TodoListItemProps) {
    return (
        <li>
            <input type="checkbox" checked={todo.complete} />
            {todo.text}
        </li>
    );
}

export default TodoListItem;
