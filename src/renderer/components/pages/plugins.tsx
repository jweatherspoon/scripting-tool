import { useState } from 'react';
import { Box, Stack } from '@mui/system';
import { Button, Typography } from '@mui/material';
import { PlayArrowOutlined } from '@mui/icons-material';
import { useIpc } from '../../hooks/useIpc';
import { Channels } from '../../../main/models/ipc';
import { PluginData } from '../../../main/models/plugins';
import { PluginCard } from '../plugins/plugin-card';
import { usePlugin } from '../../hooks/usePlugin';
import { JsonEditor } from '../util/json-editor';

const PluginsPage = () => {
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
      <Stack sx={{ w: 1 }}>
        <Typography variant='h5' textTransform='uppercase'>
          plugins
        </Typography>
        {plugins}
      </Stack>
      <Box
        sx={{
          h: 1,
          w: 1,
          display: 'flex',
          flexDirection: 'column',
          p: 1,
          gap: 2,
        }}
      >
        {selectedPlugin ? (
          <>
            <Button
              variant='outlined'
              sx={{ alignSelf: 'flex-end' }}
              onClick={() => invoke?.()}
            >
              Execute
              <PlayArrowOutlined />
            </Button>
            <JsonEditor
              label='Input'
              text={input}
              setText={setInput}
              rows={10}
            />
            <JsonEditor label='Output' text={output} readonly rows={10} />
          </>
        ) : (
          <Typography
            variant='h4'
            sx={{ alignSelf: 'center', justifySelf: 'center' }}
          >
            Select a plugin!
          </Typography>
        )}
      </Box>
    </Box>
  );
};

export default PluginsPage;
