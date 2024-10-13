import { FC } from 'react';
import Trending from './Trending';
import Featured from './Featured';
import Menu from './Menu';

const Home: FC = () => (
  <>
    <Featured />
    <Trending />
    <Menu />
  </>
);

export default Home;
