import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import BrandForm from '../../components/Forms/BrandForm';

import { getBrandAction, updateBrandAction } from '../../shared/store/actions/brand.action';
import { setLoadingAction } from '../../shared/store/actions/app.action';

const EditBrand = props => {

    const { match, setLoadingAction, getBrandAction, brand } = props;

    const [image] = useState(brand && brand.logo);

    async function editBrand(body) {
        await props.editBrandAction({ id: brand && brand._id, body: { ...body, logo: image } });
        props.history.goBack();
    }

    useEffect(() => {
        setLoadingAction(true);
        setTimeout(() => {
            let id = match.params.id;
            getBrandAction(id);
        });
    }, []);

    return (
        <>
            <div className="header bg-gradient-info pb-8 pt-5 pt-md-8"></div>
            {brand
                ? <BrandForm
                    heading="Edit Brand"
                    action="Save"
                    data={{ name: brand.name, logo: `http://localhost:3000/files/brands/${brand.logo}`, slug: brand.slug }}
                    submitAction={editBrand}
                />
                : null}
        </>
    );
};

const mapStateToProps = ({ app, brand }) => ({
    logo: app.image,
    brand: brand.brand
});

const mapDispatchToProps = dispatch => bindActionCreators({
    getBrandAction,
    updateBrandAction,
    setLoadingAction
}, dispatch);

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(EditBrand);