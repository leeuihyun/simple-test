import React from "react";
import styled from "styled-components";
import about from "/Users/iuihyeon/Desktop/or/simple-test/4/src/images/reading-g147138a09_1920.jpg";
import person from "/Users/iuihyeon/Desktop/or/simple-test/4/src/images/white-male-gc118c610a_1280.jpg";
import { useSelector } from "react-redux";
import Footer from "../subComponent/Footer";
import Header from "../subComponent/Header";
import About from "../subComponent/About";
import Introduce from "../subComponent/Introduce";
import TextBoxWrapper from "./TextBoxWrapper";
import RotateBox from "../subComponent/RotateBox";
import { Link } from "react-router-dom";

const Container = styled.div`
    width: 100%;
    height: 100%;
`;
function MainLayout() {
    const { booksList } = useSelector((state) => state.books);
    return (
        <Container>
            <Header>
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
                        클릭시 복사 기능 만드려 함
                    </p>
                    <img src={person} alt="person_image" />
                </div>
            </Introduce>
            <TextBoxWrapper>이런 책들은 어떠신가요 ?</TextBoxWrapper>
            <RotateBox></RotateBox>
            <Footer>made by Vanc</Footer>
        </Container>
    );
}

export default MainLayout;
