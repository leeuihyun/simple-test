import React from "react";
import styled from "styled-components";

const FooterBox = styled.div`
    display: flex;
    font-family: "Ssurround";
    font-size: 2rem;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 10vh;
    background-color: white;
    color: black;
`;

function Footer({ children }) {
    return <FooterBox>{children}</FooterBox>;
}

export default Footer;
