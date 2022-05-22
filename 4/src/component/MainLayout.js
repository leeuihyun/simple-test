import React from "react";
import styled from "styled-components";
import about from "/Users/iuihyeon/Desktop/or/simple-test/4/src/images/galaxy-g6d8c6804f_1920.jpg";
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
    const { dataList } = useSelector((state) => state.images);
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
                                <Link to="/imageregister">이미지등록</Link>
                            </div>
                        </li>
                        <li>
                            <div>
                                <Link to="/signup">회원가입</Link>
                            </div>
                        </li>
                        <li>
                            <div>
                                <Link to="/image">임시 마이 페이지</Link>
                            </div>
                        </li>
                    </ul>
                </div>
            </Header>
            <About>
                <img src={about} alt="img" />
                <div className="text">멋진 이미지 공유하기</div>
            </About>
            <Introduce>
                <div className="intro">
                    멋진 사진을 공유해 보세요! <br />
                    많은 이미지가 있으니 태그 별로 찾아보세요!
                    <br />
                    검색기능을 통해서 이미지를 찾아보세요!
                    <br />
                </div>
                <div className="intro_image">
                    <p>
                        친구들과 함께 사용하세요! <br /> https://www.naver.com
                        클릭시 복사 기능 만드려 함
                    </p>
                    <img src={person} alt="person_image" />
                </div>
            </Introduce>
            <TextBoxWrapper>혹시 이런 사진을 찾고 계셨나요 ?</TextBoxWrapper>
            <RotateBox></RotateBox>
            <div>좋아요를 많이 받은 랭킹입니다 10위까지 표시</div>
            <Footer>made by Vanc</Footer>
        </Container>
    );
}

export default MainLayout;
