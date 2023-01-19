import { useEffect } from 'react';
import { useLocation, useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import { fetchCardById } from 'redux/operations';
import { selectItemById, selectError } from 'redux/selectors';
import {
  ArticleSection,
  ArticleImg,
  ArticleContentBox,
  ArticleTitle,
  ArticleText,
  ArticleTextUrl,
  BackLink,
  BackLinkText,
  ErrorMessage,
  ErrorMessageText,
  ErrorMessageLink,
} from './ArticleSectionStyled';

export const Article = () => {
  const dispatch = useDispatch();
  const location = useLocation();
  const error = useSelector(selectError);
  const card = useSelector(selectItemById);
  const { id } = useParams();

  useEffect(() => {
    dispatch(fetchCardById(id));
  }, [id, dispatch]);

  const backLinkHref = location.state?.from ?? '/';

  return (
    <ArticleSection>
      {error && (
        <ErrorMessage>
          <ErrorMessageText>{error}</ErrorMessageText>
          <ErrorMessageLink to="/">Go home page</ErrorMessageLink>
        </ErrorMessage>
      )}
      {card && (
        <>
          <ArticleImg style={{ backgroundImage: `url(${card.imageUrl})` }} />
          <ArticleContentBox>
            <ArticleTitle dangerouslySetInnerHTML={{ __html: card.title }} />
            <ArticleText dangerouslySetInnerHTML={{ __html: card.summary }} />
            <ArticleText style={{ color: 'red', textAlign: 'center' }}>
              Sorry but our API did not give more information about this
              article, you can read more information on original site of this
              article.{' '}
              <ArticleTextUrl href={card.url} target="_blank">
                Click here and read more.
              </ArticleTextUrl>
            </ArticleText>
            <BackLink to={backLinkHref}>
              <ArrowBackIcon fontSize="small" />
              <BackLinkText>Back to homepage</BackLinkText>
            </BackLink>
          </ArticleContentBox>
        </>
      )}
    </ArticleSection>
  );
};
