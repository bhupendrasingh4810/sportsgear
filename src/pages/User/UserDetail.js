import React, { useState, useEffect } from 'react';
import ReactDatetime from "react-datetime";
import { Container, Col, Row, Card, CardHeader, CardBody, Button, Form, FormGroup, Input, InputGroup, InputGroupAddon, InputGroupText } from 'reactstrap';
import UploadImage from '../../components/Form/UploadImage/UploadImage';
import { Formik } from 'formik';
import UserSchema from '../../schemas/UserSchema';

export default props => {

    const [user] = useState({
        name: '',
        avatar: '',
        email: '',
        msisdn: '',
        gender: '',
        dob: '',
        role: '',
        password: '',
        isVerified: false
    });

    const [isLoading, setLoading] = useState(false);

    const [action] = useState('add');

    useEffect(() => getUser(), []);

    function addUser() {
        setLoading(true);
        setLoading(false);
    }

    function getUser() {
        setLoading(true);
        setLoading(false);
    }

    function updateUser() {
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
                                        <h3 className="mb-0">Add User</h3>
                                    </Col>
                                </Row>
                            </CardHeader>
                            <CardBody>
                                <div className="pl-lg-4">
                                    <Formik
                                        initialValues={user}
                                        validationSchema={UserSchema}
                                        onSubmit={(values, actions) => {
                                            actions.setSubmitting(true);
                                            console.log(values);
                                            action === 'add' ? addUser() : updateUser();
                                        }}
                                    >
                                        {({ values, errors, touched, isSubmitting, handleSubmit, setFieldValue }) => (
                                            <Form onSubmit={handleSubmit}>
                                                <Row>
                                                    <Col xs="12" md="4" lg="4" style={{ padding: '25px' }}>
                                                        <UploadImage image={values.avatar} setLogo={avatar => setFieldValue('avatar', avatar)} disabled={isLoading} />
                                                        {(errors.avatar && touched.avatar) && <small className="text-danger">{errors.avatar}</small>}
                                                    </Col>
                                                    <Col xs="12" md="8" lg="8">
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
                                                                        placeholder="Eg: Jack"
                                                                        readOnly={isLoading}
                                                                        value={values.name}
                                                                        onChange={e => setFieldValue('name', e.target.value)}
                                                                        type="text"
                                                                    />
                                                                    {(errors.name && touched.name) && <small className="text-danger">{errors.name}</small>}
                                                                </FormGroup>
                                                            </Col>
                                                        </Row>
                                                        <Row>
                                                            <Col lg="12">
                                                                <FormGroup>
                                                                    <label
                                                                        className="form-control-label"
                                                                        htmlFor="input-email">
                                                                        Email <small className="text-danger">*</small>
                                                                    </label>
                                                                    <Input
                                                                        className="form-control-alternative"
                                                                        id="input-email"
                                                                        placeholder="Eg: abc@gmail.com"
                                                                        readOnly={isLoading}
                                                                        value={values.email}
                                                                        onChange={e => setFieldValue('email', e.target.value)}
                                                                        type="email"
                                                                    />
                                                                    {(errors.email && touched.email) && <small className="text-danger">{errors.email}</small>}
                                                                </FormGroup>
                                                            </Col>
                                                        </Row>
                                                        <Row>
                                                            <Col lg="12">
                                                                <FormGroup>
                                                                    <label
                                                                        className="form-control-label"
                                                                        htmlFor="input-phone-number">
                                                                        Phone Number <small className="text-danger">*</small>
                                                                    </label>
                                                                    <Input
                                                                        className="form-control-alternative"
                                                                        id="input-phone-number"
                                                                        placeholder="Eg: 9998 8877 76"
                                                                        readOnly={isLoading}
                                                                        value={values.msisdn}
                                                                        onChange={e => setFieldValue('msisdn', e.target.value)}
                                                                        type="number"
                                                                    />
                                                                    {(errors.msisdn && touched.msisdn) && <small className="text-danger">{errors.msisdn}</small>}
                                                                </FormGroup>
                                                            </Col>
                                                        </Row>
                                                        <Row>
                                                            <Col lg="12">
                                                                <FormGroup>
                                                                    <label
                                                                        className="form-control-label"
                                                                        htmlFor="input-select-gender">
                                                                        Gender <small className="text-danger">*</small>
                                                                    </label>
                                                                    <Input
                                                                        className="form-control-alternative"
                                                                        type="select"
                                                                        name="select"
                                                                        value={values.gender}
                                                                        onChange={e => setFieldValue('gender', e.target.value)}
                                                                        id="input-select-gender">
                                                                        <option value={''}>Select Gender</option>
                                                                        <option value={'MALE'}>Male</option>
                                                                        <option value={'FEMALE'}>Female</option>
                                                                        <option value={'OTHER'}>Other</option>
                                                                    </Input>
                                                                    {(errors.gender && touched.gender) && <small className="text-danger">{errors.gender}</small>}
                                                                </FormGroup>
                                                            </Col>
                                                        </Row>
                                                        <Row>
                                                            <Col lg="12">
                                                                <FormGroup>
                                                                    <label
                                                                        className="form-control-label"
                                                                        htmlFor="input-select-gender">
                                                                        Date of Birth <small className="text-danger">*</small>
                                                                    </label>
                                                                    <InputGroup className="input-group-alternative">
                                                                        <InputGroupAddon addonType="prepend">
                                                                            <InputGroupText>
                                                                                <i className="ni ni-calendar-grid-58" />
                                                                            </InputGroupText>
                                                                        </InputGroupAddon>
                                                                        <ReactDatetime
                                                                            inputProps={{
                                                                                placeholder: "Select Date of birth"
                                                                            }}
                                                                            timeFormat={false}
                                                                            closeOnSelect={true}
                                                                            onChange={e => setFieldValue('dob', e)}
                                                                        />
                                                                    </InputGroup>
                                                                </FormGroup>
                                                            </Col>
                                                        </Row>
                                                        <Row>
                                                            <Col lg="12">
                                                                <FormGroup>
                                                                    <label
                                                                        className="form-control-label"
                                                                        htmlFor="input-select-role">
                                                                        Role <small className="text-danger">*</small>
                                                                    </label>
                                                                    <Input
                                                                        className="form-control-alternative"
                                                                        type="select"
                                                                        name="select"
                                                                        value={values.role}
                                                                        onChange={e => setFieldValue('role', e.target.value)}
                                                                        id="input-select-role">
                                                                        <option value={''}>Select Role</option>
                                                                        <option value={'ADMIN'}>Admin</option>
                                                                        <option value={'CUSTOMER'}>Customer</option>
                                                                        <option value={'SELLER'}>Seller</option>
                                                                        <option value={'WHOLESELLER'}>Wholeseller</option>
                                                                    </Input>
                                                                    {(errors.role && touched.role) && <small className="text-danger">{errors.role}</small>}
                                                                </FormGroup>
                                                            </Col>
                                                        </Row>
                                                        <Row>
                                                            <Col lg="12">
                                                                <FormGroup>
                                                                    <label
                                                                        className="form-control-label"
                                                                        htmlFor="input-password">
                                                                        Password <small className="text-danger">*</small>
                                                                    </label>
                                                                    <Input
                                                                        className="form-control-alternative"
                                                                        id="input-password"
                                                                        placeholder="Eg: ******"
                                                                        readOnly={isLoading}
                                                                        value={values.password}
                                                                        onChange={e => setFieldValue('password', e.target.value)}
                                                                        type="password"
                                                                    />
                                                                    {(errors.password && touched.password) && <small className="text-danger">{errors.password}</small>}
                                                                </FormGroup>
                                                            </Col>
                                                        </Row>
                                                        <Row>
                                                            <Col lg="12">
                                                                <FormGroup>
                                                                    <Input
                                                                        className="form-control-alternative"
                                                                        id="input-username"
                                                                        readOnly={isLoading}
                                                                        value={values.isVerified}
                                                                        onChange={e => setFieldValue('isVerified', e.target.checked)}
                                                                        type="checkbox"
                                                                    />
                                                                    <label
                                                                        className="form-control-label"
                                                                        htmlFor="input-username">
                                                                        This user is {values.isVerified ? 'verified' : 'not verified'}
                                                                    </label>
                                                                    {(errors.isVerified && touched.isVerified) && <small className="text-danger">{errors.isVerified}</small>}
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