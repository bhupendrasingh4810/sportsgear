import React, { useState, useEffect } from 'react';
import { Container, Row, Col } from 'reactstrap';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import Table from '../../components/Tables/Table';

import { getArticleList } from '../../shared/store/actions/article.action';
import { setLoadingAction } from '../../shared/store/actions/app.action';

const Article = props => {

    const { getArticleList, setLoadingAction } = props;
    const tableHeadings = [
        { name: 'Name', key: 'name', sortingEnabled: true },
        { name: 'Added On', key: 'createdAt', sortingEnabled: true },
        { name: 'Status', key: 'status', sortingEnabled: true },
        { name: '', sortingEnabled: false }
    ];

    // const [page, setPage] = useState(1);

    useEffect(() => {
        setLoadingAction(true);
        setTimeout(() => {
            getArticleList();
        }, 3000);
    }, [getArticleList, setLoadingAction]);

    const [sort, setSort] = useState({
        sortOrder: 'asc',
        sortBy: 'name'
    });

    const addNewBtnData = {
        text: "Add Article",
        path: "/admin/article/add"
    };

    function sortTable(sortOrder, sortBy) {
        setSort({ sortOrder, sortBy });
    }

    // const tableData = [];
    return (
        <>
            <div className="header bg-gradient-info pb-8 pt-5 pt-md-5"></div>
            {/* Page content */}
            <Container className="mt--7" fluid>
                <Row className="mt-5">
                    <Col className="mb-5 mb-xl-0" xl="12">
                        <Table
                            heading="Articles"
                            page="article"
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

const mapStateToProps = ({ article }) => ({
    articles: article.articles
});

const mapDispatchToProps = dispatch => bindActionCreators({
    getArticleList,
    setLoadingAction
}, dispatch);

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Article);