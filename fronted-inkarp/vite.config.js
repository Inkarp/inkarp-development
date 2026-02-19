import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

export default defineConfig({
  plugins: [react(), tailwindcss()],
  base: '/',
  build: {
    sourcemap: true,
    chunkSizeWarningLimit: 1500, // raise limit from 500 KB to 1.5 MB
    rollupOptions: {
      output: {
        manualChunks: {
          react: ['react', 'react-dom'],
          motion: ['framer-motion'],
          // vendor: ['axios', 'lodash'] 
        }
      }
    }
  },
  optimizeDeps: {
    include: ['framer-motion'],
  },
})



// import { defineConfig } from 'vite'
// import react from '@vitejs/plugin-react'
// import tailwindcss from '@tailwindcss/vite'

// export default defineConfig({
//   plugins: [react(), tailwindcss()],
//   base: '/',
//   build: {
//     sourcemap: true,
//   },
//   optimizeDeps: {
//     include: ['framer-motion'],
//   },
//   server: {
//     host: '0.0.0.0',      // allow LAN & custom host
//     port: 5173,
//     allowedHosts: ['inkarp.co.in'],  // 👈 whitelist your domain
//   },
// })