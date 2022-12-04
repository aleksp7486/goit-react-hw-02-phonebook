import PropTypes from 'prop-types';
import { BsFillPersonPlusFill } from 'react-icons/bs';
import { Formik, Form } from 'formik';
import { Label, Input, Btn, Error } from './ContactForm.styled';
import * as yup from 'yup';

const initialValues = {
  name: '',
  number: '',
};

const schema = yup.object().shape({
  name: yup.string().max(40).required('Укажите имя'),
  number: yup
    .number()
    .typeError('Это не похоже на номер телефона')
    .positive('Номер телефона не может начинаться с минуса')
    .integer('Номер телефона не может содержать десятичную точку')
    .min(8, 'Число должно быть больше или равно 8')
    .required('Укажите номер телефона'),
});

export const ContactForm = ({ onFormSubmit }) => {
  return (
    <Formik
      initialValues={initialValues}
      validationSchema={schema}
      onSubmit={onFormSubmit}
    >
      <Form>
        <Label>Name:</Label>
        <Input type="text" name="name" placeholder="Введите имя" required />
        <Error name="name" component="div" />

        <Label>Number: </Label>
        <Input
          type="tel"
          name="number"
          placeholder="Введите номер телефона"
          required
        />
        <Error name="number" component="div" />

        <Btn type="submit">
          <span>
            <BsFillPersonPlusFill />
          </span>
          Add contact
        </Btn>
      </Form>
    </Formik>
  );
};

ContactForm.propTypes = {
  onFormSubmit: PropTypes.func.isRequired,
};

export default ContactForm;
