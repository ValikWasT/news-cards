import styled from 'styled-components';
import { NavLink } from 'react-router-dom';
export const CardItem = styled.li`
  width: 400px;
  height: 530px;
  background: #ffffff;
  border: 1px solid #eaeaea;
  box-shadow: 0px 8px 24px rgba(0, 0, 0, 0.05);
  border-radius: 5px;
  margin-bottom: 45px;
`;
export const CardBox = styled.div`
  height: calc(100% - 265px);
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 25px;
`;
export const CardText = styled.p`
  font-family: 'Montserrat';
  font-weight: 400;
  font-size: 16px;
  line-height: 1.5;
  color: #363636;
  margin: 0;
`;
export const CardTitle = styled.p`
  font-family: 'Montserrat';
  font-weight: 400;
  font-size: 24px;
  line-height: 1.21;
  color: #363636;
  margin: 0;
`;
export const CardImg = styled.img`
  width: 400px;
  height: 220px;
`;
export const CardTime = styled.div`
  font-family: 'Montserrat';
  font-weight: 400;
  font-size: 14px;
  line-height: 1.5;
  color: #363636;
  opacity: 0.6;
  margin: 0;
  display: flex;
  align-items: center;
`;

export const CardTimeText = styled.p`
  margin: 0;
  margin-left: 8px;
`;

export const ReadMoreLink = styled(NavLink)`
  font-family: 'Montserrat';
  font-style: normal;
  font-weight: 700;
  font-size: 16px;
  line-height: 1.5;
  color: #363636;
  text-decoration: none;
  display: flex;
  align-items: center;
`;

export const ReadMoreText = styled.p`
  margin: 0;
  margin-right: 6px;
`;
