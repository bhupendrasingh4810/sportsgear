import React, { useState } from 'react';
import { Container, Row, Col } from 'reactstrap';

import Header from '../../components/Headers/Header';
import Table from '../../components/Tables/Table';

export default () => {
    const tableHeadings = [
        { name: 'Name', key: 'name', sortingEnabled: true },
        { name: 'Number of Values', sortingEnabled: false },
        { name: 'Added On', key: 'createdAt', sortingEnabled: true },
        { name: 'Status', key: 'status', sortingEnabled: true },
        { name: '', sortingEnabled: false }
    ];

    const [sort, setSort] = useState({
        sortOrder: 'asc',
        sortBy: 'name'
    });

    const addNewBtnData = {
        text: "Add Property",
        path: "/admin/property/add"
    };

    // const tableData = [];

    function sortTable(sortOrder, sortBy) {
        setSort({ sortOrder, sortBy });
    }

    return (
        <>
            <Header />
            {/* Page content */}
            <Container className="mt--7" fluid>
                <Row className="mt-5">
                    <Col className="mb-5 mb-xl-0" xl="12">
                        <Table
                            heading="Properties"
                            page="property"
                            showAddBtn={true}
                            tableHeadings={tableHeadings}
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