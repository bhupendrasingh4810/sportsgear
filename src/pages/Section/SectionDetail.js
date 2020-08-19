import React, { useState, useEffect } from 'react';
import { Container, Col, Row, Card, CardHeader, CardBody, Button, Form, FormGroup, Input } from 'reactstrap';
import UploadImage from '../../components/Form/UploadImage/UploadImage';
import { Formik } from 'formik';
import SectionSchema from '../../shared/schemas/SectionSchema';

export default props => {

    const [section] = useState({
        name: "",
        logo: "",
        slug: "",
        categories: []
    });

    const [isLoading, setLoading] = useState(false);

    const [action] = useState('add');

    useEffect(() => getSection(), []);

    function getSlug(name) {
        return String(name).toLocaleLowerCase().split(' ').join('-');
    }

    function addSection(data) {
        setLoading(true);
        setLoading(false);
        console.log(data);
    }

    function getSection() {
        setLoading(true);
        setLoading(false);
    }

    function updateSection() {
        setLoading(true);
        setLoading(false);
    }

    function renderCategories(categories = []) {
        return categories && categories.length ? categories.map((category, key) => {
            return <Button
                className="mt-2"
                color={'primary'}
                size="sm"
                type="button"
                style={{ width: 'fit-content' }}
                key={key}>
                {category.name}
            </Button>
        }) : <p>No categories available under this section</p>;
    }

    return (
        <>
            <div className="header bg-gradient-info pb-8 pt-5 pt-md-8"></div>
            <Container className="mt--7" fluid>
                <Row className="justify-content-md-center">
                    <Col className="order-xl-1" xl="12">
                        <Card className="bg-secondary shadow">
                            <CardHeader className="bg-white border-0">
                                <Row className="align-items-center">
                                    <Col xs="12">
                                        <h3 className="mb-0">Add Section</h3>
                                    </Col>
                                </Row>
                            </CardHeader>
                            <CardBody>
                                <div className="pl-lg-4">
                                    <Formik
                                        initialValues={section}
                                        validationSchema={SectionSchema}
                                        onSubmit={(values, actions) => {
                                            console.log(values);
                                            actions.setSubmitting(true);
                                            action === 'add' ? addSection(values) : updateSection(values);
                                        }}
                                    >
                                        {({ values, errors, touched, isSubmitting, handleSubmit, setValues }) => (
                                            <Form onSubmit={handleSubmit}>
                                                <Row>
                                                    <Col xs="12" md="3" lg="3" style={{ padding: '25px' }}>
                                                        <UploadImage image={values.logo} setLogo={logo => setValues({
                                                            ...values,
                                                            logo
                                                        })} disabled={isLoading} />
                                                        {(errors.logo || touched.logo) && <small className="text-danger">{errors.logo}</small>}
                                                    </Col>
                                                    <Col xs="12" md="6" lg="6">
                                                        <Row>
                                                            <Col lg="12">
                                                                <FormGroup>
                                                                    <label
                                                                        className="form-control-label"
                                                                        htmlFor="input-username">
                                                                        Name <small className="text-danger">*</small>
                                                                    </label>
                                                                    <Input
                                                                        className="form-control-alternative"
                                                                        id="input-username"
                                                                        placeholder="Eg: Nike"
                                                                        readOnly={isLoading}
                                                                        value={values.name}
                                                                        onChange={e => setValues({
                                                                            ...values,
                                                                            name: e.target.value,
                                                                            slug: getSlug(e.target.value)
                                                                        })}
                                                                        type="text"
                                                                    />
                                                                    {(errors.name || touched.name) && <small className="text-danger">{errors.name}</small>}
                                                                </FormGroup>
                                                            </Col>
                                                        </Row>
                                                        <Row>
                                                            <Col lg="12">
                                                                <FormGroup>
                                                                    <label
                                                                        className="form-control-label"
                                                                        htmlFor="input-username">
                                                                        Slug <small className="text-danger">*</small>
                                                                    </label>
                                                                    <Input
                                                                        className="form-control-alternative"
                                                                        id="input-username"
                                                                        placeholder="Eg: nike"
                                                                        value={values.slug}
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
                                                                type="submit">
                                                                {action === 'add' ? 'Save' : 'Update'}
                                                            </Button>
                                                        </div>
                                                    </Col>
                                                    <Col xs="12" md="3" lg="3">
                                                        {action !== 'add'
                                                            ? <>
                                                                <h4>Categories</h4>
                                                                <Card className="bg-secondary shadow">
                                                                    <CardBody>
                                                                        {renderCategories(section.categories)}
                                                                    </CardBody>
                                                                </Card>
                                                            </> : null}
                                                    </Col>
                                                </Row>
                                            </Form>
                                        )}
                                    </Formik>
                                </div>
                            </CardBody>
                        </Card>
                    </Col>
                </Row>
            </Container>
        </>
    );
};