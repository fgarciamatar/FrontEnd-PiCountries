// import { defineConfig } from 'vite'
// import react from '@vitejs/plugin-react'

// // https://vitejs.dev/config/
// export default defineConfig({
//   plugins: [react()],
// })

import { defineConfig } from 'vite';

export default defineConfig({
  // ...
  server: {
    proxy: {
      '/api': {
        target: 'https://backend-countriespi-production.up.railway.app/', // Cambia esto por la URL de tu servidor en Railway
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/api/, ''),
      },
    },
  },
});
