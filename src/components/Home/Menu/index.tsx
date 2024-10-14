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

const Sidebar: React.FC = () => {
  const [isHovered, setIsHovered] = useState<boolean>(false);

  const handleHover = (hover: boolean) => setIsHovered(hover);

  return (
    <div style={{ height: '100vh', zIndex: 999 }}>
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
    </div>
  );
}

export default Sidebar;
