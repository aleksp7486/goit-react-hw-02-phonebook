import { Title, Input } from './Filter.styled';

const Filter = ({ value, changeFilter }) => {
  return (
    <div>
      <Title>Find contacts by name</Title>
      <Input onChange={changeFilter} type="text" name="filter" value={value} />
    </div>
  );
};
export default Filter;
