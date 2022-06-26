import React, { useState } from "react";
import styled from "styled-components";
import { useCallback } from "react";
const Header = styled.div`
    color: black;
    text-transform: uppercase;
    font-size: 40px;

    //justify-content: space-between;
    text-align: center;
    padding: 1rem;
    z-index: 1;
    color: white;
    label {
        background-color: blue;
    }
`;

const Hambuger = styled.div`
    position: absolute;
    left: 5rem;
    background-color: #104279;
    color: white;
    font-size: 40px;
`;
const InputField = styled.div`
    display: flex;
    justify-content: center;

    form {
        display: flex;
        width: 90%;
        justify-content: center;
        position: relative;
        align-items: center;
        input {
            border-radius: 50px;
            width: 100%;
            font-size: 25px;
            padding: 20px 30px;
            border: none;
            transition: 0.2s;
            box-shadow: inset 0 0 5px black;
        }
        input:focus {
            box-shadow: 0 0 1000px #104279;
            outline: none;
        }
        button {
            position: absolute;
            width: 50px;
            height: 50px;
            margin: 12px;
            border-radius: 50px;
            font-size: 15px;
            right: 0px;
            transition: 0.2s all;
            box-shadow: 0 0 10px black;
            background-color: #2f74c0;
            color: white;
        }
        button:hover {
            background-color: #388ae2;
        }
        button :active {
            transform: scale(0.8);
            box-shadow: 0 0 5px black;
        }
    }
`;
const App: React.FC = () => {
    const [text, setText] = useState<string>("");

    const onClick = useCallback(
        (e: React.FormEvent) => {
            e.preventDefault();
            console.log(text);
        },
        [text]
    );
    return (
        <div>
            <Header>
                <Hambuger>menu</Hambuger>
                <label>TASK</label>
            </Header>
            <InputField>
                <form>
                    <input
                        type="text"
                        placeholder="push todo"
                        onChange={(e) => {
                            setText(e.target.value);
                        }}
                        value={text}
                    />
                    <button onClick={onClick}>Go</button>
                </form>
            </InputField>
        </div>
    );
};

export default App;
