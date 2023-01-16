import { SearchBarSection } from '../components/SearchBar/SearchBar';
import { CardsListSection } from 'components/CardsList/CardsList';
import styled from 'styled-components';
const HomePageSection = styled.div`
  padding: 50px 75px;
`;

export const HomePage = () => {
  return (
    <HomePageSection>
      <SearchBarSection />
      <CardsListSection />
    </HomePageSection>
  );
};
