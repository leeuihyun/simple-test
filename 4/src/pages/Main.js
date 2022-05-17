import React, { useCallback } from "react";
import { useSelector, useDispatch } from "react-redux";
import { LOG_IN_REQUEST } from "../reducers/user";

function Main() {
    const dispatch = useDispatch();
    return (
        <div>
            <div>메인헤더</div>
            <div>전체화면 이미지 및 홍보</div>
            <div>개발자소개</div>
            <div>어떤식으로 개발했는가?</div>
        </div>
    );
}

export default Main;
