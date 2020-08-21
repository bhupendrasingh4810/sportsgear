import React from 'react';
import { Card, CardBody, Button, Form, FormGroup, Input, InputGroup, InputGroupAddon, InputGroupText, Col, Spinner } from 'reactstrap';
import { Formik } from 'formik';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import LoginSchema from '../../shared/schemas/login-schema';
import { loginAction } from '../../shared/store/actions/auth.action';

const Login = props => {

    const login = async (values, { setSubmitting, resetForm }) => {
        props.loginAction(values);
        setSubmitting(false);
        resetForm();
    };

    return (
        <Col lg="5" md="7">
            <Card className="bg-secondary shadow border-0">
                <CardBody className="px-lg-5 py-lg-5">
                    <Formik
                        initialValues={{ email: '', password: '' }}
                        validationSchema={LoginSchema}
                        onSubmit={login}
                    >
                        {({ values, errors, touched, isSubmitting, handleSubmit, setFieldValue }) => (
                            <Form role="form" onSubmit={handleSubmit}>
                                <FormGroup className="mb-3">
                                    <InputGroup className="input-group-alternative">
                                        <InputGroupAddon addonType="prepend">
                                            <InputGroupText>
                                                <i className="ni ni-email-83" />
                                            </InputGroupText>
                                        </InputGroupAddon>
                                        <Input
                                            placeholder="Email"
                                            type="email"
                                            value={values.email}
                                            onChange={e => setFieldValue('email', e.target.value)}
                                            autoComplete="new-email" />
                                    </InputGroup>
                                    {errors.email && touched.email && <small className="text-danger">{errors.email}</small>}
                                </FormGroup>
                                <FormGroup>
                                    <InputGroup className="input-group-alternative">
                                        <InputGroupAddon addonType="prepend">
                                            <InputGroupText>
                                                <i className="ni ni-lock-circle-open" />
                                            </InputGroupText>
                                        </InputGroupAddon>
                                        <Input
                                            placeholder="Password"
                                            type="password"
                                            value={values.password}
                                            onChange={e => setFieldValue('password', e.target.value)}
                                            autoComplete="new-password" />
                                    </InputGroup>
                                    {errors.password && touched.password && <small className="text-danger">{errors.password}</small>}
                                </FormGroup>
                                <div className="text-center">
                                    <Button
                                        className="my-4"
                                        color="primary"
                                        type="submit"
                                        disabled={isSubmitting}>
                                        {isSubmitting ? <Spinner color="light" style={{ width: '25px', height: '25px' }} /> : 'Sign in'}
                                    </Button>
                                </div>
                            </Form>
                        )}
                    </Formik>
                </CardBody>
            </Card>
        </Col>
    );
};

const mapDispatchToProps = dispatch => bindActionCreators({
    loginAction
}, dispatch)

export default connect(
    null,
    mapDispatchToProps
)(Login);