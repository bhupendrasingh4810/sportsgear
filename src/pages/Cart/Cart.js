import React from 'react';
import { Container, Row, Col } from 'reactstrap';

import Header from '../../components/Headers/Header';
import Table from '../../components/Tables/Table';

export default () => {

    const tableHeadings = [
        "Customer",
        "Msisdn",
        "Email",
        "Products in Cart",
        "Cart Value",
        "Last Updated",
        "Promo",
        ""
    ];

    // const tableData = [];
    return (
        <>
            <Header />
            {/* Page content */}
            <Container className="mt--7" fluid>
                <Row className="mt-5">
                    <Col className="mb-5 mb-xl-0" xl="12">
                        <Table
                            heading="Carts"
                            page="cart"
                            showAddBtn={false}
                            tableHeadings={tableHeadings}
                        />
                    </Col>
                </Row>
            </Container>
        </>
    );
}