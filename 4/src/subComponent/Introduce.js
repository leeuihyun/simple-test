import React from "react";
import styled from "styled-components";

const Intro = styled.div`
    width: 100%;
    height: 30vh;
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    .intro {
        font-family: "Ssurround";
        text-align: center;
        color: black;
    }
    .intro_image {
        display: flex;
        float: right;
        p {
            font-family: "Ssurround";
        }
        img {
            width: 4rem;
            height: 4rem;
        }
    }
`;
function Introduce({ children }) {
    return <Intro>{children}</Intro>;
}

export default Introduce;
