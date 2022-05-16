import React, { useCallback } from "react";
import db from "../firebase";
import axios from "axios";

function Main() {
    const userDummy = {
        name: "dummy",
        age: "26",
        job: "programmer",
        city: "seoul",
    };
    const onClickButton = useCallback(() => {
        axios
            .post(
                "https://book-app-37cc0-default-rtdb.firebaseio.com/users.json",
                userDummy
            )
            .then((res) => {
                console.log(res);
            });
    }, []);
    return (
        <div>
            <div>메인헤더</div>
            <div>전체화면 이미지 및 홍보</div>
            <div>개발자소개</div>
            <div>어떤식으로 개발했는가?</div>
            <div>
                <button onClick={onClickButton}>테스트버튼</button>
            </div>
        </div>
    );
}

export default Main;
