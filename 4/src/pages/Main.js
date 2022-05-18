import React, { useCallback } from "react";
import { useSelector, useDispatch } from "react-redux";
import { LOG_IN_REQUEST } from "../reducers/user";
import styled from "styled-components";
import MainLayout from "../component/MainLayout";

function Main() {
    return (
        <div>
            <MainLayout></MainLayout>
        </div>
    );
}

export default Main;
