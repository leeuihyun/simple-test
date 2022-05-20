import React from "react";
import styled from "styled-components";

const Ab = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 100;
    width: 100%;
    height: 100vh;
    img {
        width: 100%;
        height: 100%;
        filter: brightness(55%);
        //opacity: 0.6;
    }
    .text {
        padding: 1rem;
        position: absolute;
        color: white;
        font-family: "Ssurround";
        font-weight: bold;
        font-size: 5rem;
        top: 50%;
        left: 50%;
        text-shadow: 4px 4px 4px gray;
        transform: translate(-50%, -50%); //중앙 정렬 하기 위함.
    }
    position: relative;
`;

function About({ children }) {
    return <Ab>{children}</Ab>;
}

export default About;
