import { useDispatch, useSelector } from 'react-redux';
import SearchIcon from '@mui/icons-material/Search';
import { setFilterValue } from 'redux/filterSlice';
import {
  SearchBarContainer,
  SearchBarInput,
  SearchForm,
  SearchButton,
  SearchBarTitle,
} from './SearchBarStyled';
import { fetchCards } from '../../api/fetchCards';
import { selectFilterValue } from 'redux/selectors';
import {
  setArticles,
  setError,
  setIsLoading,
  setTotalResults,
} from 'redux/cardsSlice';
import Notiflix from 'notiflix';

export const SearchBarSection = () => {
  const dispatch = useDispatch();
  const filter = useSelector(selectFilterValue);

  const setSortedCards = (cards, filter) => {
    const newArrayOfCards = [];
    const arrayWordsOfFilter = filter.split(' ');
    for (const card of cards) {
      const newCard = {
        id: card.id,
        title: card.title,
        description: card.summary.slice(0, 100),
        url: card.url,
        imageURL: card.imageUrl,
        publishedAt: card.publishedAt,
        relevancy: 0,
      };
      const arrayWordsOfTitle = newCard.title.split(' ');
      const arrayWordsOfDescription = newCard.description.split(' ');
      for (const titleWord of arrayWordsOfTitle) {
        for (const filterWord of arrayWordsOfFilter) {
          if (titleWord.toLowerCase() === filterWord.toLowerCase()) {
            newCard.relevancy += 1;
            newCard.title = newCard.title.replace(
              `${titleWord}`,
              `<span class="bgc">${titleWord}</span>`
            );
          }
        }
      }

      for (const descriptionWord of arrayWordsOfDescription) {
        for (const filterWord of arrayWordsOfFilter) {
          if (descriptionWord.toLowerCase() === filterWord.toLowerCase()) {
            newCard.relevancy += 1;
            newCard.description = newCard.description.replace(
              `${descriptionWord}`,
              `<span class="bgc">${descriptionWord}</span>`
            );
          }
        }
      }

      newArrayOfCards.push(newCard);
    }
    const sortedArray = [...newArrayOfCards].sort(
      (a, b) => b.relevancy - a.relevancy
    );
    dispatch(setArticles(sortedArray));
    Notiflix.Notify.success(`Success! '${filter}' news found`);
  };

  const handleSubmit = async evt => {
    evt.preventDefault();
    try {
      const cards = await fetchCards(filter);
      if (cards.length === 0) {
        Notiflix.Notify.failure(`Error! '${filter}' news not found`);
        return;
      }
      setSortedCards(cards, filter);
      dispatch(setTotalResults(cards.length));
      dispatch(setIsLoading(true));
    } catch (error) {
      dispatch(setError(error));
    } finally {
      dispatch(setIsLoading(false));
    }
  };

  const handleSearch = e => {
    dispatch(setFilterValue(e.currentTarget.value));
  };

  return (
    <SearchBarContainer>
      <SearchBarTitle>Filter by keywords</SearchBarTitle>
      <SearchForm onSubmit={handleSubmit}>
        <SearchButton type="submit">
          <SearchIcon viewBox="0 0 20 20" />
        </SearchButton>
        <SearchBarInput
          type="text"
          name="text"
          value={filter}
          placeholder="Enter text..."
          onChange={handleSearch}
        />
      </SearchForm>
    </SearchBarContainer>
  );
};
