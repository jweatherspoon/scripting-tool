import { TextField } from '@mui/material';

export const JsonEditor = ({
  text,
  setText,
  readonly,
  label,
  rows,
}: JsonEditorProps) => {
  return (
    <TextField
      multiline
      label={label}
      rows={rows ?? 20}
      value={text ?? ''}
      onChange={(e) => !readonly && setText(e.target.value)}
      fullWidth
    />
  );
};

export interface JsonEditorProps {
  text: string;
  label: string;
  setText: (t: string) => void;
  readonly?: true;
  rows?: number;
}
