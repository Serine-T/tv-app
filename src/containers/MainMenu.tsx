import { List, ListItem, ListItemIcon, ListItemText, Drawer } from '@mui/material';
import { Home, Search, Movie } from '@mui/icons-material';
import styled from 'styled-components';

const CustomDrawer = styled(Drawer)`
  & .MuiDrawer-paper {
    width: 80px;
    background-color: rgba(0, 0, 0, 0.8);
    transition: width 0.3s ease;
    &:hover {
      width: 240px;
    }
  }
`;

const MainMenu: React.FC = () => {
  return (
    <CustomDrawer variant="permanent">
      <List>
        <ListItem>
          <ListItemIcon><Home /></ListItemIcon>
          <ListItemText primary="Home" />
        </ListItem>
        <ListItem>
          <ListItemIcon><Search /></ListItemIcon>
          <ListItemText primary="Search" />
        </ListItem>
        <ListItem>
          <ListItemIcon><Movie /></ListItemIcon>
          <ListItemText primary="Movies" />
        </ListItem>
        {/* Add other menu items */}
      </List>
    </CustomDrawer>
  );
};

export default MainMenu;
