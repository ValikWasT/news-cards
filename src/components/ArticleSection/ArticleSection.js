import { useLocation, useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import { fetchCardById } from 'redux/operations';
import { useEffect } from 'react';
import {
  ArticleSection,
  ArticleImg,
  ArticleContentBox,
  ArticleTitle,
  ArticleText,
  ArticleTextUrl,
  BackLink,
  BackLinkText,
} from './ArticleSectionStyled';
import { selectItemById } from 'redux/selectors';

export const Article = () => {
  const dispatch = useDispatch();
  const { article } = useParams();

  useEffect(() => {
    dispatch(fetchCardById(article));
  }, [article, dispatch]);

  const card = useSelector(selectItemById);

  const location = useLocation();
  const backLinkHref = location.state?.from ?? '/';

  return (
    <ArticleSection>
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
