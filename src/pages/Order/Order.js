import React from 'react';
import { Container, Row, Col } from 'reactstrap';

import Header from '../../components/Headers/Header';
import Table from '../../components/Tables/Table';

export default props => {
    const tableHeadings = [
        "Customer",
        "Msisdn",
        "Email",
        "Products in Cart",
        "Order Value",
        "Razorpay Order ID",
        "Payment ID",
        "Payment Method",
        "Is Gift",
        "Note",
        "Promo",
        "Placed On",
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
                            heading="Orders"
                            page="order"
                            showAddBtn={false}
                            tableHeadings={tableHeadings}
                        />
                    </Col>
                </Row>
            </Container>
        </>
    );
};