import * as Yup from 'yup';
import * as Validation from '../constants/SchemaConstants';

export default Yup.object().shape({
    name: Yup.string()
        .min(2, Validation.MIN_NAME)
        .max(100, Validation.MAX_NAME)
        .required(Validation.REQ_NAME),
    propertyName: Yup.string()
        .min(2, Validation.MIN_NAME)
        .max(100, Validation.MAX_NAME)
        .required(Validation.REQ_NAME),
    propertyValues: Yup.array().required('Values are required')
});