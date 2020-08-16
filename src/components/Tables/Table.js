import React from 'react';

import {
    Card,
    CardHeader,
    CardFooter,
    Pagination,
    PaginationItem,
    PaginationLink,
    Table,
    Row,
    Button,
} from 'reactstrap';
import TableHead from './TableHead';
import BrandTable from './BrandTable';
import ArticleTable from './ArticleTable';
import CategoryTable from './CategoryTable';
import CartTable from './CartTable';
import OrderTable from './OrderTable';
import ProductTable from './ProductTable';
import PropertyTable from './PropertyTable';
import SectionTable from './SectionTable';
import SubCategoryTable from './SubCategoryTable';
import TagTable from './TagTable';
import UserTable from './UserTable';
import history from '../../history';

export default props => {

    function renderRow(page) {
        switch (page) {
            case "article": return [0, 1, 2, 3, 4, 5].map((data, key) => {
                return <ArticleTable key={key} />
            });
            case "brand": return [0, 1, 2, 3, 4, 5].map((data, key) => {
                return <BrandTable key={key} />
            });
            case "category": return [0, 1, 2, 3, 4, 5].map((data, key) => {
                return <CategoryTable key={key} />
            });
            case "cart": return [0, 1, 2, 3, 4, 5].map((data, key) => {
                return <CartTable key={key} />
            });
            case "order": return [0, 1, 2, 3, 4, 5].map((data, key) => {
                return <OrderTable key={key} />
            });
            case "product": return [0, 1, 2, 3, 4, 5].map((data, key) => {
                return <ProductTable key={key} />
            });
            case "property": return [0, 1, 2, 3, 4, 5].map((data, key) => {
                return <PropertyTable key={key} />
            });
            case "section": return [0, 1, 2, 3, 4, 5].map((data, key) => {
                return <SectionTable key={key} />
            });
            case "sub-category": return [0, 1, 2, 3, 4, 5].map((data, key) => {
                return <SubCategoryTable key={key} />
            });
            case "tag": return [0, 1, 2, 3, 4, 5].map((data, key) => {
                return <TagTable key={key} />
            });
            case "user": return [0, 1, 2, 3, 4, 5].map((data, key) => {
                return <UserTable key={key} />
            });
            default: return null;
        }
    }

    function addNew(e, path) {
        e.preventDefault();
        history.push(path);
    }

    return (
        <Card className="shadow">
            <CardHeader className="border-0">
                <Row className="align-items-center">
                    <div className="col">
                        <h3 className="mb-0">{props.heading}</h3>
                    </div>
                    {
                        props.showAddBtn
                            ? <div className="col text-right">
                                <Button
                                    color="primary"
                                    href="#pablo"
                                    onClick={e => addNew(e, props.addNewBtnData.path)}
                                    size="sm"
                                >
                                    {props.addNewBtnData.text}
                                </Button>
                            </div>
                            : null
                    }
                </Row>
            </CardHeader>
            <Table className="align-items-center table-flush" responsive>
                <TableHead tableHeadings={props.tableHeadings} />
                <tbody>
                    {renderRow(props.page)}
                </tbody>
            </Table>
            <CardFooter>
                <Pagination
                    className="pagination justify-content-end"
                    listClassName="justify-content-end"
                >
                    <PaginationItem className="disabled">
                        <PaginationLink
                            href="#pablo"
                            onClick={e => e.preventDefault()}
                            tabIndex="-1"
                        >
                            <i className="fa fa-angle-left" />
                            <span className="sr-only">Previous</span>
                        </PaginationLink>
                    </PaginationItem>
                    <PaginationItem>
                        <PaginationLink href="#pablo" onClick={e => e.preventDefault()}>
                            1
              </PaginationLink>
                    </PaginationItem>
                    <PaginationItem className="active">
                        <PaginationLink href="#pablo" onClick={e => e.preventDefault()}>
                            2
              </PaginationLink>
                    </PaginationItem>
                    <PaginationItem>
                        <PaginationLink href="#pablo" onClick={e => e.preventDefault()}>
                            3
              </PaginationLink>
                    </PaginationItem>
                    <PaginationItem>
                        <PaginationLink href="#pablo" onClick={e => e.preventDefault()}>
                            <i className="fa fa-angle-right" />
                            <span className="sr-only">Next</span>
                        </PaginationLink>
                    </PaginationItem>
                </Pagination>
            </CardFooter>
        </Card>
    );
};