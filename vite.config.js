import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],


  // absolute imports
  resolve : {
    alias : {
      "@src" : "/src",
      "@app" : "/src/app/",
      "@assets" : "/src/assets",
      "@components" : "/src/components",
      "@core" : "/src/core",
      "@config" : "/src/config",
      "@screens" : "/src/screens",
      "@store": "/src/store",
    }
  }
})


