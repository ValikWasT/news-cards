import { useSelector } from 'react-redux';
// import { nanoid } from '@reduxjs/toolkit';
import { selectArticles, selectTotalResuts } from 'redux/selectors';
import { CardsList, CardListTitle, CardTitleBorder } from './CardsListStyled';
import { Card } from 'components/CardItem/CardItem';
import '../../index.css';

export const CardsListSection = () => {
  const articles = useSelector(selectArticles);
  const totalResults = useSelector(selectTotalResuts);

  return (
    <>
      {console.log('alsd')}
      <CardListTitle>Results: {totalResults}</CardListTitle>
      <CardTitleBorder />
      <CardsList>
        {articles.length > 0 &&
          articles.map(card => <Card key={card.id} card={card} />)}
      </CardsList>
    </>
  );
};
