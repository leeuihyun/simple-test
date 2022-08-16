type Todo = {
    text: string;
    complete: boolean;
};

type ToggleTodo = (selectTodo: Todo) => void;
