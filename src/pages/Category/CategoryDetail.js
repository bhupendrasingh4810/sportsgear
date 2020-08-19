import React, { useState, useEffect } from 'react';
import { Container, Col, Row, Card, CardHeader, CardBody, Button, Form, FormGroup, Input } from 'reactstrap';
import UploadImage from '../../components/Form/UploadImage/UploadImage';
import { Formik } from 'formik';
import CategorySchema from '../../shared/schemas/CategorySchema';

export default props => {

    const [category] = useState({
        name: "",
        logo: "",
        slug: "",
        sport: ""
    });

    const [isLoading, setLoading] = useState(false);

    const [action] = useState('add');

    useEffect(() => getCategory(), []);

    function getSlug(name) {
        return String(name).toLocaleLowerCase().split(' ').join('-');
    }

    function addCategory() {
        setLoading(true);
        setLoading(false);
    }

    function getCategory() {
        setLoading(true);
        setLoading(false);
    }

    function updateCategory() {
        setLoading(true);
        setLoading(false);
    }

    function renderSubCategories(subCategories = []) {
        return subCategories && subCategories.length ? subCategories.map((subCategory, key) => {
            return <Button
                className="mt-2"
                color={'primary'}
                size="sm"
                type="button"
                style={{ width: 'fit-content' }}
                key={key}>
                {subCategory.name}
            </Button>
        }) : <p>No sub categories available under this section</p>;
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
                                        <h3 className="mb-0">Add Category</h3>
                                    </Col>
                                </Row>
                            </CardHeader>
                            <CardBody>
                                <div className="pl-lg-4">
                                    <Formik
                                        initialValues={category}
                                        validationSchema={CategorySchema}
                                        onSubmit={(values, actions) => {
                                            actions.setSubmitting(true);
                                            console.log(values);
                                            action === 'add' ? addCategory() : updateCategory();
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
                                                                        placeholder="Eg: Cricket"
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
                                                                        placeholder="Eg: cricket"
                                                                        value={values.slug}
                                                                        disabled={true}
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
                                                                        htmlFor="exampleSelect">
                                                                        Section <small className="text-danger">*</small>
                                                                    </label>
                                                                    <Input
                                                                        className="form-control-alternative"
                                                                        type="select"
                                                                        name="select"
                                                                        value={values.sport}
                                                                        onChange={e => setValues({
                                                                            ...values,
                                                                            sport: e.target.value
                                                                        })}
                                                                        id="exampleSelect">
                                                                        <option value={''}>0</option>
                                                                        <option value={'a'}>1</option>
                                                                        <option value={'b'}>2</option>
                                                                        <option value={'c'}>3</option>
                                                                        <option value={'d'}>4</option>
                                                                    </Input>
                                                                    {(errors.sport || touched.sport) && <small className="text-danger">{errors.sport}</small>}
                                                                </FormGroup>
                                                            </Col>
                                                        </Row>
                                                        <div className="text-center">
                                                            <Button
                                                                className="my-4"
                                                                disabled={isLoading}
                                                                color="primary"
                                                                onClick={() => action === 'add' ? addCategory() : updateCategory()}
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
                                                                        {renderSubCategories(category.subCategories)}
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