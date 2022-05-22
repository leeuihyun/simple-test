import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { withRouter } from "react-router-dom";

function MyPage({ history }) {
    const { user } = useSelector((state) => state.user);

    useEffect(() => {
        if (!user) {
            history.push("/");
        }
    }, []);
    return (
        <div>
            <h1>마이페이지</h1>
            {user.myImage.map((item) => (
                <div>
                    <img
                        src={item.preview}
                        alt="img"
                        width="100"
                        height="100"
                    />
                </div>
            ))}
        </div>
    );
}

export default withRouter(MyPage);
