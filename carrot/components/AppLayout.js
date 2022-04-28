import React, { useCallback, useState, useEffect } from "react";
import { Navbar, Nav, NavDropdown, Container } from "react-bootstrap";
import firebase from "firebase/app";
import "firebase/firestore";
//.onSnapshot(function (doc) {
//    console.log(doc.data());
//});

function AppLayout({ children }) {
    const obj = [
        {
            name: "1",
            price: 1,
        },
    ];
    useEffect(() => {
        try {
            firebase
                .firestore()
                .collection("products")
                .get()
                .then((res) => {
                    res.forEach((doc) => {
                        console.log(doc.data());
                        obj.push(doc.data());
                    });
                });
        } catch (error) {
            console.log(error);
        }
    }, []);
    const onClick = () => {
        console.log(obj);
    };
    return (
        <>
            <Navbar bg="light" expand="lg">
                <Container>
                    <Navbar.Brand href="#home" onClick={onClick}>
                        Carrot
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="me-auto">
                            <Nav.Link href="#home">Home</Nav.Link>
                            <Nav.Link href="#link">Link</Nav.Link>
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
        </>
    );
}

export default AppLayout;
