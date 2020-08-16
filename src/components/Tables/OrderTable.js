import React from 'react';

import { UncontrolledDropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap';

export default props => {
    
    return (
        <tr>
            <td>Customer Name</td>
            <td>7007706496</td>
            <td>bhupendrasingh4810@gmail.com</td>
            <td>2</td>
            <td>Rs. 2000</td>
            <td>24tr3fwef34fi3jf</td>
            <td>2r3u34fnfnjdn45</td>
            <td>Card</td>
            <td>Yes</td>
            <td>Handle with care</td>
            <td>10OFF</td>
            <td>23 Jul, 2020</td>
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