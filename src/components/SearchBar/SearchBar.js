import { useDispatch } from 'react-redux';
import { setFilterValue } from 'redux/filterSlice';
import {
  SearchBarContainer,
  SearchBarInput,
  SearchForm,
  SearchButton,
  SearchBarTitle,
} from './SearchBarStyled';
import { fetchCards } from '../../redux/operations';
export const SearchBarSection = () => {
  const dispatch = useDispatch();

  const handleSubmit = evt => {
    evt.preventDefault();
    const filter = evt.currentTarget.elements.text.value;
    dispatch(setFilterValue(filter));
    dispatch(fetchCards(filter));
  };

  return (
    <SearchBarContainer>
      <SearchBarTitle>Filter by keywords</SearchBarTitle>
      <SearchForm onSubmit={handleSubmit}>
        <SearchButton type="submit">Search</SearchButton>
        <SearchBarInput type="text" name="text" placeholder="Enter text..." />
      </SearchForm>
    </SearchBarContainer>
  );
};
