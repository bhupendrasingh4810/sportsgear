import React from 'react';
import { Container, Row, Col } from 'reactstrap';

import Header from '../../components/Headers/Header';
import Table from '../../components/Tables/Table';

export default () => {
    const tableHeadings = [
        "Image",
        "Name",
        "SKU",
        "Brand",
        "Section",
        "Category",
        "Sub Category",
        "MRP / Price",
        "Stock",
        "Promo / Offer",
        "Tags",
        "Added On",
        "Updated On",
        ""
    ];

    const addNewBtnData = {
        text: "Add Product",
        path: "/admin/product/add"
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
                            heading="Products"
                            page="product"
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