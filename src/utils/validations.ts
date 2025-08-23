import * as Yup from 'yup';

export const ContactFormSchema = Yup.object({
  name: Yup.string().required('This field is required'),
  email: Yup.string().required('This field is required'),
  phone: Yup.string().required('This field is required'),
  whatsapp: Yup.string().required('This field is required'),
  requirement: Yup.string().required('This field is required'),
  location: Yup.string().required('This field is required'),
  budget: Yup.string().required('This field is required'),
  message: Yup.string().required('This field is required'),
});