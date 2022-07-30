import React from 'react';
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';

export const MyNav = () => {
    return (
        <>
            <Navbar bg="dark" variant="dark">
                <Container>
                    <Navbar.Brand href="#home">
                    <img
                        alt=""
                        src="../../src/favicon.svg"
                        width="30"
                        height="30"
                        className="d-inline-block align-top"
                    />{'  '}
                    REACT CHALLENGE - TBX
                    </Navbar.Brand>
                </Container>
            </Navbar>
        </>
    )
}
