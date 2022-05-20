import React from "react";
import styled, { keyframes } from "styled-components";
import RotationBook from "./RotationBook";

const RotationAnimation = keyframes`
    from{
        transform : translateX(-100%);
    }
    to{
        transform : translateX(100%);
    }
`;

const RotateWrapper = styled.div`
    display: flex;
    animation: ${RotationAnimation} 4s 1s ease-in-out infinite alternate;
    margin-left: 5rem;
`;
const Box = styled.div`
    width: 100%;
    height: 30vh;
    background-color: black;
    display: flex;
    align-items: center;
    justify-content: center;
`;

function RotateBox({ children }) {
    //const randomBookLength = Math.floor(Math.random() * booksList.length); RotationBook의 props => booksList[randomBookLength] 주면 될 것 같음
    function arrPush() {
        const arr = [];
        for (let i = 0; i < 5; i++) {
            arr.push(
                <RotateWrapper>
                    <RotationBook />
                </RotateWrapper>
            );
        }
        return arr;
    }
    return <Box>{arrPush()}</Box>;
}

export default RotateBox;
