import * as Yup from 'yup';
import * as Validation from '../constants/schema-constants';

export default Yup.object().shape({
    name: Yup.string()
        .min(2, Validation.MIN_NAME)
        .max(100, Validation.MAX_NAME)
        .required(Validation.REQ_NAME),
    avatar: Yup.string()
        .required(Validation.REQ_IMG),
    email: Yup.string()
        .email('Please provide a valid email')
        .required(Validation.REQ_EMAIL),
    msisdn: Yup.number()
        .typeError('Phone number must be a number')
        .positive('Negative number not allowed')
        .min(1000000000, Validation.MIN_PHONE)
        .max(999999999999, Validation.MAX_PHONE)
        .required(Validation.REQ_PHONE),
    gender: Yup.mixed()
        .oneOf(['MALE', 'FEMALE', 'OTHER'])
        .required(Validation.REQ_GENDER),
    role: Yup.mixed()
        .oneOf(['CUSTOMER', 'SELLER', 'ADMIN', 'WHOLESELLER'])
        .required(Validation.REQ_ROLE),
    password: Yup.string()
        .min(6, Validation.MIN_PASSWORD)
        .max(20, Validation.MAX_PASSWORD)
        .required(Validation.REQ_PASSWORD),
    isVerified: Yup.boolean(),
    dob: Yup.date()
        .required('Date of birth is required')

});