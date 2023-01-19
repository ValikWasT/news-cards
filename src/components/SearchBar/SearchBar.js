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
        titleRelevancy: 0,
        descRelevancy: 0,
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
    const sortedArray = [...newArrayOfCards].sort((a, b) => {
      const first = a.titleRelevancy + a.descRelevancy;
      const second = b.titleRelevancy + b.descRelevancy;
      if (first === second) {
        if (
          a.titleRelevancy >= b.titleRelevancy &&
          a.titleRelevancy >= b.descRelevancy
        ) {
          return -1;
        }
        return 1;
      }
      return second - first;
    });
    console.log(sortedArray);
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
