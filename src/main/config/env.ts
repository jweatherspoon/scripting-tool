import path from 'path';

export const config = {
  plugins: {
    directory: path.join(process.cwd(), 'src/main/plugins/scripts'),
  },
};
