import React from 'react';
import { Card, CardBody, Button, Form, FormGroup, Input, InputGroup, InputGroupAddon, InputGroupText, Col } from 'reactstrap';

export default () => {
    return (
        <Col lg="5" md="7">
            <Card className="bg-secondary shadow border-0">
                <CardBody className="px-lg-5 py-lg-5">
                    <Form role="form">
                        <FormGroup className="mb-3">
                            <InputGroup className="input-group-alternative">
                                <InputGroupAddon addonType="prepend">
                                    <InputGroupText>
                                        <i className="ni ni-email-83" />
                                    </InputGroupText>
                                </InputGroupAddon>
                                <Input placeholder="Email" type="email" autoComplete="new-email" />
                            </InputGroup>
                        </FormGroup>
                        <FormGroup>
                            <InputGroup className="input-group-alternative">
                                <InputGroupAddon addonType="prepend">
                                    <InputGroupText>
                                        <i className="ni ni-lock-circle-open" />
                                    </InputGroupText>
                                </InputGroupAddon>
                                <Input placeholder="Password" type="password" autoComplete="new-password" />
                            </InputGroup>
                        </FormGroup>
                        <div className="text-center">
                            <Button className="my-4" color="primary" type="button">
                                Sign in
                                </Button>
                        </div>
                    </Form>
                </CardBody>
            </Card>
        </Col>
    );
};