import { DataObject } from '@mui/icons-material';
import { Button, TextField, Typography } from '@mui/material';
import { Box } from '@mui/system';
import { useState } from 'react';

export const JsonEditor = ({
  text,
  setText,
  readonly,
  label,
  rows,
}: JsonEditorProps) => {
  const [beautified, setBeautified] = useState(false);

  const getText = (t: string) => {
    if (!t) {
      return '';
    }

    try {
      if (readonly && beautified) {
        const json = JSON.parse(t);
        return JSON.stringify(json, undefined, 2);
      }
    } catch {}

    return t;
  };

  const updateText = (t: string) => {
    if (readonly) {
      return;
    }

    setText(t);
  };

  return (
    <Box>
      <TextField
        multiline
        label={label}
        rows={rows ?? 20}
        value={getText(text)}
        onChange={(e) => updateText(e.target.value)}
        fullWidth
      />
      <Button
        onClick={() => {
          const newBeautified = !beautified;
          try {
            if (newBeautified && !readonly) {
              const json = JSON.parse(text);
              const newText = JSON.stringify(json, undefined, 2);
              updateText(newText);
            }
          } catch {
          } finally {
            setBeautified(newBeautified);
          }
        }}
      >
        <DataObject />
        <Typography variant='button'>Beautify</Typography>
      </Button>
    </Box>
  );
};

export interface JsonEditorProps {
  text: string;
  label: string;
  setText: (t: string) => void;
  readonly?: true;
  rows?: number;
}
