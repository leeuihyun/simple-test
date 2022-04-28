import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import wrapper from "../store/configureStore";

function _app({ Component }) {
    return <Component />;
}

export default wrapper.withRedux(_app);
