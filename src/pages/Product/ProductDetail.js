import React, { useState, useEffect } from 'react';
import { Container, Col, Row, Card, CardHeader, CardBody, Button, Form, FormGroup, Input } from 'reactstrap';
import UploadImage from '../../components/Form/UploadImage/UploadImage';
import { Formik, FieldArray } from 'formik';
import ProductSchema from '../../shared/schemas/ProductSchema';

export default props => {

    const [product] = useState({
        images: [
            { key: 'default', value: '' },
            { key: 'search', value: '' },
            { key: 'front', value: '' },
            { key: 'back', value: '' },
            { key: 'left', value: '' },
            { key: 'right', value: '' }
        ],
        name: '',
        productName: '',
        audience: '',
        brand: '',
        sport: '',
        category: '',
        subCategory: '',
        hasProductReturnPolicy: false,
        hasVariants: false,
        offer: '',
        mrp: undefined,
        price: undefined,
        discountType: '',
        discount: undefined,
        discountDisplayLabel: '',
        sku: '',
        slug: '',
        stock: undefined,
        gst: undefined,
        productTags: [],
        attributes: [],
        technicalDetails: [],
        article: '',
        year: undefined,
        description: ''
    });

    const [isLoading, setLoading] = useState(false);

    const [action] = useState('add');

    useEffect(() => getProduct(), []);

    function getSlug(name) {
        return String(name).toLocaleLowerCase().split(' ').join('-');
    }

    function addProduct() {
        setLoading(true);
        setLoading(false);
    }

    function getProduct() {
        setLoading(true);
        setLoading(false);
    }

    function updateProduct() {
        setLoading(true);
        setLoading(false);
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
                                        <h3 className="mb-0">Add Product</h3>
                                    </Col>
                                </Row>
                            </CardHeader>
                            <CardBody>
                                <div className="pl-lg-4">
                                    <Formik
                                        initialValues={product}
                                        validationSchema={ProductSchema}
                                        onSubmit={(values, actions) => {
                                            actions.setSubmitting(true);
                                            console.log(values);
                                            action === 'add' ? addProduct() : updateProduct();
                                        }}
                                    >
                                        {({ values, errors, touched, isSubmitting, handleSubmit, setValues, setFieldValue }) => (
                                            <Form onSubmit={handleSubmit}>
                                                <Row>
                                                    <FieldArray
                                                        name="images"
                                                        render={arrayHelpers => (
                                                            <>
                                                                {values.images.map((data, index, arr) => (
                                                                    <Col key={index} xs="12" md="6" lg="2" style={{ textAlign: '-webkit-center' }}>
                                                                        <h4 className="text-capitalize">{data.key}</h4>
                                                                        <UploadImage image={data.value || ''}
                                                                            setLogo={value => setFieldValue(`values.images.${index}.value`, value)}
                                                                            uniqueKey={data.key}
                                                                            disabled={isLoading} />
                                                                        {/* {errors.images[index].value && touched.images[index].value && <small className="text-danger">{errors.images[index].value}</small>} */}
                                                                    </Col>
                                                                ))}
                                                            </>
                                                        )}
                                                    />
                                                </Row>
                                                <Row className="mt-3">
                                                    <Col xs="12" md="4" lg="4">
                                                        <FormGroup>
                                                            <label
                                                                className="form-control-label"
                                                                htmlFor="input-name">
                                                                Name <small className="text-danger">*</small>
                                                            </label>
                                                            <Input
                                                                className="form-control-alternative"
                                                                id="input-name"
                                                                placeholder="Eg: Puma T-Shirt"
                                                                readOnly={isLoading}
                                                                value={values.name}
                                                                onChange={e => setFieldValue('name', e.target.value)}
                                                                type="text"
                                                            />
                                                            {errors.name && touched.name && <small className="text-danger">{errors.name}</small>}
                                                        </FormGroup>
                                                    </Col>
                                                    <Col xs="12" md="4" lg="4">
                                                        <FormGroup>
                                                            <label
                                                                className="form-control-label"
                                                                htmlFor="input-product-name">
                                                                Product Name <small className="text-danger">*</small>
                                                            </label>
                                                            <Input
                                                                className="form-control-alternative"
                                                                id="input-product-name"
                                                                placeholder="Eg: Black Puma Shirt Round Neck"
                                                                readOnly={isLoading}
                                                                value={values.productName}
                                                                onChange={e => setValues({
                                                                    ...values,
                                                                    productName: e.target.value,
                                                                    slug: getSlug(e.target.value)
                                                                })}
                                                                type="text"
                                                            />
                                                            {(errors.productName && touched.productName) && <small className="text-danger">{errors.productName}</small>}
                                                        </FormGroup>
                                                    </Col>
                                                    <Col xs="12" md="4" lg="4">
                                                        <FormGroup>
                                                            <label
                                                                className="form-control-label"
                                                                htmlFor="input-slug">
                                                                Slug <small className="text-danger">*</small>
                                                            </label>
                                                            <Input
                                                                className="form-control-alternative"
                                                                id="input-slug"
                                                                placeholder="Eg: black-puma-shirt-round-neck"
                                                                disabled={true}
                                                                value={values.slug}
                                                                onChange={e => setFieldValue('slug', e.target.value)}
                                                                type="text"
                                                            />
                                                            {(errors.productName && touched.productName) && <small className="text-danger">{errors.productName}</small>}
                                                        </FormGroup>
                                                    </Col>
                                                </Row>
                                                <Row>
                                                    <Col lg="2" md="6" xs="12">
                                                        <FormGroup>
                                                            <label
                                                                className="form-control-label"
                                                                htmlFor="input-select-article">
                                                                Article <small className="text-danger">*</small>
                                                            </label>
                                                            <Input
                                                                className="form-control-alternative"
                                                                type="select"
                                                                name="select"
                                                                value={values.article}
                                                                onChange={e => setFieldValue('article', e.target.value)}
                                                                id="input-select-article">
                                                                <option value={''}>Select Article</option>
                                                                <option value={'MALE'}>Male</option>
                                                            </Input>
                                                            {(errors.article && touched.article) && <small className="text-danger">{errors.article}</small>}
                                                        </FormGroup>
                                                    </Col>
                                                    <Col lg="2" md="6" xs="12">
                                                        <FormGroup>
                                                            <label
                                                                className="form-control-label"
                                                                htmlFor="input-select-brand">
                                                                Brand <small className="text-danger">*</small>
                                                            </label>
                                                            <Input
                                                                className="form-control-alternative"
                                                                type="select"
                                                                name="select"
                                                                value={values.brand}
                                                                onChange={e => setFieldValue('brand', e.target.value)}
                                                                id="input-select-brand">
                                                                <option value={''}>Select Brand</option>
                                                                <option value={'MALE'}>Male</option>
                                                            </Input>
                                                            {(errors.brand && touched.brand) && <small className="text-danger">{errors.brand}</small>}
                                                        </FormGroup>
                                                    </Col>
                                                    <Col lg="2" md="6" xs="12">
                                                        <FormGroup>
                                                            <label
                                                                className="form-control-label"
                                                                htmlFor="input-select-sport">
                                                                Section <small className="text-danger">*</small>
                                                            </label>
                                                            <Input
                                                                className="form-control-alternative"
                                                                type="select"
                                                                name="select"
                                                                value={values.sport}
                                                                onChange={e => setFieldValue('sport', e.target.value)}
                                                                id="input-select-sport">
                                                                <option value={''}>Select Section</option>
                                                                <option value={'MALE'}>Male</option>
                                                            </Input>
                                                            {(errors.sport && touched.sport) && <small className="text-danger">{errors.sport}</small>}
                                                        </FormGroup>
                                                    </Col>
                                                    <Col lg="2" md="6" xs="12">
                                                        <FormGroup>
                                                            <label
                                                                className="form-control-label"
                                                                htmlFor="input-select-category">
                                                                Category <small className="text-danger">*</small>
                                                            </label>
                                                            <Input
                                                                className="form-control-alternative"
                                                                type="select"
                                                                name="select"
                                                                value={values.category}
                                                                onChange={e => setFieldValue('category', e.target.value)}
                                                                id="input-select-category">
                                                                <option value={''}>Select Category</option>
                                                                <option value={'MALE'}>Male</option>
                                                            </Input>
                                                            {(errors.category && touched.category) && <small className="text-danger">{errors.category}</small>}
                                                        </FormGroup>
                                                    </Col>
                                                    <Col lg="2" md="6" xs="12">
                                                        <FormGroup>
                                                            <label
                                                                className="form-control-label"
                                                                htmlFor="input-select-sub-category">
                                                                Sub Category <small className="text-danger">*</small>
                                                            </label>
                                                            <Input
                                                                className="form-control-alternative"
                                                                type="select"
                                                                name="select"
                                                                value={values.subCategory}
                                                                onChange={e => setFieldValue('subCategory', e.target.value)}
                                                                id="input-select-sub-category">
                                                                <option value={''}>Select Sub Category</option>
                                                                <option value={'MALE'}>Male</option>
                                                            </Input>
                                                            {(errors.subCategory && touched.subCategory) && <small className="text-danger">{errors.subCategory}</small>}
                                                        </FormGroup>
                                                    </Col>
                                                    <Col lg="2" md="6" xs="12">
                                                        <FormGroup>
                                                            <label
                                                                className="form-control-label"
                                                                htmlFor="input-select-audience">
                                                                Audience <small className="text-danger">*</small>
                                                            </label>
                                                            <Input
                                                                className="form-control-alternative"
                                                                type="select"
                                                                name="select"
                                                                value={values.subCategory}
                                                                onChange={e => setFieldValue('audience', e.target.value)}
                                                                id="input-select-audience">
                                                                <option value={''}>Select Audience</option>
                                                                <option value={'MALE'}>Male</option>
                                                            </Input>
                                                            {(errors.audience && touched.audience) && <small className="text-danger">{errors.audience}</small>}
                                                        </FormGroup>
                                                    </Col>
                                                </Row>
                                                <Row>
                                                    <Col lg="2" md="6" xs="12">
                                                        <FormGroup>
                                                            <label
                                                                className="form-control-label"
                                                                htmlFor="input-mrp">
                                                                Max retail price (MRP) <small className="text-danger">*</small>
                                                            </label>
                                                            <Input
                                                                className="form-control-alternative"
                                                                id="input-mrp"
                                                                placeholder="Eg: 2500"
                                                                readOnly={isLoading}
                                                                value={values.mrp}
                                                                onChange={e => setFieldValue('mrp', e.target.value)}
                                                                type="number"
                                                            />
                                                            {(errors.mrp && touched.mrp) && <small className="text-danger">{errors.mrp}</small>}
                                                        </FormGroup>
                                                    </Col>
                                                    <Col lg="2" md="6" xs="12">
                                                        <FormGroup>
                                                            <label
                                                                className="form-control-label"
                                                                htmlFor="input-gst">
                                                                GST (After Discount) <small className="text-danger">*</small>
                                                            </label>
                                                            <Input
                                                                className="form-control-alternative"
                                                                id="input-gst"
                                                                placeholder="Eg: 18"
                                                                readOnly={isLoading}
                                                                value={values.gst}
                                                                onChange={e => setFieldValue('gst', e.target.value)}
                                                                type="number"
                                                            />
                                                            {(errors.gst && touched.gst) && <small className="text-danger">{errors.gst}</small>}
                                                        </FormGroup>
                                                    </Col>
                                                    <Col lg="2" md="6" xs="12">
                                                        <FormGroup>
                                                            <label
                                                                className="form-control-label"
                                                                htmlFor="input-select-discount-type">
                                                                Discount type <small className="text-danger">*</small>
                                                            </label>
                                                            <Input
                                                                className="form-control-alternative"
                                                                type="select"
                                                                name="select"
                                                                value={values.subCategory}
                                                                onChange={e => setFieldValue('discountType', e.target.value)}
                                                                id="input-select-discount-type">
                                                                <option value={''}>Select Discount Type</option>
                                                                <option value={'MALE'}>Male</option>
                                                            </Input>
                                                            {(errors.discountType && touched.discountType) && <small className="text-danger">{errors.discountType}</small>}
                                                        </FormGroup>
                                                    </Col>
                                                    <Col lg="2" md="6" xs="12">
                                                        <FormGroup>
                                                            <label
                                                                className="form-control-label"
                                                                htmlFor="input-discount">
                                                                Discount <small className="text-danger">*</small>
                                                            </label>
                                                            <Input
                                                                className="form-control-alternative"
                                                                id="input-discount"
                                                                placeholder="Eg: 20"
                                                                readOnly={isLoading}
                                                                value={values.discount}
                                                                onChange={e => setFieldValue('discount', e.target.value)}
                                                                type="number"
                                                            />
                                                            {(errors.discount && touched.discount) && <small className="text-danger">{errors.discount}</small>}
                                                        </FormGroup>
                                                    </Col>
                                                    <Col lg="2" md="6" xs="12">
                                                        <FormGroup>
                                                            <label
                                                                className="form-control-label"
                                                                htmlFor="input-discount-dispaly-label">
                                                                Discount display label <small className="text-danger">*</small>
                                                            </label>
                                                            <Input
                                                                className="form-control-alternative"
                                                                id="input-discount-dispaly-label"
                                                                placeholder="Eg: 10% OFF"
                                                                disabled={true}
                                                                value={values.discountDisplayLabel}
                                                                onChange={e => setFieldValue('discountDisplayLabel', e.target.value)}
                                                                type="text"
                                                            />
                                                            {(errors.discountDisplayLabel && touched.discountDisplayLabel) && <small className="text-danger">{errors.discountDisplayLabel}</small>}
                                                        </FormGroup>
                                                    </Col>
                                                    <Col lg="2" md="6" xs="12">
                                                        <FormGroup>
                                                            <label
                                                                className="form-control-label"
                                                                htmlFor="input-price">
                                                                Price <small className="text-danger">*</small>
                                                            </label>
                                                            <Input
                                                                className="form-control-alternative"
                                                                id="input-price"
                                                                placeholder="Eg: 1800"
                                                                readOnly={isLoading}
                                                                value={values.price}
                                                                onChange={e => setFieldValue('price', e.target.value)}
                                                                type="number"
                                                            />
                                                            {(errors.price && touched.price) && <small className="text-danger">{errors.price}</small>}
                                                        </FormGroup>
                                                    </Col>
                                                </Row>
                                                <Row>
                                                    <Col lg="4" md="4" xs="12">
                                                        <FormGroup>
                                                            <label
                                                                className="form-control-label"
                                                                htmlFor="input-sku">
                                                                Product ID (SKU) <small className="text-danger">*</small>
                                                            </label>
                                                            <Input
                                                                className="form-control-alternative"
                                                                id="input-sku"
                                                                placeholder="Eg: PUM-SHI-M-20"
                                                                readOnly={isLoading}
                                                                value={values.sku}
                                                                onChange={e => setFieldValue('sku', e.target.value)}
                                                                type="text"
                                                            />
                                                            {(errors.sku && touched.sku) && <small className="text-danger">{errors.sku}</small>}
                                                        </FormGroup>
                                                    </Col>
                                                    <Col lg="4" md="4" xs="12">
                                                        <FormGroup>
                                                            <label
                                                                className="form-control-label"
                                                                htmlFor="input-stock">
                                                                Stock <small className="text-danger">*</small>
                                                            </label>
                                                            <Input
                                                                className="form-control-alternative"
                                                                id="input-stock"
                                                                placeholder="Eg: 100"
                                                                readOnly={isLoading}
                                                                value={values.stock}
                                                                onChange={e => setFieldValue('stock', e.target.value)}
                                                                type="number"
                                                            />
                                                            {(errors.stock && touched.stock) && <small className="text-danger">{errors.stock}</small>}
                                                        </FormGroup>
                                                    </Col>
                                                    <Col lg="4" md="4" xs="12">
                                                        <FormGroup>
                                                            <label
                                                                className="form-control-label"
                                                                htmlFor="input-year">
                                                                Year <small className="text-danger">*</small>
                                                            </label>
                                                            <Input
                                                                className="form-control-alternative"
                                                                id="input-year"
                                                                placeholder="Eg: 2020"
                                                                readOnly={isLoading}
                                                                value={values.year}
                                                                onChange={e => setFieldValue('year', e.target.value)}
                                                                type="text"
                                                            />
                                                            {(errors.year && touched.year) && <small className="text-danger">{errors.year}</small>}
                                                        </FormGroup>
                                                    </Col>
                                                </Row>
                                                <Row>
                                                    <Col lg="6" md="6" xs="12">
                                                        <h4>Tags</h4>
                                                        <Card className="bg-secondary shadow">
                                                            <CardBody className="bg-secondary border-0" style={{ minHeight: '105px', maxHeight: '105px' }}>
                                                                {['Trending', 'Best Seller'].map((tag, index) => {
                                                                    return <Button
                                                                        className="mt-1"
                                                                        color={'primary'}
                                                                        size="sm"
                                                                        type="button"
                                                                        style={{ width: 'fit-content' }}
                                                                        key={index}>
                                                                        {tag}
                                                                    </Button>
                                                                })}
                                                            </CardBody>
                                                        </Card>
                                                    </Col>
                                                    <Col lg="6" md="6" xs="12">
                                                        <FormGroup>
                                                            <h4>About Me</h4>
                                                            <Input
                                                                className="form-control-alternative"
                                                                placeholder="A few words about this product ..."
                                                                rows="4"
                                                                defaultValue=""
                                                                type="textarea"
                                                                style={{ resize: 'none' }}
                                                            />
                                                        </FormGroup>
                                                    </Col>
                                                </Row>
                                                <Row>
                                                    <Col xs="12" md="12" lg="12" className="text-center">
                                                        <div className="custom-control custom-control-alternative custom-checkbox">
                                                            <input
                                                                className="custom-control-input"
                                                                id=" customCheckLogin"
                                                                type="checkbox"
                                                                disabled={isLoading}
                                                                value={values.hasProductReturnPolicy}
                                                                onChange={e => setFieldValue('hasProductReturnPolicy', e.target.checked)}
                                                            />
                                                            <label
                                                                className="custom-control-label"
                                                                htmlFor=" customCheckLogin">
                                                                <span className="text-muted">{values.hasProductReturnPolicy ? 'Has' : 'Doesn\'t have'} return policy</span>
                                                            </label>
                                                        </div>
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