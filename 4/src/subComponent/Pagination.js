import React, { useCallback } from "react";
import styled from "styled-components";

const Box = styled.div`
    width: 100%;
    height: 20vh;
    display: flex;
    justify-content: center;
    align-items: center;
    font-family: "Ssurround";
    ul {
        display: flex;
        li + li {
            margin-left: 1rem;
        }
    }
`;
const PrevButton = styled.button`
    background-color: white;
    color: black;
`;
const NextButton = styled.button`
    background-color: white;
    color: black;
`;

function Pagination({ setCurrentPage, viewContentCount, length }) {
    const pageNumbers = [];
    for (let i = 1; i <= Math.ceil(length / viewContentCount); i++) {
        pageNumbers.push(i);
    }
    return (
        <Box>
            <PrevButton>이전</PrevButton>
            <ul>
                {pageNumbers.map((item) => (
                    <li key={item}>
                        <button onClick={() => setCurrentPage(item)}>
                            {item}
                        </button>
                    </li>
                ))}
            </ul>
            <NextButton>다음</NextButton>
        </Box>
    );
}

export default Pagination;
