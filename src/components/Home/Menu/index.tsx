import { useState } from 'react';
import MenuItem from './MenuItem';
import { 
  HoveredMenuIcons, 
  MenuIcons, 
  SidebarContainer, 
  StyledButtom 
} from './styles';

import { additionalMenuItems, mainMenuItems } from './data';
import ButtonItem from './ButtomItem';
import Profile from './Profile';
import Box from '@mui/material/Box';

const Sidebar: React.FC = () => {
  const [isHovered, setIsHovered] = useState<boolean>(false);

  const handleHover = (hover: boolean) => setIsHovered(hover);

  return (
    <Box height="100vh" zIndex= {999}>
      <SidebarContainer
        onMouseEnter={() => handleHover(true)}
        onMouseLeave={() => handleHover(false)}
        isHovered={isHovered}
      >
        {isHovered ? (
          <>
            <Profile />

            <HoveredMenuIcons>
              {mainMenuItems.map(item => (
                <MenuItem 
                  key={item.title} 
                  {...item} 
                  isHovered={isHovered} 
                />
              ))}
            </HoveredMenuIcons>

            <StyledButtom>
              {additionalMenuItems.map(item => (
                <ButtonItem
                  key={item.title} 
                  {...item} 
                />
              ))}
            </StyledButtom>
          </>
        ) : (
          <MenuIcons>
            {mainMenuItems.map(item => (
              <MenuItem 
                key={item.title} 
                {...item} 
                isHovered={isHovered} 
              />
            ))}
          </MenuIcons>
        )}
      </SidebarContainer>
    </Box>
  );
}

export default Sidebar;
