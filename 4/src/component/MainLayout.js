import React from "react";
import styled, { keyframes } from "styled-components";
import logo from "../images/logo_transparent.png";
import about from "/Users/iuihyeon/Desktop/or/simple-test/4/src/images/reading-g147138a09_1920.jpg";
import person from "/Users/iuihyeon/Desktop/or/simple-test/4/src/images/white-male-gc118c610a_1280.jpg";
import { Link } from "react-router-dom";

const Container = styled.div`
    width: 100%;
    height: 100%;
`;
const Header = styled.div`
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
const About = styled.div`
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
const Introduce = styled.div`
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
const RotationAnimation = keyframes`
    from{
        transform : translateX(0px);
    }
    to{
        transform : translateX(50px);
    }
`;
const RotateWrapper = styled.div`
    width: 30px;
    height: 30px;
    background-color: white;
    animation: ${RotationAnimation} 2s 1s ease-in-out infinite alternate;
`;
const RotateBox = styled.div`
    width: 100%;
    height: 30vh;
    background-color: black;
    display: flex;
    align-items: center;
    justify-content: center;
`;
function MainLayout() {
    return (
        <Container>
            <Header>
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
            </Header>
            <About>
                <img src={about} alt="img" />
                <div className="text">서로의 책 공유하기</div>
            </About>
            <Introduce>
                <div className="intro">
                    서로의 책을 공유하고 <br />
                    다양한 책들이 당신을 기다리고 있습니다!
                    <br />
                    삶의 질을 향상 시켜 보세요!
                    <br />
                    찾고 있는 책이 있다면 검색기능을 사용해보세요!
                </div>
                <div className="intro_image">
                    <p>
                        친구들과 함께 사용하세요! <br /> https://www.naver.com
                    </p>
                    <img src={person} alt="person_image" />
                </div>
            </Introduce>
            <RotateBox>
                <RotateWrapper></RotateWrapper>
            </RotateBox>
        </Container>
        /*`<div class="container">
            <header></header> dd
            <section class="about"></section> dd
            <section class="introduce"></section> dd
            <section className="callAction"></section>
            등록되어 있는 책 보기
            <section class="how"></section>
            <footer></footer>
        </div>*/
    );
}

export default MainLayout;
