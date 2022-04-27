import React from "react";
import wrapper from "../store/configureStore";
import "antd/dist/antd.min.css";

function _app({ Component }) {
    return <Component />;
}

export default wrapper.withRedux(_app);
