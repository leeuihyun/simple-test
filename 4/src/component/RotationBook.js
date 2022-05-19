import React, { useCallback } from "react";
import styled from "styled-components";

const Box = styled.div`
    width: 7rem;
    height: 10rem;
    border-radius: 5px;
    background-color: white;
`;
function RotationBook({ book }) {
    const onClickBox = useCallback((e) => {
        console.log("click box");
    }, []);
    return <Box onClick={onClickBox}>box</Box>;
}

export default RotationBook;
