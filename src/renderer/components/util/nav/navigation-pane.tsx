import { Button, Stack } from '@mui/material';
import { Link } from 'react-router-dom';
import { NavigationProps } from '../../../models/view-info';

export const NavigationPane = ({ config }: NavigationProps) => {
  const navButtons = config.map((x) => (
    <Link to={x.route}>
      <Button sx={{ p: 2 }}>{x.icon}</Button>
    </Link>
  ));

  return <Stack>{navButtons}</Stack>;
};
