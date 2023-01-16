import PropTypes from 'prop-types';
import { format } from 'date-fns';
import {
  CardItem,
  CardText,
  CardTitle,
  CardImg,
  CardBox,
  CardTime,
  ReadMoreLink,
} from './CardItemStyled';

export const Card = ({
  card: { imageURL, title, content, url, description, publishedAt },
}) => {
  const localDate = format(new Date(publishedAt), 'MMMM do, yyyy');

  return (
    <CardItem>
      {imageURL ? (
        <CardImg src={imageURL} />
      ) : (
        <CardImg src={'https://via.placeholder.com/400x220'} />
      )}
      <CardBox>
        <CardTime>{localDate.toString()}</CardTime>
        <CardTitle dangerouslySetInnerHTML={{ __html: title }} />
        <CardText dangerouslySetInnerHTML={{ __html: description }} />
        <ReadMoreLink to="/article">Read more</ReadMoreLink>
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
