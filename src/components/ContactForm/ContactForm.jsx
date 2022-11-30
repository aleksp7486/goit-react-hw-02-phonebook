import { Component } from 'react';
import { Form, Label, Input, Btn } from './ContactForm.styled';
import { BsFillPersonPlusFill } from 'react-icons/bs';

const INITIAL_STATE = {
  name: '',
  number: '',
};

export class ContactForm extends Component {
  state = { ...INITIAL_STATE };
  handleChange = e => {
    const { name, value } = e.target;
    this.setState({ [name]: value });
  };

  handleSubmit = e => {
    const { onFormSubmit } = this.props;
    e.preventDefault();
    onFormSubmit(this.state);
    this.reset();
  };

  reset = () => {
    this.setState({ ...INITIAL_STATE });
  };

  render() {
    return (
      <Form onSubmit={this.handleSubmit}>
        <Label htmlFor="name">
          Name:
          <Input
            onChange={this.handleChange}
            type="text"
            name="name"
            id="name"
            value={this.state.name}
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            required
          />
        </Label>
        <Label htmlFor="number">
          Number:
          <Input
            onChange={this.handleChange}
            type="tel"
            name="number"
            id="number"
            value={this.state.number}
            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
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
    );
  }
}

export default ContactForm;
