import React from "react";
import wrapper from "../store/configureStore";

function _app({ Component }) {
    return <Component />;
}

export default wrapper.withRedux(_app);
