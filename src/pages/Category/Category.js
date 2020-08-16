import React from 'react';
import { Container, Row, Col } from 'reactstrap';

import Header from '../../components/Headers/Header';
import Table from '../../components/Tables/Table';

export default () => {
    const tableHeadings = [
        "Logo",
        "Name",
        "Section",
        "Added On",
        "Status"
    ];

    const addNewBtnData = {
        text: "Add Category",
        path: "/admin/category/add"
    };

    // const tableData = [];
    return (
        <>
            <Header />
            {/* Page content */}
            <Container className="mt--7" fluid>
                <Row className="mt-5">
                    <Col className="mb-5 mb-xl-0" xl="12">
                        <Table
                            heading="Categories"
                            page="category"
                            showAddBtn={true}
                            tableHeadings={tableHeadings}
                            addNewBtnData={addNewBtnData}
                        />
                    </Col>
                </Row>
            </Container>
        </>
    );
}