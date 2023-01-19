import '../../index.css';
import { useSelector } from 'react-redux';
import { selectArticles, selectTotalResuts } from 'redux/selectors';
import { CardsList, CardListTitle, CardTitleBorder } from './CardsListStyled';
import { Card } from 'components/CardItem/CardItem';

export const CardsListSection = () => {
  const articles = useSelector(selectArticles);
  const totalResults = useSelector(selectTotalResuts);

  return (
    <>
      <CardListTitle>Results: {totalResults}</CardListTitle>
      <CardTitleBorder />
      <CardsList>
        {articles.length > 0 &&
          articles.map(card => <Card key={card.id} card={card} />)}
      </CardsList>
    </>
  );
};
