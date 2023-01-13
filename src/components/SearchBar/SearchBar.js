import { selectFilterValue } from 'redux/selectors';
import { useSelector, useDispatch } from 'react-redux';
import { setFilterValue } from 'redux/filterSlice';
import {
  SearchBarContainer,
  SearchBarInput,
  SearchForm,
  SearchButton,
} from './SearchBarStyled';
import { fetchCards } from '../../redux/operations';
export const SearchBarSection = () => {
  const dispatch = useDispatch();
  const filter = useSelector(selectFilterValue);

  const handleSubmit = evt => {
    evt.preventDefault();
    const form = evt.target;
    dispatch(fetchCards(form.elements.text.value));
  };

  const handleSearch = evt => {
    dispatch(setFilterValue(evt.currentTarget.value));
  };

  return (
    <SearchBarContainer>
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
