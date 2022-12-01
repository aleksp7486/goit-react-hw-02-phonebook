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
        <Error name="name" component="div" />
        <Label htmlFor="name">
          Name:
          <Input
            type="text"
            name="name"
            id="name"
            placeholder="Введите имя"
            required
          />
        </Label>
        <Error name="number" component="div" />
        <Label htmlFor="number">
          Number:
          <Input
            type="tel"
            name="number"
            id="number"
            placeholder="Введите номер телефона"
            required
          />
        </Label>
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
