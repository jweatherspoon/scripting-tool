import { MenuItem, Select } from '@mui/material';
import { useContext } from 'react';
import { EnvironmentContext } from '../../context/environment-context';

export const EnvironmentSelector = () => {
  const { envs, selectedEnv, updateEnv } = useContext(EnvironmentContext);

  const options = envs.map((x) => (
    <MenuItem value={x.name} key={x.name}>
      {x.name}
    </MenuItem>
  ));

  return (
    <Select
      sx={{ minWidth: 150, bgcolor: 'whitesmoke' }}
      variant='standard'
      value={selectedEnv?.name ?? 'NO ENV'}
      onChange={(e) => envs.length && updateEnv(e.target.value)}
    >
      {options.length ? options : <MenuItem value='NO ENV'>NO ENV</MenuItem>}
    </Select>
  );
};
