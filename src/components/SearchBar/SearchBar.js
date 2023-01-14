import { selectFilterValue } from 'redux/selectors';
import { useSelector, useDispatch } from 'react-redux';
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
  const filter = useSelector(selectFilterValue);

  const handleSubmit = evt => {
    evt.preventDefault();
    const formText = evt.target.form.elements.text.value;
    dispatch(fetchCards(formText));
  };

  const handleSearch = evt => {
    dispatch(setFilterValue(evt.currentTarget.value));
  };

  return (
    <SearchBarContainer>
      <SearchBarTitle>Filter by keywords</SearchBarTitle>
      <SearchForm onSubmit={handleSubmit}>
        <SearchBarInput
          type="text"
          name="text"
          value={filter}
          placeholder="Enter text..."
          onChange={handleSearch}
        />
        <SearchButton type="submit">Search</SearchButton>
      </SearchForm>
    </SearchBarContainer>
  );
};
