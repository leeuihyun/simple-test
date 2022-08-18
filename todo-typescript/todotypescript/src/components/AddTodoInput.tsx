import React, { ChangeEvent, useCallback, useState } from "react";

interface AddTodoInputProps {
    //addTodo: (newTodo: string) => void;
    addTodo: AddTodo;
}
function AddTodoInput({ addTodo }: AddTodoInputProps) {
    const [txt, setTxt] = useState("");
    const onChangeInput = useCallback((e: ChangeEvent<HTMLInputElement>) => {
        setTxt(e.currentTarget.value);
    }, []);
    const onClickSubmit = (e: React.MouseEvent<HTMLButtonElement>) => {
        e.preventDefault();
        console.log(txt);
        addTodo(txt);
        setTxt("");
    };
    return (
        <>
            <input
                type="text"
                placeholder="Add Todo"
                onChange={onChangeInput}
                value={txt}
            />
            <button onClick={onClickSubmit}>Add</button>
        </>
    );
}

export default AddTodoInput;
