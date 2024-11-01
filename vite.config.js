import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
export default defineConfig({
  plugins: [react()],
  esbuild: {
    jsxFactory: '_jsx',
    jsxFragment: '_Fragment',
    jsxInject: `import { jsx as _jsx, Fragment as _Fragment } from 'react/jsx-runtime'`,
  },
});
