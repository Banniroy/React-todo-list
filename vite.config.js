import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
   plugins: [react()],
+  base: '/banniroy/.github.io/react-todo-list_gh'
})
