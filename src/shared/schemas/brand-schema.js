import * as Yup from 'yup';

export default Yup.object().shape({
    name: Yup.string()
        .required('Name is required'),
    slug: Yup.string()
        .required('Slug is required'),
    logo: Yup.string()
        .required('Logo is required')
});