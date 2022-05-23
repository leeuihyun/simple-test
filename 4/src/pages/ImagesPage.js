import axios from "axios";
import React, { useState, useCallback, useEffect } from "react";
import styled from "styled-components";
import useTool from "../hook/useTool";
import Posts from "../component/Posts";
import Header from "../subComponent/Header";
import Pagination from "../subComponent/Pagination";
import { useSelector, useDispatch } from "react-redux";

const Container = styled.div`
    width: 100%;
    height: 100%;
`;
const Box = styled.div`
    display: flex;
`;
function ImagesPage() {
    const [currentPage, setCurrentPage] = useState(1);
    const [viewContentCount, setViewContentCount] = useState(10);
    const [data, setData] = useState([]);
    const { dataList } = useSelector((state) => state.images);

    /*useEffect(() => {
        async function getData() {
            const res = await axios.get(
                "https://jsonplaceholder.typicode.com/posts"
            );
            setData(res.data);
        }
        getData();
    }, []);*/

    const sliceLastIndex = currentPage * viewContentCount;
    const sliceFirstIndex = sliceLastIndex - viewContentCount;
    function currentData(arr) {
        let answer = 0;
        answer = arr.slice(sliceFirstIndex, sliceLastIndex);
        return answer;
    }

    return (
        <Container>
            <Posts data={currentData(dataList)}></Posts>
            <Pagination
                length={dataList.length}
                setCurrentPage={setCurrentPage}
                viewContentCount={viewContentCount}
            ></Pagination>
        </Container>
    );
}

export default ImagesPage;
