import PropTypes from 'prop-types';
// import { useState } from 'react';
// import { useDispatch, useSelector } from 'react-redux';
import {
  CardItem,
  CardText,
  CardTitle,
  CardImg,
  CardBox,
} from './CardItemStyled';
// import { getIsLoading } from 'redux/selectors';
// import Notiflix from 'notiflix';
export const Card = ({
  card: { imageURL, title, content, url, description },
}) => {
  //   const [loadingId, setLoadingId] = useState(null);
  //   const dispatch = useDispatch();
  //   const isLoading = useSelector(getIsLoading);

  return (
    <CardItem>
      <CardBox>
        {imageURL ? (
          <CardImg src={imageURL} />
        ) : (
          <CardImg src={'https://via.placeholder.com/400x220'} />
        )}

        <CardTitle dangerouslySetInnerHTML={{ __html: title }}></CardTitle>
        <CardText dangerouslySetInnerHTML={{ __html: description }}></CardText>
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
  }).isRequired,
};
