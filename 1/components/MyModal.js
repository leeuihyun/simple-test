import React, { useCallback, useState } from "react";
import { Input, Modal, Button, Form } from "antd";
import { useSelector, useDispatch } from "react-redux";
import { CREATE_USER_REQUEST } from "../reducers/user";

function MyModal({ isOpen, setIsOpen }) {
    const dispatch = useDispatch();
    const [username, setUsername] = useState("");
    const [content, setContent] = useState("");

    const onChangeUsername = useCallback((e) => {
        setUsername(e.target.value);
    }, []);
    const onChangeContent = useCallback((e) => {
        setContent(e.target.value);
    }, []);

    const onOk = () => {
        setIsOpen(false);
        onSubmitForm();
    };
    const onCancel = () => {
        setIsOpen(false);
    };
    const onSubmitForm = useCallback(() => {
        console.log(username);
        console.log(content);

        dispatch({
            type: CREATE_USER_REQUEST,
            data: {
                username: username,
                content: content,
            },
        });
    }, [username, content]);
    return (
        <Modal
            title="Add User"
            centered
            visible={isOpen}
            onOk={onOk}
            onCancel={onCancel}
        >
            <Form onSubmit={onSubmitForm}>
                <div>
                    <label htmlFor="username">username</label>
                    <Input
                        name="username"
                        value={username}
                        onChange={onChangeUsername}
                    ></Input>
                </div>
                <div>
                    <label htmlFor="content">Content</label>
                    <Input.TextArea
                        name="content"
                        value={content}
                        rows={4}
                        onChange={onChangeContent}
                    />
                </div>
            </Form>
        </Modal>
    );
}

export default MyModal;
