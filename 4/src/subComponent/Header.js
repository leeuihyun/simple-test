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
function Header() {
    return (
        <Head>
            <div className="logo">Books</div>
            <div className="navigation">
                <ul>
                    <li>
                        <div>
                            <Link to="/login">로그인</Link>
                        </div>
                    </li>
                    <li>
                        <div>
                            <Link to="/bookregister">책등록</Link>
                        </div>
                    </li>
                    <li>
                        <div>
                            <Link to="/signup">회원가입</Link>
                        </div>
                    </li>
                </ul>
            </div>
        </Head>
    );
}

export default Header;
