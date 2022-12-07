import { useState } from 'react';
import { Box, Stack } from '@mui/system';
import { PageProps } from '../../models/view-info';
import { useIpc } from '../../hooks/useIpc';
import { Channels } from '../../../main/models/ipc';
import { PluginData } from '../../../main/models/plugins';
import { PluginCard } from '../plugins/plugin-card';
import { usePlugin } from '../../hooks/usePlugin';
import { JsonEditor } from '../util/json-editor';

export const PluginsPage: React.FC<PageProps> = (props) => {
  const { response }: { response: PluginData[] } = useIpc(Channels.GetPlugins);
  const [selectedPluginIndex, setSelectedPluginIndex] = useState<number>(-1);

  const selectedPlugin = response?.[selectedPluginIndex];
  const { input, setInput, output, invoke } = usePlugin(selectedPlugin?.name);

  const plugins =
    response?.map((x: PluginData, i: number) => (
      <PluginCard
        data={x}
        key={x.name}
        select={() => setSelectedPluginIndex(i)}
        selected={i === selectedPluginIndex}
      />
    )) ?? [];

  return (
    <Box
      sx={{
        p: 2,
        w: 1,
        h: 1,
        display: 'grid',
        gridTemplateColumns: '1fr 3fr',
      }}
    >
      <Stack sx={{ w: 0.2 }}>{plugins}</Stack>
      <Box>
        <JsonEditor text={input} setText={setInput} rows={10} />
      </Box>
    </Box>
  );
};
