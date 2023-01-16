import { useLocation } from 'react-router-dom';
import { ArticleSection, ArticleImg } from './ArticleSectionStyled';
export const Article = () => {
  const content = useLocation().state;
  console.log(content);
  return (
    <ArticleSection>
      <ArticleImg src={content.imageURL} />
    </ArticleSection>
  );
};
