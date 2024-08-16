import { useId } from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import css from './ContactForm.module.css';
import { useDispatch } from 'react-redux';
import { addContact } from '../../redux/contactsOps';

const ContactSchema = Yup.object().shape({
  name: Yup.string()
    .min(3, 'Too Short!')
    .max(50, 'Too Long!')
    .required('Required'),
  number: Yup.string()
    .matches(/^\d+(-\d+)*$/, 'It should be a number!')
    .min(3, 'Too Short!')
    .max(50, 'Too Long!')
    .required('Required'),
});

export default function ContactForm() {
  const id = useId();
  const dispatch = useDispatch();

  const handleSubmit = (values, actions) => {
    dispatch(
      addContact({
        name: values.name,
        number: values.number,
      })
    );
    actions.resetForm();
  };

  return (
    <Formik
      validationSchema={ContactSchema}
      initialValues={{
        name: '',
        number: '',
      }}
      onSubmit={handleSubmit}
    >
      <Form className={css.form}>
        <label htmlFor={`contactName-${id}`} className={css.label}>
          Name
        </label>
        <Field
          type="text"
          name="name"
          id={`contactName-${id}`}
          className={css.input}
        />
        <ErrorMessage
          name="name"
          component="span"
          className={css.errorMessage}
        />
        <label htmlFor={`contactNumber-${id}`} className={css.label}>
          Number
        </label>
        <Field
          type="text"
          name="number"
          id={`contactNumber-${id}`}
          className={css.input}
        />
        <ErrorMessage
          name="number"
          component="span"
          className={css.errorMessage}
        />
        <button type="submit" className={css.button}>
          Add contact
        </button>
      </Form>
    </Formik>
  );
}
