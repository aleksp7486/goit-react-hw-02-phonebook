import { Item, Text, Icon, Number, Btn } from './ContactList.styled';
import { BsFillPersonFill, BsFillPersonXFill } from 'react-icons/bs';

// BsFillPersonFill, BsFillPersonPlusFill, BsFillPersonXFill

const ContactList = ({ contacts, deleteContact }) => {
  return (
    <ul>
      {contacts.map(({ name, number, id }) => {
        return (
          <Item key={name} id={id}>
            <Icon>
              <BsFillPersonFill />
            </Icon>
            <Text>
              {name}:<Number>{number}</Number>
            </Text>
            <Btn onClick={deleteContact}>
              <BsFillPersonXFill />
            </Btn>
          </Item>
        );
      })}
    </ul>
  );
};

export default ContactList;
