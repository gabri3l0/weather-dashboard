import { defineConfig, loadEnv } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd(), '');
  return {
    define: {
      'process.env.OPEN_WEATHER_MAP_QUERY_API_KEY': JSON.stringify(env.OPEN_WEATHER_MAP_QUERY_API_KEY),
      'process.env.OPEN_WEATHER_MAP_REVERSE_API_KEY': JSON.stringify(env.OPEN_WEATHER_MAP_REVERSE_API_KEY)
    },
    plugins: [react()],
  }
})
