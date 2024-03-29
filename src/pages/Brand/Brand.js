import React, { useState, useEffect } from 'react';
import { Container, Row, Col } from 'reactstrap';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import Table from '../../components/Tables/Table';

import { getBrandListAction } from '../../shared/store/actions/brand.action';
import { setLoadingAction } from '../../shared/store/actions/app.action';

const Brand = props => {

    const { getBrandListAction, setLoadingAction } = props;

    const tableHeadings = [
        { name: 'Logo', key: 'logo', sortingEnabled: false },
        { name: 'Name', key: 'name', sortingEnabled: true },
        { name: 'Added On', key: 'createdAt', sortingEnabled: true },
        { name: 'Status', key: 'status', sortingEnabled: true },
        { name: '', sortingEnabled: false }
    ];

    useEffect(() => {
        setLoadingAction(true);
        setTimeout(() => getBrandListAction(), 250);
    }, [getBrandListAction, setLoadingAction]);

    const [sort, setSort] = useState({
        sortOrder: 'asc',
        sortBy: 'name'
    });

    const addNewBtnData = {
        text: "Add Brand",
        path: "/admin/brand/add"
    };

    function sortTable(sortOrder, sortBy) {
        setSort({ sortOrder, sortBy });
    }

    return (
        <>
            <div className="header bg-gradient-info pb-8 pt-5 pt-md-5"></div>
            {/* Page content */}
            <Container className="mt--7" fluid>
                <Row className="mt-5">
                    <Col className="mb-5 mb-xl-0" xl="12">
                        <Table
                            heading="Brands"
                            page="brand"
                            showAddBtn={true}
                            tableHeadings={tableHeadings}
                            addNewBtnData={addNewBtnData}
                            sortTable={sortTable}
                            sort={sort}
                            data={props.brands}
                        />
                    </Col>
                </Row>
            </Container>
        </>
    );
}

const mapStateToProps = ({ brand }) => ({
    brands: brand.brands
});

const mapDispatchToProps = dispatch => bindActionCreators({
    getBrandListAction,
    setLoadingAction
}, dispatch);

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Brand);