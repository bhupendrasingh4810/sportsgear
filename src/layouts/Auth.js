import React from "react";
import { Route, Switch, Redirect } from "react-router-dom";
import { Container, Row, Col } from "reactstrap";

import Login from "../pages/Login/Login";

export default props => {
    return (
        <>
            <div className="main-content">
                <div className="header bg-gradient-info py-7 py-lg-8">
                    <Container>
                        <div className="header-body text-center mb-7">
                            <Row className="justify-content-center">
                                <Col lg="5" md="6">
                                    <h1 className="text-white">SportsGear</h1>
                                    {/* <p className="text-lead text-light">
                                        Use these awesome forms to login or create new account in
                                        your project for free.``
                                    </p> */}
                                </Col>
                            </Row>
                        </div>
                    </Container>
                    <div className="separator separator-bottom separator-skew zindex-100">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            preserveAspectRatio="none"
                            version="1.1"
                            viewBox="0 0 2560 100"
                            x="0"
                            y="0"
                        >
                            <polygon
                                className="fill-default"
                                points="2560 0 2560 100 0 100"
                            />
                        </svg>
                    </div>
                </div>
                {/* Page content */}
                <Container className="mt--8 pb-5">
                    <Row className="justify-content-center">
                        <Switch>
                            {props.auth.isAuthenticated
                                ? <Redirect from="*" to="/admin/dashboard" />
                                : <Route
                                    path="/auth/login"
                                    component={Login}
                                />}
                        </Switch>
                    </Row>
                </Container>
            </div>
        </>
    );
}
