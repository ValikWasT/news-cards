import { NotFoundBox, NotFoundTitle, NotFoundLink } from './NotFoundStyled';

export const NotFound = () => {
  return (
    <NotFoundBox>
      <NotFoundTitle>Not Found, 404</NotFoundTitle>
      <NotFoundLink to="/">Go home page</NotFoundLink>
    </NotFoundBox>
  );
};
