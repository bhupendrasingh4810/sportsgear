import React, { useState, useEffect } from 'react';
import { Container, Col, Row, Card, CardHeader, CardBody, Button, Form, FormGroup, Input } from 'reactstrap';
import UploadImage from '../../components/Form/UploadImage/UploadImage';

export default props => {

    const [article, setArticle] = useState({
        name: "",
        logo: "",
        properties: []
    });

    const [isLoading, setLoading] = useState(false);

    const [properties, setProperties] = useState([]);

    const [searchValue, searchProperty] = useState(null);

    const [action] = useState('add');

    useEffect(() => {
        const getInitials = () => {
            setProperties(['Shirt Size', 'Shirt Collar', 'Shirt Sleeve', 'Shirt Color', 'Shirt Length', 'Material', 'T-Shirt Size', 'T-Shirt Collar', 'T-Shirt Sleeve', 'T-Shirt Color', 'T-Shirt Length', 'T-Shirt Material']);
            getArticle();
        };
        getInitials();
    }, []);

    function setLogo(logo) {
        setArticle({ ...article, logo });
    }

    function addArticle() {
        setLoading(true);
        setLoading(false);
    }

    function getArticle() {
        setLoading(true);
        setLoading(false);
    }

    function updateArticle() {
        setLoading(true);
        setLoading(false);
    }

    function toggleProperty(property) {
        setArticle({
            ...article,
            properties: !article.properties.includes(property)
                ? [...article.properties, property]
                : article.properties.filter(prop => prop !== property)
        });
    }

    return (
        <>
            <div className="header bg-gradient-info pb-8 pt-5 pt-md-8"></div>
            <Container className="mt--7" fluid>
                <Row className="justify-content-md-center">
                    <Col className="order-xl-1" xl="8">
                        <Card className="bg-secondary shadow">
                            <CardHeader className="bg-white border-0">
                                <Row className="align-items-center">
                                    <Col xs="12">
                                        <h3 className="mb-0">Add Article</h3>
                                    </Col>
                                </Row>
                            </CardHeader>
                            <CardBody>
                                <Form>
                                    <div className="pl-lg-4">
                                        <Row>
                                            <Col xs="12" md="4" lg="4">
                                                <UploadImage image={article.logo} setLogo={setLogo.bind(this)} disabled={isLoading} />
                                            </Col>
                                            <Col xs="12" md="8" lg="8">
                                                <Row>
                                                    <Col lg="12">
                                                        <FormGroup>
                                                            <label
                                                                className="form-control-label"
                                                                htmlFor="input-username">
                                                                Article Name
                                                            </label>
                                                            <Input
                                                                className="form-control-alternative"
                                                                id="input-username"
                                                                placeholder="Eg: Shirt"
                                                                disabled={isLoading}
                                                                value={article.name}
                                                                onChange={e => setArticle({ ...article, name: e.target.value })}
                                                                type="text"
                                                            />
                                                        </FormGroup>
                                                    </Col>
                                                </Row>
                                                <Row>
                                                    <Col lg="12">
                                                        <FormGroup>
                                                            <label
                                                                className="form-control-label"
                                                                htmlFor="input-username">
                                                                Search Property
                                                            </label>
                                                            <Input
                                                                className="form-control-alternative"
                                                                id="input-username"
                                                                placeholder="Eg: shirt size"
                                                                onChange={e => searchProperty(e.target.value)}
                                                                disabled={isLoading}
                                                                type="text"
                                                            />
                                                        </FormGroup>
                                                    </Col>
                                                </Row>
                                                <Row>
                                                    <Col lg="12">
                                                        <Card style={{ minHeight: '150px', maxHeight: '150px', overflowY: 'scroll', overflowX: 'hidden' }}>
                                                            <Row className="ml-3">
                                                                {properties && properties.map((property, key) => {
                                                                    return (
                                                                        String(searchValue) && String(property).toLocaleLowerCase().indexOf(String(searchValue).toLocaleLowerCase()) !== -1
                                                                            ? <Button
                                                                                className="mt-2"
                                                                                color={article.properties.includes(property) ? 'primary' : 'secondary'}
                                                                                size="sm"
                                                                                onClick={e => toggleProperty(property)}
                                                                                type="button"
                                                                                style={{ width: 'fit-content' }}
                                                                                key={key}>
                                                                                {property}
                                                                            </Button>
                                                                            : null
                                                                    );
                                                                })}
                                                            </Row>
                                                        </Card>
                                                    </Col>
                                                </Row>
                                                <div className="text-center">
                                                    <Button
                                                        className="my-4"
                                                        disabled={isLoading}
                                                        color="primary"
                                                        onClick={() => action === 'add' ? addArticle() : updateArticle()}
                                                        type="button">
                                                        {action === 'add' ? 'Save' : 'Update'}
                                                    </Button>
                                                </div>
                                            </Col>
                                        </Row>
                                    </div>
                                </Form>
                            </CardBody>
                        </Card>
                    </Col>
                </Row>
            </Container>
        </>
    );
};