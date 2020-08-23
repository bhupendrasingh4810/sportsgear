import React from 'react';
import { Container, Col, Row, Card, CardHeader, CardBody, Button, Form, FormGroup, Input, Spinner } from 'reactstrap';
import { Formik } from 'formik';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import UploadImage from '../Fields/UploadImage/UploadImage';
import { uploadImageAction } from '../../shared/store/actions/app.action';

import BrandSchema from '../../shared/schemas/brand-schema';

const BrandDetail = props => {
    const { data, action, heading, submitAction } = props;

    function uploadImage(file) {
        props.uploadImageAction(file);
    }

    function getSlug(name) {
        return String(name).toLocaleLowerCase().split(' ').join('-');
    }

    return (
        <Container className="mt--7" fluid>
            <Row className="justify-content-md-center">
                <Col className="order-xl-1" xl="8">
                    <Card className="bg-secondary shadow">
                        <CardHeader className="bg-white border-0">
                            <Row className="align-items-center">
                                <Col xs="12">
                                    <h3 className="mb-0">{heading}</h3>
                                </Col>
                            </Row>
                        </CardHeader>
                        <CardBody>
                            <Formik
                                initialValues={data}
                                validationSchema={BrandSchema}
                                onSubmit={(values, { setSubmitting }) => {
                                    console.log(values, submitAction);
                                    submitAction(values, setSubmitting);
                                }}
                            >
                                {({ values, touched, errors, isSubmitting, handleSubmit, setFieldValue, setValues }) => (
                                    <Form onSubmit={handleSubmit}>
                                        <div className="pl-lg-4">
                                            <Row>
                                                <Col xs="12" md="4" lg="4">
                                                    <UploadImage image={values.logo} setLogo={(logo, file) => {
                                                        setFieldValue('logo', logo);
                                                        uploadImage(file);
                                                    }} disabled={isSubmitting} />
                                                </Col>
                                                <Col xs="12" md="8" lg="8">
                                                    <Row>
                                                        <Col lg="12">
                                                            <FormGroup>
                                                                <label
                                                                    className="form-control-label"
                                                                    htmlFor="input-name">
                                                                    Brand Name
                                                            </label>
                                                                <Input
                                                                    className="form-control-alternative"
                                                                    id="input-name"
                                                                    placeholder="Eg: Nike"
                                                                    disabled={isSubmitting}
                                                                    value={values.name}
                                                                    onChange={e => setValues({
                                                                        ...values,
                                                                        name: e.target.value,
                                                                        slug: getSlug(e.target.value)
                                                                    })}
                                                                    type="text"
                                                                />
                                                                {errors.name && touched.name && <small className="text-danger">{errors.name}</small>}
                                                            </FormGroup>
                                                        </Col>
                                                    </Row>
                                                    <Row>
                                                        <Col lg="12">
                                                            <FormGroup>
                                                                <label
                                                                    className="form-control-label"
                                                                    htmlFor="input-slug">
                                                                    Slug
                                                            </label>
                                                                <Input
                                                                    className="form-control-alternative"
                                                                    id="input-slug"
                                                                    placeholder="Eg: nike"
                                                                    value={values.slug}
                                                                    onChange={e => setFieldValue('slug', e.target.value)}
                                                                    disabled={true}
                                                                    type="text"
                                                                />
                                                            </FormGroup>
                                                        </Col>
                                                    </Row>
                                                    <div className="text-center">
                                                        <Button
                                                            className="my-4"
                                                            disabled={isSubmitting}
                                                            color="primary"
                                                            type="submit">
                                                            {isSubmitting ? <Spinner color="light" style={{ width: '25px', height: '25px' }} /> : action}
                                                        </Button>
                                                    </div>
                                                </Col>
                                            </Row>
                                        </div>
                                    </Form>
                                )}
                            </Formik>
                        </CardBody>
                    </Card>
                </Col>
            </Row>
        </Container>
    );
};

const mapDispatchToProps = dispatch => bindActionCreators({
    uploadImageAction
}, dispatch);

export default connect(
    null,
    mapDispatchToProps
)(BrandDetail);