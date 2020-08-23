import React, { useState, useEffect } from 'react';
import { Container, Col, Row, Card, CardHeader, CardBody, Button, Form, FormGroup, Input } from 'reactstrap';
import UploadImage from '../../components/Fields/UploadImage/UploadImage';
import { Formik } from 'formik';
import SubCategorySchema from '../../shared/schemas/sub-category-schema';

export default props => {

    const [subCategory] = useState({
        name: '',
        logo: '',
        slug: '',
        sport: '',
        category: ''
    });

    const [isLoading, setLoading] = useState(false);

    const [action] = useState('add');

    useEffect(() => getSubCategory(), []);

    function getSlug(name) {
        return String(name).toLocaleLowerCase().split(' ').join('-');
    }

    function addSubCategory() {
        setLoading(true);
        setLoading(false);
    }

    function getSubCategory() {
        setLoading(true);
        setLoading(false);
    }

    function updateSubCategory() {
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
                                        <h3 className="mb-0">Add Sub Category</h3>
                                    </Col>
                                </Row>
                            </CardHeader>
                            <CardBody>
                                <div className="pl-lg-4">
                                    <Formik
                                        initialValues={subCategory}
                                        validationSchema={SubCategorySchema}
                                        onSubmit={(values, actions) => {
                                            actions.setSubmitting(true);
                                            console.log(values);
                                            action === 'add' ? addSubCategory() : updateSubCategory();
                                        }}
                                    >
                                        {({ values, errors, touched, isSubmitting, handleSubmit, setValues }) => (
                                            <Form onSubmit={handleSubmit}>
                                                <Row>
                                                    <Col xs="12" md="4" lg="4" style={{ padding: '25px' }}>
                                                        <UploadImage image={values.logo} setLogo={logo => setValues({
                                                            ...values,
                                                            logo
                                                        })} disabled={isLoading} />
                                                        {(errors.logo || touched.logo) && <small className="text-danger">{errors.logo}</small>}
                                                    </Col>
                                                    <Col xs="12" md="8" lg="8">
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
                                                                        placeholder="Eg: Cricket Ball"
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
                                                                        placeholder="Eg: cricket-ball"
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
                                                        <Row>
                                                            <Col lg="12">
                                                                <FormGroup>
                                                                    <label
                                                                        className="form-control-label"
                                                                        htmlFor="exampleSelect">
                                                                        Category <small className="text-danger">*</small>
                                                                    </label>
                                                                    <Input
                                                                        className="form-control-alternative"
                                                                        type="select"
                                                                        name="select"
                                                                        value={values.category}
                                                                        onChange={e => setValues({
                                                                            ...values,
                                                                            category: e.target.value
                                                                        })}
                                                                        id="exampleSelect">
                                                                        <option value={''}>0</option>
                                                                        <option value={'a'}>1</option>
                                                                        <option value={'b'}>2</option>
                                                                        <option value={'c'}>3</option>
                                                                        <option value={'d'}>4</option>
                                                                    </Input>
                                                                    {(errors.category || touched.category) && <small className="text-danger">{errors.category}</small>}
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