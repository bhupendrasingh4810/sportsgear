import React from 'react';

import { Media, UncontrolledDropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap';
import ToggleButton from '../ToggleButton/ToggleButton';

export default props => {
    return (
        <tr>
            <th scope="row">
                <Media className="align-items-center">
                    <a
                        className="avatar rounded-circle mr-3"
                        href="#pablo"
                        onClick={e => e.preventDefault()}
                    >
                        <img
                            alt="..."
                            src={require("../../assets/img/theme/bootstrap.jpg")}
                        />
                    </a>
                </Media>
            </th>
            <td>Bhupendra Singh</td>
            <td>7007706496</td>
            <td>bhupendrasingh4810@gmail.com</td>
            <td>Male</td>
            <td>Admin</td>
            <td>Yes</td>
            <td>23 Jul, 2020</td>
            <td><ToggleButton /></td>
            <td className="text-right">
                <UncontrolledDropdown>
                    <DropdownToggle
                        className="btn-icon-only text-light"
                        href="#pablo"
                        role="button"
                        size="sm"
                        color=""
                        onClick={e => e.preventDefault()}
                    >
                        <i className="fas fa-ellipsis-v" />
                    </DropdownToggle>
                    <DropdownMenu className="dropdown-menu-arrow" right>
                        <DropdownItem
                            href="#pablo"
                            onClick={e => e.preventDefault()}
                        >
                            Action
                            </DropdownItem>
                        <DropdownItem
                            href="#pablo"
                            onClick={e => e.preventDefault()}
                        >
                            Another action
                            </DropdownItem>
                        <DropdownItem
                            href="#pablo"
                            onClick={e => e.preventDefault()}
                        >
                            Something else here
                            </DropdownItem>
                    </DropdownMenu>
                </UncontrolledDropdown>
            </td>
        </tr>
    );
};