import React from 'react';
import { Container, Row, Col } from 'reactstrap';

import Header from '../../components/Headers/Header';
import Table from '../../components/Tables/Table';

export default props => {
    const tableHeadings = [
        "Logo",
        "Name",
        "Added On",
        "Status",
        ""
    ];

    const addNewBtnData = {
        text: "Add Brand",
        path: "/admin/brand/add"
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
                            heading="Brands"
                            page="brand"
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