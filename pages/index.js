import React, { useState, useCallback } from "react";
import { useSelector, useDispatch } from "react-redux";

const index = () => {
    const dispatch = useDispatch();
    const { users } = useSelector((state) => state.user);
    const onClickAddUser = useCallback(() => {}, []);
    const onClickEditUser = useCallback(() => {}, []);
    const onClickDeleteUser = useCallback(() => {});
    return (
        <div>
            <h2>User List</h2>
            <button onClick={onClickAddUser}>추가</button>
            <table>
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>FirstName</th>
                        <th>LastName</th>
                        <th>UserName</th>
                        <th>Age</th>
                        <th>Salary</th>
                    </tr>
                </thead>
                <tbody>
                    {users.map((user) => (
                        <tr key={user.id}>
                            <td>{user.firstName}</td>
                            <td>{user.lastName}</td>
                            <td>{user.username}</td>
                            <td>{user.age}</td>
                            <td>{user.salary}</td>
                            <td>
                                <button onClick={onClickEditUser}>편집</button>
                                <button onClick={onClickDeleteUser}>
                                    삭제
                                </button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default index;
