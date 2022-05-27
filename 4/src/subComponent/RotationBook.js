import React, { useCallback } from "react";
import styled from "styled-components";
import { useSelector } from "react-redux";
import { v4 as uuidv4 } from "uuid";
const Box = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;

    width: 7rem;
    height: 10rem;
    border-radius: 5px;
    background-color: white;
`;
function RotationBook() {
    const { dataList } = useSelector((state) => state.images);
    const randomIndex = Math.floor(Math.random() * dataList.length);
    const onClickImg = useCallback((e) => {
        console.log(e.target);
        console.log(e.currentTarget.getAttribute("value"));
    }, []);

    return (
        <div>
            {dataList ? (
                <Box key={uuidv4()}>
                    <img
                        src={dataList[randomIndex].Data.file.preview}
                        value={dataList[randomIndex].Data.id}
                        alt="preview"
                        width="100%"
                        height="100%"
                        onClick={onClickImg}
                    />
                </Box>
            ) : (
                <Box key={uuidv4()}>box</Box>
            )}
        </div>
    );
}

export default RotationBook;
