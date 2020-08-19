import React, { useState } from 'react';
import { Container, Row, Col } from 'reactstrap';

import Table from '../../components/Tables/Table';

export default () => {

    const tableHeadings = [
        { name: 'Customer', key: 'name', sortingEnabled: true },
        { name: 'Phone', key: 'msisdn', sortingEnabled: true },
        { name: 'Email', key: 'email', sortingEnabled: true },
        { name: 'Products in Cart', sortingEnabled: false },
        { name: 'Cart Value', key: 'total', sortingEnabled: true },
        { name: 'Last Updated', key: 'updatedAt', sortingEnabled: true },
        { name: 'Promo', sortingEnabled: false },
        { name: '', sortingEnabled: false }
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
                            heading="Carts"
                            page="cart"
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
}