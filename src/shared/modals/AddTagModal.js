import React from 'react';
import { Row, Col, Button, Modal, Card, CardBody, Form, FormGroup, Input } from 'reactstrap';
import { useState } from 'react';
import { REQ_NAME } from '../constants/schema-constants';

export default props => {

    let formSubmitted = false;

    const [isOpen, toggleModal] = useState(false);

    const [isLoading] = useState(false);

    const [tagName, setTag] = useState('');

    function addTag() {
        this.formSubmitted = true;
        console.log(tagName);
    }

    return (
        <Row>
            <Col md="12">
                <Button
                    color="primary"
                    type="button"
                    onClick={() => toggleModal(!isOpen)}
                    size='sm'
                >
                    {props.btnLabel}
                </Button>
                <Modal
                    className="modal-dialog-centered"
                    size="sm"
                    isOpen={isOpen}
                    toggle={() => toggleModal(!isOpen)}
                >
                    <div className="modal-body p-0">
                        <Card className="bg-secondary shadow border-0">
                            <CardBody className="px-lg-5 py-lg-5">
                                <Form role="form">
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
                                                    placeholder="Eg: Trending"
                                                    readOnly={isLoading}
                                                    value={tagName}
                                                    onChange={e => setTag(e.target.value)}
                                                    type="text"
                                                />
                                                {formSubmitted && !tagName && <small className="text-danger">{REQ_NAME}</small>}
                                            </FormGroup>
                                        </Col>
                                    </Row>
                                    <div className="text-center">
                                        <Button
                                            className="my-4"
                                            color="primary"
                                            type="button"
                                            onClick={e => addTag()}
                                        >
                                            Save
                                    </Button>
                                    </div>
                                </Form>
                            </CardBody>
                        </Card>
                    </div>
                </Modal>
            </Col>
        </Row>
    );
};