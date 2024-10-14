import { StyledText } from './styles';

interface ButtonItemProps {
  title: string;
}

const ButtonItem: React.FC<ButtonItemProps> = ({ title }) => (
  <StyledText>
    {title}
  </StyledText>
);

export default ButtonItem;
