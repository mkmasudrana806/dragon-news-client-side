import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { Outlet } from 'react-router-dom';
import Footer from '../Footer/Footer';
import Header from '../pages/SharedPages/Header/Header';
import LeftSideNav from '../pages/SharedPages/LeftSideNav/LeftSideNav';
import RightSideNav from '../pages/SharedPages/RightSideNav/RightSideNav';

const Main = () => {
    return (
        <div>
          <Header></Header>
            <Container>
            <Row>
                <Col lg="2" className='d-none d-lg-block'>
                <LeftSideNav></LeftSideNav>
                </Col>
                <Col lg="7">
                <Outlet></Outlet>
                </Col>
                <Col log="3">
                <RightSideNav></RightSideNav>
                </Col>
            </Row>
        </Container>
        <Footer></Footer>
        </div>
    );
};

export default Main;