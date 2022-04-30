import React, { useCallback, useState, useEffect } from "react";
import { Navbar, Nav, NavDropdown, Container } from "react-bootstrap";
import { useSelector, useDispatch } from "react-redux";
import firebase from "firebase/app";
import "firebase/firestore";
import { GET_PRODUCT_REQUEST } from "../reducers/product";
import Link from "next/link";
import styled from "styled-components";
import ProductCard from "./ProductCard";

//.onSnapshot(function (doc) {
//    console.log(doc.data());
//});

function AppLayout({ children }) {
    return (
        <div>
            <Navbar bg="light" expand="lg">
                <Container>
                    <Navbar.Brand href="#home">Carrot</Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="me-auto">
                            <Nav.Link href="#home">Home</Nav.Link>
                            <Nav.Link href="/check">Check</Nav.Link>
                            <NavDropdown
                                title="Dropdown"
                                id="basic-nav-dropdown"
                            >
                                <NavDropdown.Item href="#action/3.1">
                                    Action
                                </NavDropdown.Item>
                                <NavDropdown.Item href="#action/3.2">
                                    Another action
                                </NavDropdown.Item>
                                <NavDropdown.Item href="#action/3.3">
                                    Something
                                </NavDropdown.Item>
                                <NavDropdown.Divider />
                                <NavDropdown.Item href="#action/3.4">
                                    Separated link
                                </NavDropdown.Item>
                            </NavDropdown>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
            <Link href="/uploadProduct">
                <a>버튼</a>
            </Link>
            {children &&
                children.map((v) => <ProductCard data={v}></ProductCard>)}
        </div>
    );
}

export default AppLayout;
