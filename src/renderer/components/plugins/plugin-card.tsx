import { Card, Typography } from '@mui/material';
import { PluginData } from '../../../main/models/plugins';

export const PluginCard: React.FC<PluginCardProps> = ({
  data,
  select,
  selected,
}: PluginCardProps) => {
  return (
    <Card
      onClick={() => select?.()}
      sx={{
        cursor: 'pointer',
        bgcolor: selected ? 'lightgrey' : 'transparent',
      }}
    >
      <Typography variant='h6'>{data.name}</Typography>
    </Card>
  );
};

export interface PluginCardProps {
  data: PluginData;
  selected?: boolean;
  select?: () => void;
}
