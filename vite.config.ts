import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '@shared': path.resolve(__dirname, 'src/shared'),
      '@components': path.resolve(__dirname, 'src/shared/components'),
      '@inputs': path.resolve(__dirname, 'src/shared/components/inputs'),
      '@icons': path.resolve(__dirname, 'src/shared/components/icons'),
      '@pages': path.resolve(__dirname, 'src/pages'),
    },
  },
})
