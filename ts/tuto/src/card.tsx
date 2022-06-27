import React, { useCallback } from "react";
import styled from "styled-components";
import { todosActions } from "./reducers/todosSlice";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "./store";

const Box = styled.div`
    background-color: #996d15;
    color: white;
    display: flex;
    justify-content: space-between;
    width: 30rem;
    margin: 0.5rem;
`;

interface PropsType {
    id: number;
    children: any;
    key: number | string;
}

const Card: React.FC<PropsType> = ({ id, key, children }) => {
    const dispatch = useDispatch();
    const { todos } = useSelector((state: RootState) => state.todos);
    const onClick = (e: any) => {
        e.preventDefault();
        console.log(id);
    };
    const onClear = (e: any) => {
        console.log("clear");
    };
    const onDelete = useCallback(
        (e: any) => {
            console.log("delete");
            dispatch(
                todosActions.deleteTodo({
                    data: {
                        id: id,
                    },
                })
            );
        },
        [todos]
    );

    return (
        <Box onClick={onClick} key={key}>
            {children}
            <div
                style={{
                    right: 0,
                }}
            >
                <button onClick={onClear}>완료</button>
                <button onClick={onDelete}>삭제</button>
            </div>
        </Box>
    );
};

export default Card;
