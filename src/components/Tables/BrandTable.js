import React from 'react';
import * as moment from 'moment';
import { Media } from 'reactstrap';
import { bindActionCreators } from 'redux';
import { connect } from "react-redux";

import ToggleButton from '../Fields/ToggleButton/ToggleButton';
import DeleteButton from '../Buttons/DeleteButton';

import { setLoadingAction } from "../../shared/store/actions/app.action";
// import history from '../../history';
import { deleteBrandAction, getBrandListAction, changeBrandStatusAction } from "../../shared/store/actions/brand.action";

export const BrandTable = ({ data, setLoadingAction, deleteBrandAction, getBrandListAction, changeBrandStatusAction }) => {

    const changeStatus = async e => {
        setLoadingAction(true);
        await setTimeout(() => {
            changeBrandStatusAction({ id: data._id, body: { isActive: e } });
            getBrandListAction();
        }, 3000);
    }

    async function deleteItem() {
        setLoadingAction(true);
        await setTimeout(() => {
            deleteBrandAction({ id: data._id });
            getBrandListAction();
        }, 3000);
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
                <button
                    type="button"
                    onClick={e => {}}
                    className="btn btn-secondary btn-sm"
                >Edit</button>
                <DeleteButton
                    title={'Delete Brand'}
                    body={`Are you sure you want to delete ${data.name}?`}
                    deleteItem={deleteItem}
                    confirmBtnText={'Yes'}
                    cancelBtnText={'Cancel'}
                />
            </td>
        </tr>
    );
};

const mapDispatchToProps = dispatch => bindActionCreators({
    setLoadingAction,
    deleteBrandAction,
    getBrandListAction,
    changeBrandStatusAction
}, dispatch);

export default connect(
    null,
    mapDispatchToProps
)(BrandTable);