import React, { useState, useCallback } from "react";
import { useSelector, useDispatch } from "react-redux";
import MyModal from "../components/MyModal";

const index = () => {
    const dispatch = useDispatch();
    const { users } = useSelector((state) => state.user);
    const onClickAddUser = useCallback(() => {
        setIsOpen(true);
    }, []);
    const onClickEditUser = useCallback(() => {}, []);
    const onClickDeleteUser = useCallback(() => {});
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div>
            <h2>User List</h2>
            <button onClick={onClickAddUser}>추가</button>
            <table>
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>username</th>
                        <th>content</th>
                    </tr>
                </thead>
                <tbody>
                    {users.map((user) => (
                        <tr key={user.id}>
                            <td>{user.username}</td>
                            <td>{user.content}</td>
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
            <MyModal isOpen={isOpen} setIsOpen={setIsOpen} />
        </div>
    );
};

export default index;
