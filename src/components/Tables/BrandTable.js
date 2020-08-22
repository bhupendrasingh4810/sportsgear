import React from 'react';
import * as moment from 'moment';
import { Media, UncontrolledDropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap';
import ToggleButton from '../Form/ToggleButton/ToggleButton';

export default ({ data }) => {
    // const [brand, setBrand] = ({ logo: '', name: '', createdAt: '', isActive: '', _id: '' });

    function changeStatus(e) {
        console.log(e);
    }

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
                            src={`http://localhost:3000/files/brands/${data.logo}`}
                        />
                    </a>
                </Media>
            </th>
            <td>{data.name}</td>
            <td>{moment(data.createdAt).format('DD MMM, YYYY')}</td>
            <td><ToggleButton isActive={data.isActive} changeStatus={changeStatus} /></td>
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