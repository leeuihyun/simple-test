import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

const Head = styled.div`
    z-index: 999;
    position: fixed;
    display: flex;
    left: 0;
    top: 0;
    width: 100%;
    height: 10vh;
    background-color: white;
    color: black;
    justify-content: space-evenly;
    align-items: center;
    .logo {
        font-family: "Ssurround";
        font-size: 1.5rem;
    }
    .navigation {
        font-family: "Ssurround";
        ul {
            display: flex;
            list-style: none;
        }
        li + li {
            margin-left: 3rem;
        }
    }
    a {
        text-decoration: none;
        color: black;
    }
`;
function Header({ children }) {
    return (
        <Head>
            <div className="logo">
                <Link to="/">Y•MG picker</Link>
            </div>
            {children}
        </Head>
    );
}

export default Header;
