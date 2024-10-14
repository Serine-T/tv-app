import ListItemText from '@mui/material/ListItemText';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItem from '@mui/material/ListItem';

interface IMenuItem {
  title: string;
  icon?: string;
}

const MenuItem = ({ title, icon }: IMenuItem) => {
  return (
    <ListItem>
        {icon && (
            <ListItemIcon>
                <img src={icon} alt={title} style={{ width: 24, height: 24 }} />
            </ListItemIcon>
        )}
        <ListItemText primary={title} />
    </ListItem>
  )
}

export default MenuItem;