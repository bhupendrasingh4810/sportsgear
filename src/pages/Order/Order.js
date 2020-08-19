import React, { useState } from 'react';
import { Container, Row, Col } from 'reactstrap';

import Table from '../../components/Tables/Table';

export default props => {
    const tableHeadings = [
        { name: 'Customer', key: 'name', sortingEnabled: true },
        { name: 'Phone', key: 'msisdn', sortingEnabled: true },
        { name: 'Email', key: 'email', sortingEnabled: true },
        { name: 'Products in Cart', key: 'products_in_cart', sortingEnabled: false },
        { name: 'Order Value', key: 'amount', sortingEnabled: true },
        { name: 'Razorpay Order ID', key: 'razorpay_order_id', sortingEnabled: false },
        { name: 'Payment ID', key: 'payment_id', sortingEnabled: false },
        { name: 'Payment Method', key: 'payment_method', sortingEnabled: true },
        { name: 'Is Gift', key: 'isGift', sortingEnabled: true },
        { name: 'Note', key: 'note', sortingEnabled: true },
        { name: 'Promo', key: 'promo', sortingEnabled: false },
        { name: 'Status', key: 'status', sortingEnabled: true },
        { name: '', sortingEnabled: false },
    ];

    const [sort, setSort] = useState({
        sortOrder: 'asc',
        sortBy: 'name'
    });

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
                            heading="Orders"
                            page="order"
                            showAddBtn={false}
                            tableHeadings={tableHeadings}
                            sortTable={sortTable}
                            sort={sort}
                        />
                    </Col>
                </Row>
            </Container>
        </>
    );
};