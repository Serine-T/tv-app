import { useState } from 'react';
import { List, ListItemIcon, ListItemText, Avatar } from '@mui/material';
import { BottomMenu, HoverListItem, MenuContainer, ProfileSection, StyledImg, StyledText } from './styles';
import { additionalMenuItems, mainMenuItems } from './data';
import avatar from '@assets/images/https_specials-8.png';

const MenuSection = () => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <MenuContainer
            isOpen={isOpen}
            onMouseEnter={() => setIsOpen(true)}
            onMouseLeave={() => setIsOpen(false)}
        >
            <ProfileSection isOpen={isOpen}>
                <Avatar alt="Profile Picture" src={avatar} />
                <StyledText variant="body1">Daniel</StyledText>
            </ProfileSection>

            <List>
                {mainMenuItems.map(({ icon, title}, index) => (
                    <HoverListItem key={index} isOpen={isOpen}>
                      <ListItemIcon>
                        <StyledImg src={icon} alt={title} />
                      </ListItemIcon>
                      {isOpen && <ListItemText primary={title} color="white" />}
                    </HoverListItem>
                ))}
            </List>
            <BottomMenu>
              <List>
                {additionalMenuItems.map(({ title }, index) => (
                  <HoverListItem key={index} isOpen={isOpen}>
                    {isOpen && <ListItemText primary={title} color="white" />}
                  </HoverListItem>
                ))}
              </List>
            </BottomMenu>
        </MenuContainer>
    );
};

export default MenuSection;
