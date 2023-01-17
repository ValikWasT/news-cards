import { useLocation } from 'react-router-dom';
import {
  ArticleSection,
  ArticleImg,
  ArticleContentBox,
  ArticleTitle,
  ArticleText,
  ArticleTextUrl,
  BackLink,
} from './ArticleSectionStyled';
export const Article = () => {
  const content = useLocation().state;
  const backLinkHref = content.state?.from ?? '/';
  return (
    <ArticleSection>
      <ArticleImg style={{ backgroundImage: `url(${content.imageURL})` }} />
      <ArticleContentBox>
        <ArticleTitle dangerouslySetInnerHTML={{ __html: content.title }} />
        <ArticleText dangerouslySetInnerHTML={{ __html: content.content }} />
        <ArticleText style={{ color: 'red', textAlign: 'center' }}>
          Sorry but our API did not give more information about this article,
          you can read more information on original site of this article.{' '}
          <ArticleTextUrl href={content.url} target="_blank">
            Click here and read more.
          </ArticleTextUrl>
        </ArticleText>
        <BackLink to={backLinkHref}>Back to homepage</BackLink>
      </ArticleContentBox>
    </ArticleSection>
  );
};
