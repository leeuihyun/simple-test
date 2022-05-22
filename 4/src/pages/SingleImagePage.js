import React, { useEffect, useCallback } from "react";
import MyPage from "../component/MyPage";
import { useSelector } from "react-redux";
import { withRouter } from "react-router-dom";
function SingleImagePage({ history }) {
    const { user } = useSelector((state) => state.user);

    useEffect(() => {
        if (!user) {
            history.push("/");
        }
    }, []);
    return <MyPage></MyPage>;
}

export default withRouter(SingleImagePage);
