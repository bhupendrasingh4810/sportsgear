import React from 'react';
import {
    Navbar,
    Container,
    Nav,
    UncontrolledDropdown,
    DropdownToggle,
    Media,
    DropdownItem,
    DropdownMenu
} from 'reactstrap';

import { Link } from 'react-router-dom';

export default props => {

    const { app, logoutAction } = props;

    return (
        <Navbar className="navbar-top navbar-dark" expand="md" id="navbar-main">
            <Container fluid>
                <Link className="h4 mb-0 text-white text-uppercase d-none d-lg-inline-block" to="/">
                    {props.brandText}
                </Link>

                {/* Searchbox was here */}

                <Nav className="align-items-center d-none d-md-flex" navbar>
                    <UncontrolledDropdown nav>
                        <DropdownToggle className="pr-0" nav>
                            <Media className="align-items-center">
                                <span className="avatar avatar-sm rounded-circle">
                                    <img
                                        alt="..."
                                        src={require("../../assets/img/theme/team-4-800x800.jpg")}
                                    />
                                </span>
                                <Media className="ml-2 d-none d-lg-block">
                                    <span className="mb-0 text-sm font-weight-bold">
                                        {app.user.name}
                                    </span>
                                </Media>
                            </Media>
                        </DropdownToggle>
                        <DropdownMenu className="dropdown-menu-arrow" right>
                            <DropdownItem to="/admin/user-profile" tag={Link}>
                                <i className="ni ni-single-02" />
                                <span>My profile</span>
                            </DropdownItem>
                            <DropdownItem to="/admin/user-profile" tag={Link}>
                                <i className="ni ni-settings-gear-65" />
                                <span>Settings</span>
                            </DropdownItem>
                            <DropdownItem divider />
                            <DropdownItem onClick={e => logoutAction()}>
                                <i className="ni ni-user-run" />
                                <span>Logout</span>
                            </DropdownItem>
                        </DropdownMenu>
                    </UncontrolledDropdown>
                </Nav>
            </Container>
        </Navbar>
    );
};