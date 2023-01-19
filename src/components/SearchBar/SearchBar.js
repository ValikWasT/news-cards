import { useDispatch, useSelector } from 'react-redux';
import SearchIcon from '@mui/icons-material/Search';
import Notiflix from 'notiflix';
import { selectFilterValue } from 'redux/selectors';
import { fetchCards } from '../../api/fetchCards';
import { setFilterValue } from 'redux/filterSlice';
import {
  setArticles,
  setError,
  setIsLoading,
  setTotalResults,
} from 'redux/cardsSlice';
import {
  SearchBarContainer,
  SearchBarInput,
  SearchForm,
  SearchButton,
  SearchBarTitle,
} from './SearchBarStyled';

export const SearchBarSection = () => {
  const dispatch = useDispatch();
  const filter = useSelector(selectFilterValue);

  const paintSimilarWords = (wordsArray, filterArray, card, key) => {
    for (const word of wordsArray) {
      for (const filterWord of filterArray) {
        if (word.toLowerCase() === filterWord.toLowerCase()) {
          card.relevancy += 1;

          if (key === 'title') {
            card.title = card.title.replace(
              `${word}`,
              `<span class="bgc">${word}</span>`
            );
            return;
          }

          if (key === 'description') {
            card.description = card.description.replace(
              `${word}`,
              `<span class="bgc">${word}</span>`
            );
            return;
          }
        }
      }
    }
  };

  const setSortedCards = (cards, filter) => {
    const newArrayOfCards = [];
    const arrayWordsOfFilter = filter.split(' ');

    for (const card of cards) {
      const newCard = {
        id: card.id,
        title: card.title,
        description: `${card.summary.slice(0, 100)}...`,
        url: card.url,
        imageURL: card.imageUrl,
        publishedAt: card.publishedAt,
        relevancy: 0,
      };

      const arrayWordsOfTitle = newCard.title.split(' ');
      const arrayWordsOfDescription = newCard.description.split(' ');

      paintSimilarWords(
        arrayWordsOfTitle,
        arrayWordsOfFilter,
        newCard,
        'title'
      );
      paintSimilarWords(
        arrayWordsOfDescription,
        arrayWordsOfFilter,
        newCard,
        'description'
      );

      newArrayOfCards.push(newCard);
    }
    const sortedArray = [...newArrayOfCards].sort(
      (a, b) => b.relevancy - a.relevancy
    );
    dispatch(setArticles(sortedArray));
    Notiflix.Notify.success(`Success! '${filter}' news found`);
  };

  const onFetchCards = async () => {
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

  const handleSubmit = evt => {
    evt.preventDefault();
    onFetchCards();
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
