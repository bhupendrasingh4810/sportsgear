import React, { useState, useEffect } from 'react';
import { Container, Col, Row, Card, CardHeader, CardBody, Button, Form, FormGroup, Input } from 'reactstrap';
import { connect } from 'react-redux';

import UploadImage from '../../components/Form/UploadImage/UploadImage';
import { addBrandAction } from '../../shared/store/actions/brand.action';
import { uploadImageAction } from '../../shared/store/actions/app.action';
import { bindActionCreators } from 'redux';

const BrandDetail = props => {

    const [brand, setBrand] = useState({
        name: "",
        logo: "",
        slug: ""
    });

    const [isLoading, setLoading] = useState(false);

    const [action] = useState('add');

    useEffect(() => getBrand(), []);

    function setLogo(logo, file) {
        setBrand({ ...brand, logo });
        props.uploadImageAction(file);
    }

    function onBrandNameChange(name) {
        setBrand({
            ...brand,
            name,
            slug: String(name).toLocaleLowerCase().split(' ').join('-')
        });
    }

    async function addBrand() {
        setLoading(true);
        await props.addBrandAction({ ...brand, logo: props.logo });
        setLoading(false);
    }

    function getBrand() {
        setLoading(true);
        setLoading(false);
    }

    function updateBrand() {
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
                                        <h3 className="mb-0">Add Brand</h3>
                                    </Col>
                                </Row>
                            </CardHeader>
                            <CardBody>
                                <Form>
                                    <div className="pl-lg-4">
                                        <Row>
                                            <Col xs="12" md="4" lg="4">
                                                <UploadImage image={brand.logo} setLogo={setLogo.bind(this)} disabled={isLoading} />
                                            </Col>
                                            <Col xs="12" md="8" lg="8">
                                                <Row>
                                                    <Col lg="12">
                                                        <FormGroup>
                                                            <label
                                                                className="form-control-label"
                                                                htmlFor="input-username">
                                                                Brand Name
                                                            </label>
                                                            <Input
                                                                className="form-control-alternative"
                                                                id="input-username"
                                                                placeholder="Eg: Nike"
                                                                disabled={isLoading}
                                                                value={brand.name}
                                                                onChange={e => onBrandNameChange(e.target.value)}
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
                                                                value={brand.slug}
                                                                onChange={e => setBrand({ ...brand, slug: e.target.value })}
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
                                                        onClick={() => action === 'add' ? addBrand() : updateBrand()}
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

const mapStateToProps = ({ app, brand }) => ({
    logo: app.image,
    brand: brand.brand
});

const mapDispatchToProps = dispatch => bindActionCreators({
    addBrandAction,
    uploadImageAction
}, dispatch);

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(BrandDetail);