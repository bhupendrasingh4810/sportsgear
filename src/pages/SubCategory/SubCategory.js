import React, { useState } from 'react';
import { Container, Row, Col } from 'reactstrap';

import Table from '../../components/Tables/Table';

export default () => {
    const tableHeadings = [
        { name: 'Logo', sortingEnabled: false },
        { name: 'Name', key: 'name', sortingEnabled: true },
        { name: 'Section', key: 'sport.name', sortingEnabled: true },
        { name: 'Category', key: 'category.name', sortingEnabled: true },
        { name: 'Added On', key: 'createdAt', sortingEnabled: true },
        { name: 'Status', key: 'status', sortingEnabled: true },
        { name: '', sortingEnabled: false }
    ];

    const [sort, setSort] = useState({
        sortOrder: 'asc',
        sortBy: 'name'
    });

    const addNewBtnData = {
        text: "Add Sub Category",
        path: "/admin/sub-category/add"
    };

    // const tableData = [];

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
                            heading="Sub Categories"
                            page="sub-category"
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