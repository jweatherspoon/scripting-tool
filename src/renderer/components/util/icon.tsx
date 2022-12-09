import { PowerOutlined, Settings } from '@mui/icons-material';
import { SxProps } from '@mui/material';
import React from 'react';
import { Icons } from 'renderer/models/icons';

const iconMap = new Map([
  [Icons.Plugin, PowerOutlined],
  [Icons.Settings, Settings],
]);

export const Icon: React.FC<IconProps> = ({ name, sx }: IconProps) => {
  const LoadedIcon = iconMap.get(name) ?? <></>;
  return <LoadedIcon sx={sx} />;
};

export interface IconProps {
  name: Icons;
  sx?: SxProps;
}
