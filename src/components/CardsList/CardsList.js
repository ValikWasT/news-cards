import { useSelector } from 'react-redux';
import { nanoid } from '@reduxjs/toolkit';
import {
  selectFilterValue,
  selectNewsCards,
  selectTotalResuts,
} from 'redux/selectors';
import { CardsList, CardListTitle } from './CardsListStyled';
import { Card } from 'components/CardItem/CardItem';
import '../../index.css';

export const CardsListSection = () => {
  const filter = useSelector(selectFilterValue);
  const cards = useSelector(selectNewsCards);
  const totalResults = useSelector(selectTotalResuts);

  const setSortedCards = (cards, filter) => {
    const newArrayOfCards = [];
    const arrayWordsOfFilter = filter.split(' ');
    for (const card of cards) {
      const newCard = {
        title: card.title,
        description: card.description.slice(0, 100),
        url: card.url,
        imageURL: card.urlToImage,
        content: card.content,
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
    return sortedArray;
  };

  const sortedCards = setSortedCards(cards, filter);

  return (
    <>
      <CardListTitle>Total results: {totalResults}</CardListTitle>
      <CardsList>
        {sortedCards.length > 0 &&
          sortedCards.map(card => <Card key={nanoid()} card={card} />)}
      </CardsList>
    </>
  );
};
