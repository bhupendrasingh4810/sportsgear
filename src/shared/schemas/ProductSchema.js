import * as Yup from 'yup';
import * as Validation from '../constants/SchemaConstants';

const ImagesSchema = Yup.object().shape({
    key: Yup.string()
        .required()
        .oneOf(['default', 'search', 'front', 'back', 'left', 'right']),
    value: Yup.string()
        .required(Validation.REQ_IMG)
});

export default Yup.object().shape({
    images: Yup.array()
        .of(ImagesSchema),
    name: Yup.string()
        .required('Product name is reqired')
        .min(2, 'Product anme is too short')
        .max(100, 'Product anme is too long'),
    productName: Yup.string()
        .required('Product name is reqired')
        .min(2, 'Product anme is too short')
        .max(100, 'Product anme is too long'),
    audience: Yup.string()
        .required('Please select audience for your product')
        .oneOf(['MALE', 'FEMALE', 'KIDS', 'UNISEX']),
    brand: Yup.string()
        .required('Please select a brand'),
    sport: Yup.string()
        .required('Please select a sport'),
    category: Yup.string()
        .required('Please select a category'),
    subCategory: Yup.string()
        .required('Please select a subCategory'),
    hasProductReturnPolicy: Yup.boolean(),
    // hasVariants: Yup.boolean(),
    offer: Yup.string(),
    mrp: Yup.number()
        .required('MRP is required'),
    price: Yup.number()
        .required('Price is required'),
    discountType: Yup.string(),
    discount: Yup.number(),
    discountDisplayLabel: Yup.string(),
    sku: Yup.string()
        .required('SKU is required'),
    slug: Yup.string()
        .required('Slug is required'),
    stock: Yup.number(),
    gst: Yup.number(),
    productTags: Yup.array(),
    attributes: Yup.array(),
    technicalDetails: Yup.array(),
    article: Yup.string(),
    year: Yup.number(),
    description: Yup.string()
});
