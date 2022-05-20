import React from "react";
import styled from "styled-components";

const Box = styled.div`
    width: 100%;
    height: 10vh;
    font-family: "Ssurround";
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
    font-size: 3rem;
    font-weight: bold;
    text-shadow: 2px 2px 2px gray;
`;
function TextBoxWrapper({ children }) {
    return <Box>{children}</Box>;
}

export default TextBoxWrapper;
