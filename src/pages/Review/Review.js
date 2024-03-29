import React, { useState } from 'react';
import { Container, Row, Col } from 'reactstrap';

import Table from '../../components/Tables/Table';

export default () => {
    const tableHeadings = [
        { name: 'Customer', key: 'user.name', sortingEnabled: true },
        { name: 'Phone', key: 'user.msisdn', sortingEnabled: true },
        { name: 'Email', key: 'user.email', sortingEnabled: true },
        { name: 'Product', key: 'product.name', sortingEnabled: true },
        { name: 'Title', sortingEnabled: false },
        { name: 'Rating', key: 'rating', sortingEnabled: true },
        { name: 'Added On', key: 'createdAt', sortingEnabled: true },
        { name: 'Published / Status', key: 'published', sortingEnabled: true },
        { name: '', sortingEnabled: false }
    ];

    const [sort, setSort] = useState({
        sortOrder: 'asc',
        sortBy: 'createdAt'
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
                            heading="Reviews"
                            page="review"
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