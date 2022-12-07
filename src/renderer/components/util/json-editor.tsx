import { TextField } from '@mui/material';

export const JsonEditor = ({
  text,
  setText,
  readonly,
  rows,
}: JsonEditorProps) => {
  return (
    <TextField
      multiline
      rows={rows ?? 20}
      value={text}
      onChange={(e) => setText(e.target.value)}
      fullWidth
    />
  );
};

export interface JsonEditorProps {
  text: string;
  setText: (t: string) => void;
  readonly?: true;
  rows?: number;
}
