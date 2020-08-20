import * as Yup from 'yup';

export default Yup.object().shape({
    email: Yup.string()
        .email('Please provide a valid email')
        .required('Email is required'),
    password: Yup.string()
        .required('Password is required')
});