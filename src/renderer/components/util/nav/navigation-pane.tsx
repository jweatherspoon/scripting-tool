import { Button, Stack } from '@mui/material';
import { Link, useLocation } from 'react-router-dom';
import { NavigationProps } from '../../../models/view-info';
import { Icon } from '../icon';

export const NavigationPane = ({ config }: NavigationProps) => {
  const location = useLocation();

  const navButtons = config.map((x) => (
    <Link to={x.route}>
      <Button
        sx={{
          p: 2,
          bgcolor: location.pathname === x.route ? 'lightgray' : 'whitesmoke',
        }}
      >
        <Icon name={x.icon} sx={{ height: 50, width: 50 }} />
      </Button>
    </Link>
  ));

  return <Stack sx={{ gap: 1 }}>{navButtons}</Stack>;
};
