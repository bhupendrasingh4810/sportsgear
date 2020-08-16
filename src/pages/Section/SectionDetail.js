import React, { useState, useEffect } from 'react';
import { Container, Col, Row, Card, CardHeader, CardBody, Button, Form, FormGroup, Input } from 'reactstrap';
import UploadImage from '../../components/Form/UploadImage/UploadImage';

export default props => {

    const [section, setSection] = useState({
        name: "",
        logo: "",
        slug: "",
        categories: []
    });

    const [isLoading, setLoading] = useState(false);

    const [action] = useState('add');

    useEffect(() => getSection(), []);

    function setLogo(logo) {
        setSection({ ...section, logo });
    }

    function onSectionNameChange(name) {
        setSection({
            ...section,
            name,
            slug: String(name).toLocaleLowerCase().split(' ').join('-')
        });
    }

    function addSection() {
        setLoading(true);
        setLoading(false);
    }

    function getSection() {
        setLoading(true);
        setLoading(false);
    }

    function updateSection() {
        setLoading(true);
        setLoading(false);
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
                                        <h3 className="mb-0">Add Section</h3>
                                    </Col>
                                </Row>
                            </CardHeader>
                            <CardBody>
                                <Form>
                                    <div className="pl-lg-4">
                                        <Row>
                                            <Col xs="12" md="4" lg="4">
                                                <UploadImage image={section.logo} setLogo={setLogo.bind(this)} disabled={isLoading} />
                                            </Col>
                                            <Col xs="12" md="8" lg="8">
                                                <Row>
                                                    <Col lg="12">
                                                        <FormGroup>
                                                            <label
                                                                className="form-control-label"
                                                                htmlFor="input-username">
                                                                Section Name
                                                            </label>
                                                            <Input
                                                                className="form-control-alternative"
                                                                id="input-username"
                                                                placeholder="Eg: Nike"
                                                                disabled={isLoading}
                                                                value={section.name}
                                                                onChange={e => onSectionNameChange(e.target.value)}
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
                                                                Slug
                                                            </label>
                                                            <Input
                                                                className="form-control-alternative"
                                                                id="input-username"
                                                                placeholder="Eg: nike"
                                                                value={section.slug}
                                                                onChange={e => setSection({ ...section, slug: e.target.value })}
                                                                disabled={true}
                                                                type="text"
                                                            />
                                                        </FormGroup>
                                                    </Col>
                                                </Row>
                                                <div className="text-center">
                                                    <Button
                                                        className="my-4"
                                                        disabled={isLoading}
                                                        color="primary"
                                                        onClick={() => action === 'add' ? addSection() : updateSection()}
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