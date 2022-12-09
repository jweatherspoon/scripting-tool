import { Button, Stack } from '@mui/material';
import { Link, useLocation } from 'react-router-dom';
import { NavigationProps } from '../../../models/view-info';

export const NavigationPane = ({ config }: NavigationProps) => {
  const location = useLocation();

  const navButtons = config.map((x) => (
    <Link to={x.route}>
      <Button
        sx={{
          p: 2,
          bgcolor: location.pathname === x.route ? 'lightgray' : 'white',
        }}
      >
        {x.icon}
      </Button>
    </Link>
  ));

  return <Stack>{navButtons}</Stack>;
};
