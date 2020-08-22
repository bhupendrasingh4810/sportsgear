import React, { useState, useEffect } from 'react';
import { Container, Row, Col } from 'reactstrap';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import Table from '../../components/Tables/Table';

import { getPropertyList } from '../../shared/store/actions/property.action';
import { setLoadingAction } from '../../shared/store/actions/app.action';

const Property = props => {

    const { properties, getPropertyList, setLoadingAction } = props;

    const tableHeadings = [
        { name: 'Name', key: 'name', sortingEnabled: true },
        { name: 'Number of Values', sortingEnabled: false },
        { name: 'Added On', key: 'createdAt', sortingEnabled: true },
        { name: 'Status', key: 'status', sortingEnabled: true },
        { name: '', sortingEnabled: false }
    ];

    useEffect(() => {
        setLoadingAction(true);
        setTimeout(() => {
            getPropertyList();
            setLoadingAction(false);
        }, 3000);
    }, [getPropertyList, setLoadingAction]);

    const [sort, setSort] = useState({
        sortOrder: 'asc',
        sortBy: 'name'
    });

    const addNewBtnData = {
        text: "Add Property",
        path: "/admin/property/add"
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
                            heading="Properties"
                            page="property"
                            showAddBtn={true}
                            tableHeadings={tableHeadings}
                            data={properties}
                            addNewBtnData={addNewBtnData}
                            sortTable={sortTable}
                            sort={sort}
                        />
                    </Col>
                </Row>
            </Container>
        </>
    );
}

const mapStateToProps = ({ property }) => ({
    properties: property.properties
});

const mapDispatchToProps = dispatch => bindActionCreators({
    getPropertyList,
    setLoadingAction
}, dispatch);

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Property);