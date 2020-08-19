import React from 'react';

import { UncontrolledDropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap';
import ToggleButton from '../Form/ToggleButton/ToggleButton';
import Rating from '../../plugins/Rating';

export default props => {
    
    return (
        <tr>
            <td>Customer Name</td>
            <td>7007706496</td>
            <td>bhupendrasingh4810@gmail.com</td>
            <td>Nike T-Shirt</td>
            <td>Nice product I have seen ever</td>
            <td><Rating /></td>
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