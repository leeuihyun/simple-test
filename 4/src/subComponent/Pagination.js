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
        padding: 0;
        display: flex;
        li {
            margin: 0 auto;
            list-style: none;
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
            <div>
                <ul>
                    {pageNumbers.map((item) => (
                        <li key={item}>
                            <button onClick={() => setCurrentPage(item)}>
                                {item}
                            </button>
                        </li>
                    ))}
                </ul>
            </div>

            <NextButton>다음</NextButton>
        </Box>
    );
}

export default Pagination;
