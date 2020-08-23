import React from 'react';
import { connect } from 'react-redux';

import { addBrandAction } from '../../shared/store/actions/brand.action';
import { bindActionCreators } from 'redux';
import BrandForm from '../../components/Forms/BrandForm';

const AddBrand = props => {

    async function addBrand(data) {
        await props.addBrandAction({ ...data, logo: props.logo });
        props.history.goBack();
    }

    return (
        <>
            <div className="header bg-gradient-info pb-8 pt-5 pt-md-8"></div>
            <BrandForm
                heading="Add Brand"
                action="Submit"
                data={{ name: "", logo: "", slug: "" }}
                submitAction={addBrand}
            />
        </>
    );
};

const mapStateToProps = ({ app }) => ({
    logo: app.image
});

const mapDispatchToProps = dispatch => bindActionCreators({
    addBrandAction
}, dispatch);

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(AddBrand);