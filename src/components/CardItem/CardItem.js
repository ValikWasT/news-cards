import PropTypes from 'prop-types';
// import { useState } from 'react';
// import { useDispatch, useSelector } from 'react-redux';
import {
  CardItem,
  CardText,
  CardTitle,
  CardImg,
  CardBox,
  CardTime,
} from './CardItemStyled';
// import { getIsLoading } from 'redux/selectors';
// import Notiflix from 'notiflix';
export const Card = ({
  card: { imageURL, title, content, url, description, publishedAt },
}) => {
  //   const [loadingId, setLoadingId] = useState(null);
  //   const dispatch = useDispatch();
  //   const isLoading = useSelector(getIsLoading);

  const localDate = new Intl.DateTimeFormat('en-US', {
    year: 'numeric',
    month: 'long',
    day: '2-digit',
  }).format(new Date(publishedAt));

  return (
    <CardItem>
      {imageURL ? (
        <CardImg src={imageURL} />
      ) : (
        <CardImg src={'https://via.placeholder.com/400x220'} />
      )}
      <CardBox>
        <CardTime>{localDate}</CardTime>
        <CardTitle dangerouslySetInnerHTML={{ __html: title }} />
        <CardText dangerouslySetInnerHTML={{ __html: description }} />
      </CardBox>
    </CardItem>
  );
};

Card.propTypes = {
  card: PropTypes.shape({
    imageURL: PropTypes.string,
    title: PropTypes.string.isRequired,
    content: PropTypes.string.isRequired,
    url: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    publishedAt: PropTypes.string.isRequired,
  }).isRequired,
};
