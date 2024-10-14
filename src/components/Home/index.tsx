import { StyledContainer } from "./styles";

import MenuSection from "./Menu";
import Featured from "./Featured";
import Trending from "./Trending";

const Home = () => (
  <StyledContainer>
    <MenuSection />
    <Featured />
    <Trending />
  </StyledContainer>
);

export default Home;
