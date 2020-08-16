import React from 'react';

import { Media, UncontrolledDropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap';

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
            <td>Product Name</td>
            <td>DHJF70077</td>
            <td>Nike</td>
            <td>Golf</td>
            <td>Golf Gloves</td>
            <td>N/A</td>
            <td>2000 / 1800</td>
            <td>120</td>
            <td>10OFF / N/A</td>
            <td>Trending, New</td>
            <td>23 Jul, 2020</td>
            <td>01 Aug, 2020</td>
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