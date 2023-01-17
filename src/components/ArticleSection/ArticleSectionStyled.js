import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const ArticleSection = styled.section`
  width: 100vw;
`;
export const ArticleImg = styled.div`
  height: 245px;
  width: 100%;
  background-size: cover;
`;
export const ArticleContentBox = styled.div`
  background-color: #fff;
  position: relative;
  margin: 0 75px;
  width: calc(100% - 150px);
  top: -95px;
  border: 1px solid #eaeaea;
  box-shadow: 0px 8px 24px rgba(0, 0, 0, 0.05);
  border-radius: 5px;
`;
export const ArticleTitle = styled.h2`
  text-align: center;
  font-family: 'Montserrat';

  font-size: 24px;
  line-height: 1.21;
  color: #363636;
  margin-top: 35px;
  margin-bottom: 50px;
`;
export const ArticleText = styled.p`
  padding: 0 75px;
  font-family: 'Montserrat';
  font-size: 18px;
  line-height: 1.5;
`;
export const ArticleTextUrl = styled.a`
  text-decoration: none;
  color: green;
  font-weight: 700;
`;

export const BackLink = styled(NavLink)`
  font-family: 'Montserrat';
  font-weight: 700;
  font-size: 16px;
  line-height: 1.5;
  color: #363636;
  text-decoration: none;
  position: absolute;
  bottom: -35px;
  left: 75px;
`;
