import styled from 'styled-components';
import { NavLink } from 'react-router-dom';
export const NotFoundBox = styled.div`
  width: 500px;
  margin: 0 auto;
  text-align: center;
`;
export const NotFoundTitle = styled.h1``;
export const NotFoundLink = styled(NavLink)`
  text-decoration: none;
  font-size: 24px;
  color: orangered;
`;
