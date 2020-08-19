import React, { useState } from 'react';
import { Container, Row, Col } from 'reactstrap';

import Table from '../../components/Tables/Table';

export default () => {
    const tableHeadings = [
        { name: 'Image', sortingEnabled: false },
        { name: 'Name', key: 'name', sortingEnabled: true },
        { name: 'Phone', key: 'msisdn', sortingEnabled: true },
        { name: 'Email', key: 'email', sortingEnabled: true },
        { name: 'Gender', key: 'gender', sortingEnabled: true },
        { name: 'Role', key: 'role', sortingEnabled: true },
        { name: 'Verified', key: 'verified', sortingEnabled: true },
        { name: 'Joined On', key: 'createdAt', sortingEnabled: true },
        { name: 'Status', key: 'status', sortingEnabled: true },
        { name: '', sortingEnabled: false }
    ];

    const [sort, setSort] = useState({
        sortOrder: 'asc',
        sortBy: 'name'
    });

    const addNewBtnData = {
        text: "Add User",
        path: "/admin/user/add"
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
                            heading="Users"
                            page="user"
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