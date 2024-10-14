import { ReactNode } from 'react';
import { IconText, IconWrapper } from './styles';

interface IMenuItem {
  title: string;
  icon?: ReactNode;
  path: string;
  isHovered: boolean;
}

const MenuItem = ({ title, icon, path, isHovered }: IMenuItem) => {
  const selectedMenuItem = '/';

  const handleMenuItemClick = (path: string) => {
    //TODO: Handle menu item click here
  };

  return (
    <IconWrapper
      direction="row"
      selected={selectedMenuItem === path}
      onClick={() => handleMenuItemClick(path)}
    >
      {icon || null}
      <IconText isHovered={isHovered}>{title}</IconText>
    </IconWrapper>
  );
};

export default MenuItem;
