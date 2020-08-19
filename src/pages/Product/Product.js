import React, { useState } from 'react';
import { Container, Row, Col } from 'reactstrap';

import Header from '../../components/Headers/Header';
import Table from '../../components/Tables/Table';

export default () => {
    const tableHeadings = [
        { name: 'Image', sortingEnabled: false },
        { name: 'Name', key: 'name', sortingEnabled: true },
        { name: 'SKU', sortingEnabled: false },
        { name: 'Brand', key: 'brand.name', sortingEnabled: true },
        { name: 'Section', key: 'sport.name', sortingEnabled: true },
        { name: 'Category', key: 'category.name', sortingEnabled: true },
        { name: 'Sub Category', key: 'subCategory.name', sortingEnabled: true },
        { name: 'MRP / Price', key: 'mrp', sortingEnabled: true },
        { name: 'Stock', key: 'stock', sortingEnabled: true },
        { name: 'Promo / Offer', sortingEnabled: false },
        { name: 'Tags', sortingEnabled: false },
        { name: 'Added On', key: 'createdAt', sortingEnabled: true },
        { name: 'Updated On', key: 'updatedAt', sortingEnabled: true },
        { name: '', sortingEnabled: false }
    ];

    const [sort, setSort] = useState({
        sortOrder: 'asc',
        sortBy: 'name'
    });

    const addNewBtnData = {
        text: "Add Product",
        path: "/admin/product/add"
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
                            heading="Products"
                            page="product"
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