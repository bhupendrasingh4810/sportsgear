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

import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { logout } from '../../shared/store/actions/auth.action';

const AdminNavbar = props => {

    const { user } = props;

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
                                        {user.name}
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
                            <DropdownItem onClick={e => props.logout()}>
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

const mapDispatchToProps = dispatch => bindActionCreators({
    logout
}, dispatch);

export default connect(
    null,
    mapDispatchToProps
)(AdminNavbar);