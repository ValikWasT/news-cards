import PropTypes from 'prop-types';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import CalendarTodayIcon from '@mui/icons-material/CalendarToday';
import { useLocation } from 'react-router-dom';
import { format } from 'date-fns';
import {
  CardItem,
  CardText,
  CardTitle,
  CardImg,
  CardBox,
  CardTime,
  ReadMoreLink,
  CardTimeText,
  ReadMoreText,
} from './CardItemStyled';

export const Card = ({
  card: { imageURL, title, description, publishedAt, id },
}) => {
  const localDate = format(new Date(publishedAt), 'MMMM do, yyyy');
  const location = useLocation();

  return (
    <CardItem>
      {imageURL ? (
        <CardImg src={imageURL} />
      ) : (
        <CardImg src={'https://via.placeholder.com/400x220'} />
      )}
      <CardBox>
        <CardTime>
          <CalendarTodayIcon fontSize="small" />{' '}
          <CardTimeText>{localDate}</CardTimeText>
        </CardTime>
        <CardTitle dangerouslySetInnerHTML={{ __html: title }} />
        <CardText dangerouslySetInnerHTML={{ __html: description }} />
        <ReadMoreLink to={`/articles/${id}`} state={{ from: location }}>
          <ReadMoreText>Read more</ReadMoreText>{' '}
          <ArrowForwardIcon fontSize="small" />
        </ReadMoreLink>
      </CardBox>
    </CardItem>
  );
};

Card.propTypes = {
  card: PropTypes.shape({
    imageURL: PropTypes.string,
    title: PropTypes.string.isRequired,
    id: PropTypes.number.isRequired,
    description: PropTypes.string.isRequired,
    publishedAt: PropTypes.string.isRequired,
  }).isRequired,
};
