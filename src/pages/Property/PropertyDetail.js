import React, { useState, useEffect } from 'react';
import { Container, Col, Row, Card, CardHeader, CardBody, Button, Form, FormGroup, Input } from 'reactstrap';
import { Formik, FieldArray } from 'formik';
import PropertySchema from '../../shared/schemas/PropertySchema';

export default props => {

    const [property] = useState({
        name: '',
        propertyName: '',
        propertyValues: ['']
    });

    const [isLoading, setLoading] = useState(false);

    const [action] = useState('add');

    useEffect(() => getProperty(), []);

    function addProperty() {
        setLoading(true);
        setLoading(false);
    }

    function getProperty() {
        setLoading(true);
        setLoading(false);
    }

    function updateProperty() {
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
                                        <h3 className="mb-0">Add Property</h3>
                                    </Col>
                                </Row>
                            </CardHeader>
                            <CardBody>
                                <div className="pl-lg-4">
                                    <Formik
                                        initialValues={property}
                                        validationSchema={PropertySchema}
                                        onSubmit={(values, actions) => {
                                            actions.setSubmitting(true);
                                            console.log(values);
                                            action === 'add' ? addProperty() : updateProperty();
                                        }}
                                    >
                                        {({ values, errors, touched, isSubmitting, handleSubmit, setValues, setFieldValue }) => (
                                            <Form onSubmit={handleSubmit}>
                                                <Row>
                                                    <Col lg="12">
                                                        <FormGroup>
                                                            <label
                                                                className="form-control-label"
                                                                htmlFor="input-name">
                                                                Name <small className="text-danger">*</small>
                                                            </label>
                                                            <Input
                                                                className="form-control-alternative"
                                                                id="input-name"
                                                                placeholder="Eg: Shirt Size"
                                                                readOnly={isLoading}
                                                                value={values.name}
                                                                onChange={e => setValues({
                                                                    ...values,
                                                                    name: e.target.value
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
                                                                htmlFor="input-property-name">
                                                                Property Name <small className="text-danger">*</small>
                                                            </label>
                                                            <Input
                                                                className="form-control-alternative"
                                                                id="input-property-name"
                                                                placeholder="Eg: size"
                                                                value={values.propertyName}
                                                                onChange={e => setValues({
                                                                    ...values,
                                                                    propertyName: e.target.value
                                                                })}
                                                                type="text"
                                                            />
                                                            {errors.propertyName && touched.propertyName && <small className="text-danger">{errors.propertyName}</small>}
                                                        </FormGroup>
                                                    </Col>
                                                </Row>
                                                <h4>Values <small>*</small></h4>
                                                <FieldArray
                                                    name="propertyValues"
                                                    render={arrayHelpers => (
                                                        <Row>
                                                            {values.propertyValues.map((data, index, arr) => (
                                                                <Col key={index} xs="12" md="6" lg="4">
                                                                    <h6>Value #{index + 1}</h6>
                                                                    <Input
                                                                        className="form-control-alternative"
                                                                        name={`value.${index}`}
                                                                        value={data || ''}
                                                                        onChange={e => setFieldValue(`propertyValues.${index}`, e.target.value)} />
                                                                    <div className="mt-2 w-100 d-inline-block">
                                                                        <Button
                                                                            className="float-right btn-icon btn-2"
                                                                            size="sm"
                                                                            color="success"
                                                                            onClick={() => arrayHelpers.insert(index, '')}
                                                                            type="button">
                                                                            <span className="btn-inner--icon">
                                                                                <i className="ni ni-fat-add" />
                                                                            </span>
                                                                        </Button>
                                                                        {arr.length > 1
                                                                            ? <Button
                                                                                className="float-right btn-icon btn-2 mr-2"
                                                                                size="sm"
                                                                                color="danger"
                                                                                onClick={() => arrayHelpers.remove(index)}
                                                                                type="button">
                                                                                <span className="btn-inner--icon">
                                                                                    <i className="ni ni-fat-delete" />
                                                                                </span>
                                                                            </Button>
                                                                            : null}
                                                                    </div>
                                                                </Col>
                                                            ))}
                                                        </Row>
                                                    )}
                                                />
                                                <div className="text-center">
                                                    <Button
                                                        className="my-4"
                                                        disabled={isLoading}
                                                        color="primary"
                                                        type="submit">
                                                        {action === 'add' ? 'Save' : 'Update'}
                                                    </Button>
                                                </div>
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